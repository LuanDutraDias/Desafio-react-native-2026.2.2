import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    button: {
        borderRadius: BORDER_RADIUS.lg,
        height: 50,
        justifyContent: "center",
        gap: 10,
        minWidth: "47%",
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        fontSize: FONT_SIZES.lg2,
        textAlign: "center",
    }
});