import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "transparent",
    },
    sectionEditReview: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    scrollEditReview: {
        flexGrow: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
    },
    modal: {
        width: "100%",
        height: "94%",
        backgroundColor: colors.backgroundScreen,
        borderRadius: 16,
        padding: 20,
        gap: 20,
    },
    buttonsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    }
});