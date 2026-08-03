import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.buttonSecondaryBackground,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    buttonText: {
        color: colors.buttonSecondaryText
    }              
});