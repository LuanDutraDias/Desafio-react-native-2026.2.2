import { Modal, View } from "react-native";

import {styles} from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {FontAwesome5 } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import RatingInputWithTitle from "@/components/RatingInputWithTitle";
import Button from "@/components/Button";
import CloseModalButton from "@/components/CloseModalButton";
import { Review } from "@/types/review";
import { Genre } from "@/types/genre";
import { Game } from "@/types/game";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";
import { useEditReview } from "@/hooks/useEditReview";
import { editReview } from "@/services/reviews";

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    review: Review | null;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users?: User[];
}

export default function EditReviewModal({visible, onClose, review, games, genres, platforms, users}: ModalProps){

    const {primary} = useColorTheme();

    const {
        loading,
        editing,
        rating,
        setRating,
        comment,
        setComment,
        handleEditReview,
    } = useEditReview(review);

    return (
        <Modal visible={visible} transparent> 
            <View style={styles.overlay}>
                <KeyboardAwareScrollView 
                    style={styles.sectionEditReview}
                    contentContainerStyle={styles.scrollEditReview}
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                >
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
                            review={review}
                            games={games}
                            genres={genres}
                            platforms={platforms}
                            users={users}
                        />
                    }
                    {review &&
                        <RatingInputWithTitle
                            title="Nova nota:"
                            value={rating}
                            onChangeText={setRating}
                            placeholder={String(review.nota)}
                        />
                    }
                    {review &&
                        <CommentInputWithTitle
                            title="Novo comentário:"
                            comment={comment}
                            onChangeText={setComment}
                            placeholder={review.comentario}
                        />
                    } 
                    <View style={styles.buttonsContainer}>
                        <Button
                            title="Cancelar"
                            variant="secondary"
                            onPress={onClose}
                        />
                        <Button
                            title={editing ? "Salvando..." : "Salvar"}
                            onPress={() => handleEditReview(review!.id, review!.jogo_id, onClose)}
                            disabled={editing}
                        />
                    </View>
                </View>
                </KeyboardAwareScrollView>
            </View>
        </Modal>
    )
}