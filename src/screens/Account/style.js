import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    btnCreate: {
        backgroundColor: '#121212',
        width: "80%",
        height: 100,
        borderRadius: 10,
        position: 'absolute',
        bottom: 300,
        right: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#00E5FF',
    },

});

export default styles