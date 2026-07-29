import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        height: 50,
        justifyContent: "center",
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 20,
        textAlign: "center",
    }
});