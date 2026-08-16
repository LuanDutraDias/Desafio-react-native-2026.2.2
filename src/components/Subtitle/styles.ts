import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    subtitle: {
        textAlign: "center",
        fontSize: FONT_SIZES.lg,
        color: colors.textSecondary,
    },
});