import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

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
        borderRadius: BORDER_RADIUS.xl,
        padding: 20,
        justifyContent: "space-between",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: FONT_SIZES.xl2,
        fontWeight: FONT_WEIGHT.bold,
        color: colors.secondary,
        marginBottom: 20,
    },
    text: {
        color: colors.textSecondary,
        lineHeight: 24,
    },
});