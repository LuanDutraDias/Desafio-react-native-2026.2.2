import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "../Button/styles";
import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";
import React from "react";

type buttonProps = TouchableOpacityProps & {
    title: string;
    icon?: React.ReactNode;
    variant?: string;
};

export default function Button({title, icon, variant = "primary", ...props}: buttonProps){

    const {primary} = useColorTheme();

    let backgroundColor;
    let textColor;

    if (variant === "primary"){
        backgroundColor = primary
        textColor = colors.secondary
    }
    else {
        backgroundColor = colors.buttonSecondaryBackground
        textColor = colors.buttonSecondaryText
    }


    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor} ]} {...props}>
            {icon}
            <Text style={[styles.buttonText, {color: textColor}]}>
                {title}
            </Text>            
        </TouchableOpacity>
    )
}