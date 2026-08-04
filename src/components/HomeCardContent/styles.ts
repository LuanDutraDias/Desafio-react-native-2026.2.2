import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerHomeCardContent: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        padding: 10,
        gap: 2,
    },
    author: {
        fontSize: 9,
        color: colors.textSecondary
    },
    title: {
        fontSize: 13,
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
        fontSize: 12
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
        fontSize: 10,
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
        fontSize: 10,
    },
    reviewComment: {
        color: colors.textSecondary,
        fontSize: 10,
    }
});