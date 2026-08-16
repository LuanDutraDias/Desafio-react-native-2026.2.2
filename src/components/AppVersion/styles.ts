import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";
import { version } from "react";

export const styles = StyleSheet.create({
    containerAppVersion: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 13,
        height: 50,
        justifyContent: "space-between",
    },
    containerIconText: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
    },
    text: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm2,
    },
    versionData: {
        fontSize: FONT_SIZES.sm2,
    }
});