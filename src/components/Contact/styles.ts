import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerIconContact: {
        backgroundColor: colors.iconBackground,
        borderRadius: 12,
        height: "80%",
        aspectRatio: 1/1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerContact: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        height: 50,
    },
    contact: {
        color: colors.secondary,
        flex: 1,
        paddingLeft: 10
    },
    title: {
        color: colors.secondary,
    },
    link: {
        color: colors.textSecondary
    },
});