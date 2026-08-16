import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: BORDER_RADIUS.xl,
        flexDirection: "row",
    },
    image: {
        height: 90,
        width: "28%",
        borderRadius: BORDER_RADIUS.xl,
    },
    containerManageCardContent: {
        flex: 1,
        gap: 10,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    title: {
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHT.bold,
        color: colors.secondary
    },
    containerRatingGenre: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    rating: {
        color: colors.rating,
        fontSize: FONT_SIZES.md
    },
    containerGenre: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colors.iconBackground,
        borderRadius: BORDER_RADIUS.xs
    },
    genre: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm,
    },
    updated: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm,
    }
});