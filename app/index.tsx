import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { ActivityIndicator, View } from "react-native";
import { colors } from "@/constants/colors";

export default function Index() {
  const {
    isLoggedIn,
    isReadyAfterSearchingToken,
  } = useAuth();

  if (!isReadyAfterSearchingToken) {
    return (
      <View style={{backgroundColor: colors.backgroundScreen, alignItems: "center", justifyContent: "center", flex: 1}}>
        <ActivityIndicator
          size={50}
          color={colors.primary1}
        />
      </View>
    )
  }

  return (
    <Redirect
      href={isLoggedIn ? "/home" : "/login"}
    />
  );
}
