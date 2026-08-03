import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    sectionLogin: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    scrollLogin: {
        flexGrow: 1,
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
        paddingTop: 10,
        gap: 25,
    },
    containerWelcome: {
        gap: 5,
    },
    containerForms: {
        gap: 15,
    },
});