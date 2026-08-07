import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        height: 50,
        justifyContent: "center",
        gap: 10,
        minWidth: "47%",
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
    }
});