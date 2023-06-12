import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    produto:{
        backgroundColor: "#121212",
        padding: 20,
        marginBottom: 20,
        borderRadius:10,
        borderWidth: 1,
        borderColor: "#00E5FF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },

    descricao: {
        fontSize: 20,
        color:"#FFF",
        fontWeight: "bold",
    },

    containerIcons:{
        flexDirection:"column",
    },

    icons:{
        marginBottom: 50,
    }

   
});

export default styles