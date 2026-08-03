import { Image, Pressable} from "react-native";

import { router } from "expo-router";

import {styles} from "./styles";

export default function Logo(){
    return (
        <Pressable onPress={() => router.navigate("/(tabs)/home")}>
            <Image
                style={styles.logo}
                source={require("@/assets/images/logos/game-reviews.png")}
            />
        </Pressable>
    )
}