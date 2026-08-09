import { View, Text, TouchableOpacity, Linking } from "react-native";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import {Entypo} from '@expo/vector-icons';

type ContactProps = {
    icon1: React.ReactNode
    title: string
    textLink: string
    link: string
};

export default function Contact({icon1, title, textLink, link}: ContactProps){
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.containerContact} onPress={() => Linking.openURL(link)}>
            <View style={styles.containerIconContact}>
                {icon1} 
            </View>
            <View
                style={styles.contact}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.link}>
                    {textLink}
                </Text>
            </View>    
            <View>
                <Entypo 
                    name="chevron-thin-right" 
                    size={24} 
                    color={colors.secondary} 
                />
            </View>
        </TouchableOpacity>
    )
};