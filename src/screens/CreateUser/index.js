import React, {useState} from 'react';
import {TextInput, Text, TouchableOpacity, View} from 'react-native'
import styles from './style';

export default function CreateUser(){
   const [nome, setNome] = useState("");
   const [telefone, setTelefone] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorCreateUser, setErrorCreateUser] = useState(null);

   const validate = () =>{

   }
   
    return(
        <View style={styles.login}>

            {/* <Image style={styles.logo} source={require('../../../assets/logo_achou_white.png')} /> */}

             {/* {errorLogin != null &&
                <Text style={styles.alert}>{errorLogin}</Text>
            }  */}

            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Telefone'
                value={telefone}
                onChangeText={setTelefone}
            />
            
            <TextInput
                style={styles.formInput}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.btnCreateText}>Criar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProfessional')}>
                <Text style={styles.btnCreateText}>Criar Profissional</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.btnCreateText}>Navegação</Text>
            </TouchableOpacity>
        </View>
    );
}