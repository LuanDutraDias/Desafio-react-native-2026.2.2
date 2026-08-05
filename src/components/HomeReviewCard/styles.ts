import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        flexDirection: "row",
    },
    containerImageAndIcons: {
        width: "30%",
        height: "100%",
        resizeMode: "cover",
        gap: 10,
    },
    image: {
        height: 100,
        width: "100%",
        borderRadius: 16,
    },
    containerIcons: {
        flexDirection: "row",
        gap: 5,
    },
    containerButtonReadMore: {
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    textButtonReadMore: {
        fontSize: 10
    },
});