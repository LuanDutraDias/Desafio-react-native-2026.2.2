import { Text, TouchableOpacity } from "react-native";

import {styles} from "./styles";

type SubtitleProps = {
  onPress: () => void
};

export default function ButtonReadTermsOfUse({onPress}: SubtitleProps){
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>Ler</Text>
        </TouchableOpacity>
    )
}