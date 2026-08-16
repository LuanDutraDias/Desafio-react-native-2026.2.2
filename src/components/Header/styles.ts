import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { FONT_SIZES, FONT_WEIGHT } from "@/constants/dimensions";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: FONT_SIZES.xl2,
    fontWeight: FONT_WEIGHT.bold,
    color: colors.secondary,
  },
  signOutContainer: {
    width: 50,
    alignItems: "flex-end",
  }
});