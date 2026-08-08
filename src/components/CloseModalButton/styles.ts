import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: colors.primary1,
        borderRadius: "50%",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
});