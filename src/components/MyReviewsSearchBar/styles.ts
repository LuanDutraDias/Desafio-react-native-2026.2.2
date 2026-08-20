import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 10,
        gap: 10,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        fontSize: FONT_SIZES.md2,
    },
});