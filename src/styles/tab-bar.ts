import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: colors.tabBarBackground,
        paddingHorizontal: 10,
        paddingVertical: 10,
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