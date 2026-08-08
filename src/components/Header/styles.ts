import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.secondary,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
});