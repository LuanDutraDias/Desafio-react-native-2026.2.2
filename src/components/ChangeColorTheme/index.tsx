import { View, Text, Pressable, PressableProps } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { useColorTheme } from "@/hooks/useColorTheme";

export default function ChangeColorTheme(){

    const {primary, setPrimary} = useColorTheme();

    return (
        <View style={styles.containerChangeColorTheme}>
            <View style={styles.containerIconText}>
                <MaterialIcons 
                    name="color-lens" 
                    size={30} 
                    color={primary} 
                />
                <Text style={styles.text}>
                    Alterar Tema
                </Text>
            </View>
            <View style={styles.containerThemeOptions}>
                <Pressable onPress={() => setPrimary(colors.primary1)}>
                    <View>
                        <FontAwesome name={
                            primary === colors.primary1 ? "circle" : "circle-thin"
                        } size={24} color={colors.primary1} />
                    </View>
                </Pressable>
                <Pressable onPress={() => setPrimary(colors.primary2)}>
                    <View>
                        <FontAwesome name={
                            primary === colors.primary2 ? "circle" : "circle-thin"
                        } size={24} color={colors.primary2} />
                    </View>
                </Pressable>
                <Pressable onPress={() => setPrimary(colors.primary3)}>
                    <View>
                        <FontAwesome name={
                            primary === colors.primary3 ? "circle" : "circle-thin"
                        } size={24} color={colors.primary3} />
                    </View>
                </Pressable>
            </View>
        </View>
    )
};