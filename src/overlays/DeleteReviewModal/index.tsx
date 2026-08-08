import { Modal, Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";
import CloseModalButton from "@/components/CloseModalButton";

type Review = {
    id: string;
    title: string;
    rating: number;
    genre: string;
    image: any;
    updated: string;
};


type ModalProps = {
    visible: boolean;
    onClose: () => void;
    review: Review | null,
}

export default function DeleteReviewModal({visible, onClose, review}: ModalProps){
    return (
        <Modal visible={visible} transparent> 
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <CloseModalButton
                        onClose={onClose}
                    />
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
                    {review &&
                        <ManageReviewCard
                            showButtons={false}
                            title={review.title}
                            rating={review.rating}
                            genre={review.genre}
                            image={review.image}
                            updated={review.updated}
                        />
                    }
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
                            title="Excluir"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}