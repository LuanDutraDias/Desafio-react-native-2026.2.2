import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginBottom: 5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: BORDER_RADIUS.round,
        backgroundColor: colors.textSecondary,
    },
});