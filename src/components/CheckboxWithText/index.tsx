import { Pressable, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

type CheckboxProps = {
    label: string,
    checked: boolean,
    onPress: () => void,
};

export default function CheckboxWithText({label, onPress, checked}: CheckboxProps){
    return (
        <Pressable style={styles.checkboxWithTextContainer} onPress={onPress}>
            <View style={[styles.checkboxContainer, checked && styles.checked]}>
                {checked && (
                    <AntDesign
                        name="check"
                        size={14}
                        color="black"
                    />
                )}
            </View>
            <Text style={styles.checkboxText}>
                {label}
            </Text>
        </Pressable>
    )
}