import { Modal, View } from "react-native";

import {styles} from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

import { FontAwesome5 } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import CloseModalButton from "@/components/CloseModalButton";

type Review = {
    id: string;
    title: string;
    rating: string;
    genre: string;
    image: any;
    updated: string;
    comment: string;
};

type ModalProps = {
    visible: boolean,
    onClose: () => void,
    review: Review | null,
}

export default function ViewReviewModal({visible, onClose, review}: ModalProps){

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
                                name="eye" 
                                size={40} 
                                color={primary}
                            />
                        }
                        title="Visualizar review"
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
                    {review &&
                        <CommentInputWithTitle
                            title="Comentário:"
                            value={review.comment}
                            editable={false}
                        />
                    }
                </View>
            </View>
        </Modal>
    )
}