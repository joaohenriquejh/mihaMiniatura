import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import storage from '../../config/firebase'
const db = getFirestore(firebase)

export default function CreateProduct({ navigation }) {
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [cor, setCor] = useState("")
    const [ano, setAno] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)
    const [imgURL, setImgURL] = useState("");
    const [progressPorcent, setPorgessPorcent] = useState(0);

    const validade = () => {
        if (marca == "" || modelo == "" || cor == "" || ano == "") {
            setErrorCreateProduct("Informe todos os campos")
        } else {
            setErrorCreateProduct(null)
            createProduct()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return;

        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPorgessPorcent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgURL(downloadURL);
                });
            }
        );
    };

    const createProduct = () => {
        const newProduct = addDoc(collection(db, 'products'), {
            marca: marca,
            modelo: modelo,
            cor: cor,
            ano: ano,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return (
        <View style={styles.container}>
            {errorCreateProduct != null &&
                <Text style={styles.alert}>{errorCreateProduct}</Text>
            }


            <Image
                style={styles.image}
                source={{
                    uri: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
                }}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={handleSubmit}

            >
                <Text style={styles.textBtn}>Upload</Text>
            </TouchableOpacity>

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