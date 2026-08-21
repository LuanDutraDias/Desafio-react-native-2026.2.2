import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "../Button/styles";
import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";
import React from "react";

type buttonProps = TouchableOpacityProps & {
    title: string;
    icon?: React.ReactNode;
    variant?: string;
    disabled?: boolean;
};

export default function Button({title, icon, variant = "primary", disabled, ...props}: buttonProps){

    const {primary} = useColorTheme();

    let backgroundColor;
    let textColor;

    if (variant === "primary"){
        backgroundColor = primary
        textColor = colors.secondary
    }
    else if (variant === "primary1"){
        backgroundColor = colors.primary1
        textColor = colors.secondary
    }
    else {
        backgroundColor = colors.buttonSecondaryBackground
        textColor = colors.buttonSecondaryText
    }


    return (
        <TouchableOpacity activeOpacity={disabled? 0.5 : 0.7} style={[styles.button, {backgroundColor: backgroundColor}, disabled && {opacity: 0.5}]} disabled={disabled} {...props}>
            {icon}
            <Text style={[styles.buttonText, {color: textColor}, disabled && {opacity: 0.8 }]}>
                {title}
            </Text>            
        </TouchableOpacity>
    )
}