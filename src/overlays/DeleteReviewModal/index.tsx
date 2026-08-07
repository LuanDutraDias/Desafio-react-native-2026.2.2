import { Modal, Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";

type ModalProps = {
    visible: boolean,
    onClose: () => void
}

export default function DeleteReviewModal({visible, onClose}: ModalProps){
    return (
        <Modal visible={visible} transparent> 
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Ionicons
                            name="close-circle"
                            size={30}
                            color={colors.primary1}
                        />
                    </TouchableOpacity>
                    <ManageReviewIconWithTitle
                        icon={
                            <FontAwesome5 
                                name="trash" 
                                size={40} 
                                color={colors.primary1}
                            />
                        }
                        title="Excluir review"
                    />
                    <ManageReviewCard
                        showButtons={false}
                        title="Super Mario Odysseyyyy"
                        rating={9.8}
                        genre="Platform"
                        image={require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png")}
                        updated="Editado em 02/12/2023"
                    />
                    <View style={[styles.alertContainer, {backgroundColor: `${colors.primary1}1F`, borderColor: `${colors.primary1}80`}]}>
                        <Feather 
                            name="alert-triangle" 
                            size={40} 
                            color={colors.primary1} 
                        />
                        <Text style={styles.alertMessage}>
                            Ao excluir, sua review será excluída permanentemente
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button
                            title="Cancelar"
                            variant="secondary"
                        />
                        <Button
                            title="Salvar"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}