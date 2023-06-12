import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, documentId, serverTimestamp, updateDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import styles from './style';
import { MaterialIcons } from '@expo/vector-icons'

export default function Lista({ navigation }) {
    const [product, setProduct] = useState([])

    const deleteProduct = (id) => {
        deleteDoc(doc(db, "products", id))
    }


    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("data_registro", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
                // console.log(doc.data())
            });
            setProduct(products)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({ item }) =>
                    <View style={styles.produto}>
                        <View>
                            <Text style={styles.descricao}>Marca: {item.marca}</Text>
                            <Text style={styles.descricao}>Modelo: {item.modelo}</Text>
                            <Text style={styles.descricao}>Cor: {item.cor}</Text>
                            <Text style={styles.descricao}>Ano: {item.ano}</Text>
                        </View>
                        <View style={styles.containerIcons}>
                            <TouchableOpacity onPress={() => deleteProduct(item.id)} style={styles.icons}>
                                <MaterialIcons name="delete" size={26} color="#00E5FF"></MaterialIcons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('UpdateProduct')}>
                                <MaterialIcons name="edit" size={26} color="#00E5FF"></MaterialIcons>
                            </TouchableOpacity>
                        </View>

                    </View>
                }
            />
        </View>
    );
}