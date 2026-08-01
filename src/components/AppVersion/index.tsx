import { View, Text } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function AppVersion(){
    return (
        <View style={styles.containerAppVersion}>
            <View style={styles.containerIconText}>
                <AntDesign
                    name="info-circle"
                    size={24}
                    color={colors.primary}
                />
                <Text style={styles.text}>
                    Versão do App
                </Text>
            </View>
            <Text style={styles.version}>
                1.0.0
            </Text>
        </View>
    )
};