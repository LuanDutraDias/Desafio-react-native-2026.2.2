import {Text} from "react-native";

import {Link, LinkProps} from "expo-router";

import {styles} from "../styles/login"

type linkProps = LinkProps & {
    title: string,
    link: string,
};

export default function AuthToggle({title, link, ...props}: linkProps){
    return (
        <Text style={styles.footerText}>
            {title}
            <Link style={styles.footerLink} {...props}>
                {link}
            </Link>
        </Text>
    )
};