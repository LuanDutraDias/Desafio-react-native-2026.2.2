import { AuthProvider } from "@/contexts/authContext";
import { ColorThemeProvider } from "@/contexts/colorThemeContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
  )
}
