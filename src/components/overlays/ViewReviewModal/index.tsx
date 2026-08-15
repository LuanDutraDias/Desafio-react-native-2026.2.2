import { Modal, Pressable } from "react-native";

import {styles} from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

import { FontAwesome5 } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import CloseModalButton from "@/components/CloseModalButton";
import { Review } from "@/types/review";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";

type ModalProps = {
    visible: boolean,
    onClose: () => void,
    review: Review | null;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
}

export default function ViewReviewModal({visible, onClose, review, games, genres, platforms}: ModalProps){

    const {primary} = useColorTheme();

    return (
        <Modal visible={visible} transparent> 
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable style={styles.modal} onPress={() => {}}>
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
                            review={review}
                            games={games}
                            genres={genres}
                            platforms={platforms}
                        />
                    }
                    {review &&
                        <CommentInputWithTitle
                            title="Comentário:"
                            comment={review.comentario}
                            commentLength={review.comentario.length}
                            editable={false}
                        />
                    }
                </Pressable>
            </Pressable>
        </Modal>
    )
}