import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "../Button/styles";

import { useColorTheme } from "@/hooks/useColorTheme";
import React from "react";

type buttonProps = TouchableOpacityProps & {
    title: string;
    icon?: React.ReactNode
};

export default function Button({title, icon, ...props}: buttonProps){

    const {primary} = useColorTheme();

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: primary} ]} {...props}>
            {icon}
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}