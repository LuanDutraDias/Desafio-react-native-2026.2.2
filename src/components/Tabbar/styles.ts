import { StyleSheet } from "react-native";

import {colors} from "@/constants/colors";

export const styles = StyleSheet.create({
    tabBarContainer: { 
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 10,
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        height: 120,
        backgroundColor: colors.tabBarBackground,
        width: "100%",
    },
    createReviewIcon: {
        backgroundColor: colors.primary, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        padding: 2,
        aspectRatio: 1/1,
        height: 55
    },
})