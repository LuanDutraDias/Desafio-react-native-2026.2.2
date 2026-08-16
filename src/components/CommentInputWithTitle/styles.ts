import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerTitleAndInput: {
        gap: 10,
    },
    title: {
        color: colors.secondary,
        fontWeight: FONT_WEIGHT.medium,
        fontSize: FONT_SIZES.lg,
    },
    input: {
        borderWidth: 1,
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderRadius: BORDER_RADIUS.lg,
        color: colors.secondary,
        minHeight: 150,
        padding: 10,
        fontSize: FONT_SIZES.md,
    },
    caracterCounter: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm,
    },
});