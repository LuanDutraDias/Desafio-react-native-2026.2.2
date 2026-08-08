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
        backgroundColor: colors.backgroundScreen,
        borderRadius: 16,
        padding: 20,
        justifyContent: "space-between",
    },
});