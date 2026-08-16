import { Platform, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerHomeCardContent: {
        flex: 1,
        gap: Platform.OS == 'ios' ? 5 : 2, 
        paddingHorizontal: 10,
    },
    author: {
        fontSize: FONT_SIZES.xxs,
        color: colors.textSecondary,
    },
    containerTitleAndPlatform: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    title: {
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHT.bold,
        color: colors.secondary
    },
    containerRatingGenreYear: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    rating: {
        color: colors.rating,
        fontSize: FONT_SIZES.sm2
    },
    containerGenre: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: colors.iconBackground,
        borderRadius: BORDER_RADIUS.xs
    },
    genre: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.xs,
    },
    containerYear: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 6,
        backgroundColor: colors.textSecondary,
        borderRadius: BORDER_RADIUS.xs
    },
    year: {
        color: colors.iconBackground,
        fontSize: FONT_SIZES.xs,
    },
    reviewComment: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm,
    }
});