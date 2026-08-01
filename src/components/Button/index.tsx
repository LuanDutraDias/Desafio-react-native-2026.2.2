import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "../Button/styles";

import { useColorTheme } from "@/hooks/useColorTheme";

type buttonProps = TouchableOpacityProps & {
    title: string;
};

export default function Button({title, ...props}: buttonProps){

    const {primary} = useColorTheme();

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: primary} ]} {...props}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}