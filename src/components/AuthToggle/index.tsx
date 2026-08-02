import {Text} from "react-native";

import {Link, LinkProps} from "expo-router";

import {styles} from "../AuthToggle/styles";

import { useColorTheme } from "@/hooks/useColorTheme";

type linkProps = LinkProps & {
    title: string,
    link: string,
};

export default function AuthToggle({title, link, ...props}: linkProps){
    
    const {primary} = useColorTheme();

    return (
        <Link style={styles.footerText} {...props}>
            <Text>
                {title}    
            </Text>
            <Text style={[styles.footerLink, {color: primary}]}>
                {link}
            </Text>
        </Link>
    )
};