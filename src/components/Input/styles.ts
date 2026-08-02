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
        height: 55,
    },
    input: {
        color: colors.secondary,
        flex: 1,
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 5
    },
    inputButton: {
        height: "100%",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 5,
    }
});