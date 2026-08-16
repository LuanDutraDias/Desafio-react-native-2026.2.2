import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { FONT_SIZES } from "@/constants/dimensions";

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
        fontSize: FONT_SIZES.md,
        marginTop: 4
    }
});