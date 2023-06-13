import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)

export default function CreateProduct({ navigation }) {
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [cor, setCor] = useState("")
    const [ano, setAno] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)


    const validade = () => {
        if (marca == "" || modelo == "" || cor == "" || ano == "") {
            setErrorCreateProduct("Informe todos os campos")
        } else{
            setErrorCreateProduct(null)
            createProduct()
            navigation.navigate('Lista')
        }
    }

    const createProduct = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        
        const newProduct = addDoc(collection(db, 'products'), {
            marca: marca,
            modelo: modelo,
            cor: cor,
            ano: ano,
            data_registro: serverTimestamp(),
            userId: user.uid
        });

        navigation.navigate('Tabs')
    }

    return (
        <View style={styles.container}>
            {errorCreateProduct != null &&
                <Text style={styles.alert}>{errorCreateProduct}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Marca'
                value={marca}
                onChangeText={setMarca}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Modelo'
                value={modelo}
                onChangeText={setModelo}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Cor'
                value={cor}
                onChangeText={setCor}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Ano'
                value={ano}
                onChangeText={setAno}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade}
            >
                <Text style={styles.textBtn}>Criar Coleção</Text>
            </TouchableOpacity>

        </View>
    );
}