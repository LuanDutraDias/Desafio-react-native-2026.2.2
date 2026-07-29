import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

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
    containerForms: {
        gap: 15,
    },
});