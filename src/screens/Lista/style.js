import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    produto:{
        backgroundColor: "#FFF",
        padding: 20,
        marginBottom: 20,
        borderRadius:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },

    descricao: {
        fontSize: 20,
        color:"#121212",
        fontWeight: "bold",
    },

   
});

export default styles