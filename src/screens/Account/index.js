import { Text, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import styles from './style';

export default function Account({ navigation }) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={styles.container}> 
            <TouchableOpacity
                style={styles.btnCreate}
                onPress={signOutFirebase}
            >
                <Text style={styles.btnTextCreate}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}