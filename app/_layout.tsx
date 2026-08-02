import { AuthProvider } from "@/contexts/authContext";
import { ColorThemeProvider } from "@/contexts/colorThemeContext";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ColorThemeProvider>
          <Stack 
            screenOptions={{
              headerShown: false,
              animation: "fade"
            }}
          />
        </ColorThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
