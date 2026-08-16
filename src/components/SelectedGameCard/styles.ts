import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        paddingRight: 20,
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
    containerCardContent: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 10,
    },
    title: {
        fontSize: FONT_SIZES.md2,
        fontWeight: FONT_WEIGHT.bold,
        color: colors.secondary
    },
    containerGenre: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colors.iconBackground,
        borderRadius: BORDER_RADIUS.xs,
        alignSelf: "flex-start",
    },
    containerYear: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colors.textSecondary,
        borderRadius: BORDER_RADIUS.xs,
        alignSelf: "flex-start",
    },
    genre: {
        color: colors.textSecondary,
        fontSize: FONT_SIZES.sm,
    },
    year: {
        color: colors.iconBackground,
        fontSize: FONT_SIZES.xs2,
    },
    removeButton: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: colors.primary1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: BORDER_RADIUS.round,
        padding: 3,
    }
});