import { View, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

import {styles} from "./styles";

type ManageReviewsButtonsProps = {
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};

export default function ManageReviewsButtons({onView, onEdit, onDelete}: ManageReviewsButtonsProps){

    const {primary} = useColorTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onView}>
                <FontAwesome5 
                    name="eye" 
                    size={20} 
                    color={colors.secondary}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onEdit}>
                <FontAwesome5 
                    name="pencil-alt" 
                    size={18} 
                    color={colors.secondary}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <FontAwesome5 
                    name="trash" 
                    size={18} 
                    color={colors.primary1}
                />
            </TouchableOpacity>
        </View>
        
    )
}