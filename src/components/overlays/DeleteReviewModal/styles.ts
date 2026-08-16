import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

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
        minHeight: "65%",
        backgroundColor: colors.backgroundScreen,
        borderRadius: BORDER_RADIUS.xl,
        padding: 20,
        justifyContent: "space-between",
        gap: 30,
    },
    alertContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        gap: 15,
        borderRadius: BORDER_RADIUS.lg,
        borderWidth: 1,
    },
    alertMessage: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.md,
        maxWidth: "75%",
    },
    buttonsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    }
});