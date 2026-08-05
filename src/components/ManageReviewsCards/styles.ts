import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        flexDirection: "row",
    },
    image: {
        height: 90,
        width: "28%",
        borderRadius: 16,
    },
    containerManageCardContent: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.secondary
    },
    containerRatingGenre: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    rating: {
        color: colors.rating,
        fontSize: 16
    },
    containerGenre: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colors.iconBackground,
        borderRadius: 4,
    },
    genre: {
        color: colors.textSecondary,
        fontSize: 14,
    },
    updated: {
        color: colors.textSecondary,
        fontSize: 12,
    }
});