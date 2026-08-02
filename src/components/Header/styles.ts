import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    justifyContent: "center",
  },

  title: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: colors.secondary,
  },
  logout: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});