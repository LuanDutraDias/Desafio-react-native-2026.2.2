import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: BORDER_RADIUS.xl,
        flexDirection: "row",
    },
    containerImageAndIcons: {
        width: "30%",
        height: "100%",
        resizeMode: "cover",
    },
    image: {
        height: 110,
        width: "100%",
        borderRadius: BORDER_RADIUS.xl,
    },
    // containerIcons: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     gap: 10,
    // },
    containerButtonReadMore: {
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: BORDER_RADIUS.xs,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    textButtonReadMore: {
        fontSize: FONT_SIZES.xs
    },
    // platformName: {
    //     fontSize: FONT_SIZES.sm,
    // }
});