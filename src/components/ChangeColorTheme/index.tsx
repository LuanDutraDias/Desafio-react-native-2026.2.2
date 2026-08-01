import { View, Text, Pressable } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default function ChangeColorTheme(){
    return (
        <View style={styles.containerChangeColorTheme}>
            <View style={styles.containerIconText}>
                <MaterialIcons 
                    name="color-lens" 
                    size={30} 
                    color={colors.primary
                    } 
                />
                <Text style={styles.text}>
                    Alterar Tema
                </Text>
            </View>
            <View style={styles.containerThemeOptions}>
                <Pressable>
                    <View>
                        <Entypo name="circle" size={24} color="black" />
                    </View>
                </Pressable>
                <Pressable>
                    <View>
                        <Entypo name="circle" size={24} color="black" />
                    </View>
                </Pressable>
                <Pressable>
                    <View>
                        <Entypo name="circle" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
        </View>
    )
};