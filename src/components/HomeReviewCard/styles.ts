import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.inputBackground,
        padding: 10,
        width: "90%",
        height: 140,
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
        height: "80%",
        width: "100%",
        borderRadius: 16,
    },
    containerIcons: {
        flexDirection: "row",
        gap: 5,
    },
});