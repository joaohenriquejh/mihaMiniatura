import { useState } from 'react';
import React, { useEffect} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore'

const db = getFirestore(firebase)

export default function UpdateProduct({ route, navigation }) {
    const { id } = route.params;
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [cor, setCor] = useState("")
    const [ano, setAno] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)


    const validade = () => {
        if (marca == "" || modelo == "" || cor == "" || ano == "") {
            setErrorCreateProduct("Informe todos os campos")
        } else {
            setErrorCreateProduct(null)
            updateProduct()
        }
    }

    useEffect(() => {
        // Carregar dados da atividade com base no ID
        const loadActivity = async () => {
            try {
                const activityRef = doc(db, 'products', id);
                const activitySnapshot = await getDoc(activityRef);

                if (activitySnapshot.exists()) {
                    const { marca, modelo, cor, ano } = activitySnapshot.data();
                    setMarca(marca);
                    setModelo(modelo);
                    setCor(cor);
                    setAno(ano);
                } else {
                    // Atividade não encontrada
                }
            } catch (error) {
                console.error('Erro ao carregar atividade:', error);
            }
        };

        loadActivity();
    }, []);

    const updateProduct = async () => {
        try {
            const productRef = doc(db, 'products', id); // Substitua 'DOCUMENT_ID' pelo ID do documento que deseja atualizar
            const updatedFields = {
                marca: marca,
                modelo: modelo,
                cor: cor,
                ano: ano,
                data_registro: serverTimestamp()
            };

            await updateDoc(productRef, updatedFields);

            navigation.navigate('Tabs');
        } catch (error) {
            console.error('Erro ao atualizar atividade:', error);
        }
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
                <Text style={styles.textBtn}>Atualizar Dados</Text>
            </TouchableOpacity>

        </View>
    );
}