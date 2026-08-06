import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    containerContent: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flex: 1,
    }
})