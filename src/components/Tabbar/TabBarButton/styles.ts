import { StyleSheet } from "react-native";

import {colors} from "@/constants/colors";

export const styles = StyleSheet.create({
    tabBarButtonContainer: {
        alignItems: "center",
        height: 65,
        gap: 10,
    },
    text: { 
        color: colors.secondary,
    },
    textFocused: {
        color: colors.primary
    }
})