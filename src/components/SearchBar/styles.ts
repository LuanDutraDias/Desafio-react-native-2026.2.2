import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        paddingHorizontal: 10,
        gap: 10,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        fontSize: 15,
    },
    resultsContainer: {
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 8,
        overflow: "hidden",
    },
    result: {
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    resultText: {
        color: colors.textSecondary,
        fontSize: 15,
    },
});