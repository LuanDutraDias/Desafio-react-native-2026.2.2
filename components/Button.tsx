import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import {styles} from "../styles/login";

type buttonProps = TouchableOpacityProps & {
    title: string;
};

export default function Button({title, ...props}: buttonProps){
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}