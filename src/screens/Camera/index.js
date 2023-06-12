import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import firebase from '../../config/firebase';
import storage from '../../config/firebase'

export default function App({ navigation }) {
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    function uploadImageFirebase() {
        const nameImage = "imagem1";

        const upload = storage.ref().child("images").child(nameImage).put(capturedPhoto)

        upload.on("state_changed", function () {
            console.log("Sucesso ao Salvar Imagem");
        }, function (error) {
            console.log("Erro ao salvar imagem");
        })
    }


    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text> Acesso negado! </Text>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true);
        }
    }

    async function savePicture() {
        if (capturedPhoto) {
            const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
            
                .then(() => {
                    
                    alert('Foto salva com sucesso na galeria do seu celular');
                    navigation.navigate('Tabs');
                })
                .catch(error => {
                    console.log('err', error);
                });
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Camera
                    style={{ flex: 1 }}
                    type={type}
                    ref={camRef}
                >
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20, }} onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>
                            <Text style={{ fontSize: 20, marginBottom: 13, color: '#fff' }}>Trocar</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>

                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <FontAwesome name="camera" size={23} color="#fff" />
                </TouchableOpacity>

                {capturedPhoto &&
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={open}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                            <View style={{ margin: 10, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                                    <FontAwesome name="window-close" size={50} color="#FF0000" />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: 10 }} onPress={savePicture}>
                                    <FontAwesome name="upload" size={50} color="#121212" />
                                </TouchableOpacity>

                            </View>

                            <Image
                                style={{ width: '100%', height: 450, borderRadius: 20 }}
                                source={{ uri: capturedPhoto }}
                            />
                        </View>
                    </Modal>
                }
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10,
        height: 50,
    }
});
