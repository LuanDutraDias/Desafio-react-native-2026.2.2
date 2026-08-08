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
        height: "75%",
        backgroundColor: colors.inputBackground,
        borderRadius: 16,
        padding: 20,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.secondary,
        marginBottom: 20,
    },
    text: {
        color: colors.textSecondary,
        lineHeight: 24,
    },
});