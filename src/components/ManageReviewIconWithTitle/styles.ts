import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerIconAndTitle: {
        alignItems: "center",
        gap: 10,
    },
    containerIcon: {
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.round,
        width: 85,
        height: 85,
        alignItems: "center",
        justifyContent: "center",
    },
});