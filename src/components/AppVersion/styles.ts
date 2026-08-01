import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerAppVersion: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
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
    },
    version: {
        color: colors.primary,
    }
});