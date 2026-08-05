import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerHomeCardContent: {
        flex: 1,
        gap: 2,
        paddingHorizontal: 10,
    },
    author: {
        fontSize: 10,
        color: colors.textSecondary
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.secondary
    },
    containerRatingGenreYear: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    rating: {
        color: colors.rating,
        fontSize: 13
    },
    containerGenre: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: colors.iconBackground,
        borderRadius: 4,
    },
    genre: {
        color: colors.textSecondary,
        fontSize: 11,
    },
    containerYear: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: colors.textSecondary,
        borderRadius: 4,
    },
    year: {
        color: colors.iconBackground,
        fontSize: 11,
    },
    reviewComment: {
        color: colors.textSecondary,
        fontSize: 11,
    }
});