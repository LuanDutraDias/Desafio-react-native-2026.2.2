import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
    },
    modal: {
        width: "100%",
        maxHeight: "80%",
        backgroundColor: colors.backgroundScreen,
        borderRadius: 16,
        padding: 20,
        gap: 20,
    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    alertContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        borderRadius: 12,
        borderWidth: 1,
    },
    alertMessage: {
        color: colors.textSecondary
    },
    buttonsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    }
});