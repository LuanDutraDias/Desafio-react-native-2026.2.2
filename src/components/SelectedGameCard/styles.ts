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
    containerCardContent: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.secondary
    },
    containerGenreOrYear: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colors.iconBackground,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    genre: {
        color: colors.textSecondary,
        fontSize: 14,
    },
    year: {
        color: colors.textSecondary,
        fontSize: 14,
    }
});