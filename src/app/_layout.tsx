import { AuthProvider } from "@/contexts/authContext";
import { ColorThemeProvider } from "@/contexts/colorThemeContext";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppDataProvider } from "@/contexts/appDataContext";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AuthProvider>
        <AppDataProvider>
          <ColorThemeProvider>
            <Stack 
              screenOptions={{
                headerShown: false,
                animation: "fade"
              }}
            />
          </ColorThemeProvider>
        </AppDataProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
