import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from "./styles"
import { colors } from "@/constants/colors";

import { useAuth } from "@/hooks/useAuth";

type HeaderProps = {
    title: string
}

export default function Header({title}: HeaderProps){

    const {signOut} = useAuth();

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity style={styles.logout} onPress={signOut}>
                <Ionicons name="exit-outline" size={26} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}