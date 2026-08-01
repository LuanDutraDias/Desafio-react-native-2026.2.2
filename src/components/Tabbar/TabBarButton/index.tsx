import { TouchableOpacity, Text, View, ViewStyle } from "react-native";

import {styles} from "./styles";

type TabBarButtonProps = {
    label?: string
    icon: React.ReactNode
    style?: ViewStyle
    focused?: boolean
    onPress: () => void
}

export default function TabBarButton({icon, label, onPress, focused, style}: TabBarButtonProps){
    return (
        <TouchableOpacity style={styles.tabBarButtonContainer} onPress={onPress}>
            <View {...style}>
                {icon}
            </View>
            <Text style={[styles.text, focused && styles.textFocused]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}