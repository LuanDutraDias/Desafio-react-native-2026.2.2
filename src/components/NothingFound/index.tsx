import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";

import { styles } from "./styles";
import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type buttonProps = {
    text: string;
    style?: StyleProp<ViewStyle>;
};

export default function NothingFound({text, style}: buttonProps){

    const {primary} = useColorTheme();

    return (
        <View style={[{backgroundColor: `${primary}1F`, borderColor: `${primary}80`}, styles.warnContainer, style]}>
            <Text style={[styles.warnText, {color: primary}]}>
                {text}
            </Text>            
            <AntDesign
                name="file-excel"
                size={24}
                color={primary}
            />
        </View>
    )
}