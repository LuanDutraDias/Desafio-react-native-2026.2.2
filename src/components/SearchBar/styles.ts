import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        paddingHorizontal: 10,
        gap: 10,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        fontSize: 15,
    },
});