import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "../Button/styles";

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