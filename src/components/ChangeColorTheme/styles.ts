import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerChangeColorTheme: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        height: 50,
        justifyContent: "space-between",
    },
    containerIconText: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    text: {
        color: colors.textSecondary,
    },
    containerThemeOptions: {
        flexDirection: "row",
        gap: 10,
    },
});