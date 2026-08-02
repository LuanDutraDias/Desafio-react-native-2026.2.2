import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    sectionSupport: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    supportBanner: {
        height: 230,
        width: "100%",
        resizeMode: "cover",
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 10,
        gap: 20,
    },
    containerWelcome: {
        gap: 5,
    },
    containerInformations: {
        gap: 10,
    }
});