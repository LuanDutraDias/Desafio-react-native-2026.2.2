import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerIconContact: {
        backgroundColor: colors.iconBackground,
        borderRadius: BORDER_RADIUS.lg,
        height: "80%",
        aspectRatio: 1/1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerContact: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        height: 50,
    },
    contact: {
        color: colors.secondary,
        flex: 1,
        paddingLeft: 10
    },
    title: {
        color: colors.secondary,
        fontSize: FONT_SIZES.sm2,
    },
    link: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm2,
    },
});