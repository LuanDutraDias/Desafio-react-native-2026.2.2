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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    resultText: {
        color: colors.secondary,
        fontSize: 15,
    },
    alreadyReviewedResult: {
        color: colors.textSecondary
    },
    alreadyReviewedContainer: {
        backgroundColor: colors.primary3,
        flexDirection: "row",
        borderRadius: 6,
        gap: 3,
        paddingVertical: 3,
        paddingHorizontal: 5,
        alignItems: "center",
    },
    alreadyReviewedText: {
        color: colors.secondary,
        fontSize: 12
    }
});