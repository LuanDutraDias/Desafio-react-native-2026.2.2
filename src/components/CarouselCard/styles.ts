import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { CARD_WIDTH } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        width: CARD_WIDTH,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        ...StyleSheet.absoluteFillObject,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 16,
    },
});