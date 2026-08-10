import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function Index() {
  const {
    isLoggedIn,
    isReadyAfterSearchingToken,
  } = useAuth();

  if (!isReadyAfterSearchingToken) {
    return null;
  }

  return (
    <Redirect
      href={isLoggedIn ? "/home" : "/login"}
    />
  );
}
