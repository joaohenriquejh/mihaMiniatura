import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    btnCreate: {
        backgroundColor: '#00E5FF',
        width: "80%",
        height: 100,
        borderRadius: 10,
        position: 'absolute',
        bottom: 300,
        right: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },

    produto:{
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 20,
        borderRadius:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },

    descricao: {
        fontSize: 20,
        fontWeight: "bold",
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#121212',
    },

    image:{
        flex:1,
        justifyContent: 'center',
    }
});

export default styles