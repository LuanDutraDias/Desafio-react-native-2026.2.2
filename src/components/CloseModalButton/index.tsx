import {TouchableOpacity} from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { AntDesign } from "@expo/vector-icons";

type CloseModalButtonProps = {
    onClose: () => void;
}

export default function CloseModalButton({onClose}: CloseModalButtonProps){
    return (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign
                name="close"
                size={16}
                color={colors.secondary}
            />
        </TouchableOpacity>
    )
}