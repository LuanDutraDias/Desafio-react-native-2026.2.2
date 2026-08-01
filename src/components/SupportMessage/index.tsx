import { View, Text } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function SupportMessage(){
    return (
        <View style={styles.containerSupportMessage}>
            <AntDesign
                name="star"
                size={26}
                color={colors.primary}
            /> 
            <Text style={styles.message}>
                Compartilhe sua experiência, atribua notas e ajude outros jogadores
            </Text>
        </View>
    )
};