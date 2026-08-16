import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    title: {
        fontSize: FONT_SIZES.xl2,
        textAlign: "center",
        color: colors.secondary,
        fontWeight: FONT_WEIGHT.bold,
    },
});