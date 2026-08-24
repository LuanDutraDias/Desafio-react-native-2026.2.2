import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
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
    resultsContainer: {
        backgroundColor: colors.inputBackground,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.lg,
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
    resultTextContainer: {
        width: "77%"
    },
    resultText: {
        color: colors.secondary,
        fontSize: FONT_SIZES.md2,
    },
    alreadyReviewedResult: {
        color: colors.textSecondary
    },
    alreadyReviewedContainer: {
        backgroundColor: colors.primary3,
        flexDirection: "row",
        borderRadius: BORDER_RADIUS.sm,
        gap: 3,
        paddingVertical: 3,
        paddingHorizontal: 5,
        alignItems: "center",
    },
    alreadyReviewedText: {
        color: colors.secondary,
        fontSize: FONT_SIZES.sm
    }
});