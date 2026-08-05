import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        width: 300,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 16,
        ...StyleSheet.absoluteFillObject,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 16,
    },
});