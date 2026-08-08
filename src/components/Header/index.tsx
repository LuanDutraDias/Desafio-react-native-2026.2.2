import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from "./styles"
import { colors } from "@/constants/colors";

import Logo from "../Logo";

import { useAuth } from "@/hooks/useAuth";

type HeaderProps = {
    title: string
}

export default function Header({title}: HeaderProps){

    const {signOut} = useAuth();

    return (
        <View style={styles.headerContainer}>
            <Logo/>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity onPress={signOut} style={styles.signOutContainer}>
                <Ionicons name="exit-outline" size={32} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}