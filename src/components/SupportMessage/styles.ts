import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerSupportMessage: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        height: 50,
        paddingHorizontal: 12
    },
    message: {
        color: colors.textSecondary,
    },
});