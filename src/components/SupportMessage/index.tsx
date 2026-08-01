import { View, Text } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useColorTheme } from "@/hooks/useColorTheme";

export default function SupportMessage(){

    const {primary} = useColorTheme();

    return (
        <View style={styles.containerSupportMessage}>
            <AntDesign
                name="star"
                size={26}
                color={primary}
            /> 
            <Text style={styles.message}>
                Compartilhe sua experiência, atribua notas e ajude outros jogadores
            </Text>
        </View>
    )
};