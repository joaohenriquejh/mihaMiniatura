import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProduct')}
            >
                <Text style={styles.btnTextCreate}>Adicione Sua Coleção</Text>
            </TouchableOpacity>
        </View>
    );
}