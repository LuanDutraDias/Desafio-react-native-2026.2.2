import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerIconInput: {
        backgroundColor: colors.iconBackground,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        height: "100%",
        width: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    containerInput: {
        backgroundColor: colors.inputBackground,
        borderColor:  colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        height: 50,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        paddingLeft: 10
    },
});