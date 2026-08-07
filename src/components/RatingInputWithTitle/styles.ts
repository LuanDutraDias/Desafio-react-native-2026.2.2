import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerTitleInputAndIcon: {
        gap: 10,
    },
    title: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    },
    containerInputAndIcon: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    input: {
        width: 60,
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderRadius: 8,
        color: colors.secondary,
        textAlign: "center",
        fontSize: 15,
    }
});