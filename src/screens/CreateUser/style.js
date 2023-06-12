import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            padding: 30,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#121212"
        },

        alert: {
            fontSize: 18,
            textAlign: "center",
            color: "#00E5FF",
            marginBottom: 20
        },

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#DDD",
            borderWidth: 1,
            borderColor: "#00E5FF",
            padding: 20,
            marginBottom: 30,
            width: "100%"
        },

        formButton: {
            backgroundColor: "#00E5FF",
            padding: 10,
            borderRadius: 10,
            marginTop: 40,
            width: "100%"
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center"
        },
    }
);

export default styles