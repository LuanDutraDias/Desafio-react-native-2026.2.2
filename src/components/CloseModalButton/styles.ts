import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: colors.primary1,
        borderRadius: BORDER_RADIUS.round,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        elevation: 10, 
    },
});