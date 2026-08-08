import { Modal, View } from "react-native";

import {styles} from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

import {FontAwesome5 } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import RatingInputWithTitle from "@/components/RatingInputWithTitle";
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

export default function EditReviewModal({visible, onClose, review}: ModalProps){

    const {primary} = useColorTheme();

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
                                name="pencil-alt" 
                                size={40} 
                                color={primary}
                            />
                        }
                        title="Editar review"
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