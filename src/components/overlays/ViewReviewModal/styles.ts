import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { BORDER_RADIUS } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
    },
    modal: {
        width: "100%",
        minHeight: "70%",
        gap: 20,
        backgroundColor: colors.backgroundScreen,
        borderRadius: BORDER_RADIUS.xl,
        padding: 20,
        justifyContent: "space-between",
    },
});