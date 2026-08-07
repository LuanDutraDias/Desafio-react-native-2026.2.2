import { TextInput, TextInputProps, View } from "react-native";

import { colors } from "../../constants/colors";
import { styles } from "./styles";

import { Ionicons } from "@expo/vector-icons";

type InputProps = TextInputProps;

export default function SearchBar({...props}: InputProps){
    return (
        <View style={styles.containerInput}>
            <Ionicons 
                name="search-outline" 
                size={28} 
                color={colors.secondary} 
            />
            <TextInput
            {...props}
            style={styles.input}
            placeholderTextColor={colors.inputPlaceHolder}
            />
        </View>
    )
};