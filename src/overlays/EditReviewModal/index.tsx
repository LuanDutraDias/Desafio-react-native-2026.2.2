import { Modal, Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import RatingInputWithTitle from "@/components/RatingInputWithTitle";
import Button from "@/components/Button";

type ModalProps = {
    visible: boolean,
    onClose: () => void
}

export default function EditReviewModal({visible, onClose}: ModalProps){
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
                                name="pencil-alt" 
                                size={40} 
                                color={colors.primary1}
                            />
                        }
                        title="Editar review"
                    />
                    <ManageReviewCard
                        showButtons={false}
                        title="Super Mario Odysseyyyy"
                        rating={9.8}
                        genre="Platform"
                        image={require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png")}
                        updated="Editado em 02/12/2023"
                    />
                    <RatingInputWithTitle
                        title="Nova nota:"
                    />
                    <CommentInputWithTitle
                        title="Novo comentário:"
                    />
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