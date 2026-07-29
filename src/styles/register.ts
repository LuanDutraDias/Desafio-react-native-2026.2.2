import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    sectionRegister: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    registerBanner: {
        height: 250,
        width: "100%",
        resizeMode: "cover",
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 25,
        gap: 20,
    },
    containerWelcome: {
        gap: 5,
    },
    containerForms: {
        paddingTop: 10,
        gap: 15,
    },
});