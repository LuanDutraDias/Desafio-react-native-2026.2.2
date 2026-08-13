import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

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
        height: 210,
        width: "100%",
        resizeMode: "cover",
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 5,
        gap: 15,
    },
    containerWelcome: {
        gap: 5,
    },
    containerInformations: {
        gap: 10,
    }
});