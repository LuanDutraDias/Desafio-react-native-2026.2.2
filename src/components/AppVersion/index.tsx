import { View, Text } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useColorTheme } from "@/hooks/useColorTheme";

export default function AppVersion(){

    const {primary, setPrimary} = useColorTheme();

    return (
        <View style={styles.containerAppVersion}>
            <View style={styles.containerIconText}>
                <AntDesign
                    name="info-circle"
                    size={24}
                    color={primary}
                />
                <Text style={styles.text}>
                    Versão do App
                </Text>
            </View>
            <Text style={[styles.versionData, {color: primary}]}>
                1.0.0
            </Text>
        </View>
    )
};