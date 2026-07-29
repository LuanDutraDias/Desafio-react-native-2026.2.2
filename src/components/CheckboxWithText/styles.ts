import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    checkboxWithTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkboxContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.secondary,
        width: 20,
        height: 20,
    },
    checked: {
        backgroundColor: colors.secondary,
    },
    checkboxText: {
        color: colors.secondary,
    },
});