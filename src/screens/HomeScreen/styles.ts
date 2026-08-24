import { Dimensions, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { BORDER_RADIUS, FONT_SIZES, CARD_WIDTH  } from "@/constants/dimensions";

const { width } = Dimensions.get("window");

const SIDE_PADDING = (width - CARD_WIDTH) / 2;

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    containerWeekHighlights: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: SIDE_PADDING,
        gap: 10,
        borderRadius: BORDER_RADIUS.sm,
    },
    containerRatingIcon: {
        position: "relative", 
        alignItems: "center",
        justifyContent: "center"             
    },
    ratingInsideIcon: {
        position: "absolute", 
        backgroundColor: colors.rating, 
        borderRadius: BORDER_RADIUS.round, 
        width: 10, 
        height: 14,
    },
    weekHighlightsText: {
        color: colors.secondary,
        fontSize: FONT_SIZES.sm,
    }
})