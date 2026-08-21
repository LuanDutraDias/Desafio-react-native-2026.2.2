import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { BORDER_RADIUS, FONT_SIZES } from "@/constants/dimensions";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        paddingTop: 5,
    },
    sectionRegister: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
    scrollRegister: {
        flexGrow: 1,
        backgroundColor: colors.backgroundScreen,
        paddingBottom: 15,
    },
    registerBanner: {
        height: 220,
        width: "100%",
        resizeMode: "cover",
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 10,
        gap: 10,
    },
    containerWelcome: {
        gap: 5,
    },
    containerForms: {
        paddingTop: 10,
        gap: 16,
    },
    containerInputAndError: {
        gap: 2,
    },
    generalErrorContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.sm,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginTop: -5,
        marginBottom: 5,
        gap: 5,
    },
    errorText: {
        color: colors.primary1,
        fontSize: FONT_SIZES.xs2,
    },
    containerPasswordRequirements: {
        gap: 2,
    },
    containerTextPasswordRequirements: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    textPasswordRequirements: {
        color: colors.secondary
    }
});