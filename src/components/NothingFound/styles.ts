
import { StyleSheet } from "react-native";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    warnContainer: {
        borderRadius: BORDER_RADIUS.lg,
        height: 50,
        justifyContent: "center",
        gap: 10,
        minWidth: "47%",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
    },
    warnText: {
        fontSize: FONT_SIZES.lg2,
        textAlign: "center",
    }
});