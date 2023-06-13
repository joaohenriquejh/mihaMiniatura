import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from '../Home/style';
import firebase from '../../config/firebase';
import { getFirestore } from 'firebase/firestore'
const db = getFirestore(firebase)


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        
        <Image style={styles.logo} source={require('../../../assets/logo-removebg.png')} />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProduct')}
            >
                <Text style={styles.btnTextCreate}>Adicione Sua Coleção</Text>
            </TouchableOpacity>
        </View>
    );
}