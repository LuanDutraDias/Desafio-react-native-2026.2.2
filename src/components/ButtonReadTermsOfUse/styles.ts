import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.buttonSecondaryBackground,
        borderRadius: BORDER_RADIUS.xs,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    buttonText: {
        color: colors.buttonSecondaryText,
        fontSize: FONT_SIZES.sm,
    }              
});