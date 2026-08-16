import { Keyboard, Modal, Pressable, View } from "react-native";

import {styles} from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

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
import { useEditReview } from "@/hooks/useEditReview";
import { register } from "@/services/auth";

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    review: Review | null;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
}

export default function EditReviewModal({visible, onClose, review, games, genres, platforms}: ModalProps){

    const {primary} = useColorTheme();

    const {
        loading,
        editing,
        rating,
        handleRatingChange,
        setRating,
        comment,
        setComment,
        handleEditReview,
    } = useEditReview(review);

    return (
        <Modal visible={visible} transparent> 
            <SafeAreaView style={styles.safeArea} edges={["top"]}>
                <Pressable style={styles.overlay} onPress={onClose}>
                    <View style={styles.modal}>

                        <CloseModalButton
                            onClose={onClose}
                            />

                    <KeyboardAwareScrollView 
                        style={styles.sectionEditReview}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollEditReview}
                        enableOnAndroid
                        extraScrollHeight={50}
                        keyboardShouldPersistTaps="handled"
                        >
                        <Pressable
                            onPress={Keyboard.dismiss}
                            accessible={false}
                            style={styles.containerContent}
                            >
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
                                    />
                                }
                                {review &&
                                    <RatingInputWithTitle
                                    title="Nova nota:"
                                    value={rating == "10.0" ? "10" : rating == "0.0" ? "0": rating}
                                    onChangeText={handleRatingChange}
                                    placeholder={String(review.nota) == "10.0" ? "10" : String(review.nota) == "0.0" ? "0" : String(review.nota)}
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
                            </Pressable>
                    </KeyboardAwareScrollView>
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
                </Pressable>
            </SafeAreaView>
        </Modal>
    )
}