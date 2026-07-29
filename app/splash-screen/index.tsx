import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
      const timer = setTimeout(() => {
        router.replace("/login");
      }, 2000);

      return () => clearTimeout(timer);
    }, []
  );
  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/images/splashes/splash-screen.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});