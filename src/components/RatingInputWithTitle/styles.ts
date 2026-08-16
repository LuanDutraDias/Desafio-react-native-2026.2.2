import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerTitleInputAndIcon: {
        gap: 10,
    },
    title: {
        color: colors.secondary,
        fontWeight: FONT_WEIGHT.medium,
        fontSize: FONT_SIZES.lg,
    },
    containerInputAndIcon: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    input: {
        width: 60,
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderRadius: BORDER_RADIUS.lg,
        color: colors.secondary,
        textAlign: "center",
        alignItems: "center",
        fontSize: FONT_SIZES.md,
    }
});