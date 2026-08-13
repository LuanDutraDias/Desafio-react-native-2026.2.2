import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    sectionCreateReview: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    scrollCreateReview: {
        flexGrow: 1,
        backgroundColor: colors.backgroundScreen,
    },
    containerContent: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flex: 1,
        gap: 20,
    }
})