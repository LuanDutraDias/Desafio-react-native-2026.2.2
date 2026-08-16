import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerIconInput: {
        backgroundColor: colors.iconBackground,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        height: "100%",
        width: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: "row",
        alignItems: "center",
        height: 53,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        fontSize: FONT_SIZES.md,
        paddingLeft: 10,
        paddingRight: 5
    },
    inputButton: {
        height: "100%",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 5,
    }
});