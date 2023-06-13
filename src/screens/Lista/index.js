import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, where } from 'firebase/firestore'
const db = getFirestore(firebase)
import styles from './style';
import { MaterialIcons } from '@expo/vector-icons'

export default function Lista({ navigation }) {
    const [product, setProduct] = useState([])

    const deleteProduct = (id) => {
        deleteDoc(doc(db, "products", id))
    }

    const editActivitie = (id) => {
        navigation.navigate('UpdateProduct', { id: id })
    }

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

         const q = query(
            collection(db, "products"),
            where("userId", "==", user.uid), // Filtrar as atividades pelo ID do usuário
            orderBy("data_registro", "asc")
        );

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

                            <TouchableOpacity  onPress={() => editActivitie(item.id)}>
                                <MaterialIcons name="edit" size={26} color="#00E5FF"></MaterialIcons>
                            </TouchableOpacity>
                        </View>

                    </View>
                }
            />
        </View>
    );
}