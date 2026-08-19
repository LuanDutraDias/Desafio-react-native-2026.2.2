import { TextInput, TextInputProps, View } from "react-native";

import { colors } from "../../constants/colors";
import { styles } from "../Input/styles";

type InputProps = TextInputProps & {
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    error?: boolean;
};

export default function Input({icon1, icon2, error, ...props}: InputProps){
    return (
        <View style={[styles.containerInput, error && styles.containerInputError]}>
            <View style={styles.containerIconInput}>
                {icon1} 
            </View>
            <TextInput
            {...props}
            style={styles.input}
            placeholderTextColor={colors.inputPlaceHolder}
            />
            <View style={styles.inputButton}>
                {icon2} 
            </View>
        </View>
    )
};