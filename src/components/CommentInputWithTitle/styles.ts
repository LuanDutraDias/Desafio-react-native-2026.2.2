import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerTitleAndInput: {
        gap: 10,
    },
    title: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderRadius: 8,
        color: colors.secondary,
        minHeight: 150,
        padding: 10,
        fontSize: 15,
    },
    caracterCounter: {
        color: colors.textSecondary
    },
});