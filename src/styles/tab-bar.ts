import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: colors.tabBarBackground,
        padding: 10,
        height: 105,
        borderTopColor: "transparent"
    },
    itemContainer: {
        padding: 2,
    },
    tabBarLabel: {
        fontSize: 14,
        marginTop: 4
    }
});