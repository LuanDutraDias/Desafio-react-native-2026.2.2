import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from "./styles"
import { colors } from "@/constants/colors";

type HeaderProps = {
    title: string
}

export default function Header({title}: HeaderProps){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity style={styles.logout}>
                <Ionicons name="exit-outline" size={26} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}