import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const styles = StyleSheet.create({
    sectionLogin: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    loginBanner: {
        height: 330,
        width: "100%",
        resizeMode: "cover",
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        gap: 30,
    },
    containerWelcome: {
        gap: 5,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: colors.secondary,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        color: colors.textSecondary,
    },
    containerForms: {
        gap: 15,
    },
    containerIconInput: {
        backgroundColor: colors.iconBackground,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        height: "100%",
        width: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        height: 50,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        paddingLeft: 10
    },
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
    },
    footerText: {
        textAlign: "center",
        color: colors.secondary,
    },
    footerLink: {
        color: colors.primary,
    }
});