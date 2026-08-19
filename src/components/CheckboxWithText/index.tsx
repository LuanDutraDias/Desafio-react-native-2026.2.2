import { Pressable, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/constants/colors";
import { useColorTheme } from "@/hooks/useColorTheme";

type CheckboxProps = {
    label: string,
    checked: boolean,
    termsLink: string;
    error: boolean;
    onOpen: () => void,
    onCheck: () => void,
};

export default function CheckboxWithText({label, onOpen, onCheck, termsLink, error, checked}: CheckboxProps){

    const {primary} = useColorTheme();

    return (
        <View style={styles.checkboxWithTextContainer}>
            <Pressable onPress={onCheck} style={[styles.checkboxContainer, checked && styles.checked, error && {borderColor: colors.primary1}]}>
                {checked && (
                    <AntDesign
                        name="check"
                        size={14}
                        color="black"
                    />
                )}
            </Pressable>
            <Pressable>
                <Text style={styles.checkboxText} onPress={onOpen}>
                    {label}
                    <Text  style={styles.termsLinkText}>
                        {termsLink}
                    </Text>
                </Text>
            </Pressable>
            {error && (
                <AntDesign
                    name="exclamation-circle"
                    color={colors.primary1}
                    size={16}
                />
            )}
        </View>
    )
}