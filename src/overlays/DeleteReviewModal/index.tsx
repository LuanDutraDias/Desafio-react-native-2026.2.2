import { Modal, Text, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { FontAwesome5, Feather } from "@expo/vector-icons";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";
import CloseModalButton from "@/components/CloseModalButton";
import { Review } from "@/types/review";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";

import { deleteReview } from "@/services/reviews";
import { useDeleteReview } from "@/hooks/useDeleteReview";

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    review: Review | null;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users?: User[];
}

export default function DeleteReviewModal({visible, onClose, review, games, genres, platforms, users}: ModalProps){

    const {
        deleting,
        handleDeleteReview
    } = useDeleteReview();

    return (
        <Modal visible={visible} transparent> 
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <CloseModalButton
                        onClose={onClose}
                    />
                    <ManageReviewIconWithTitle
                        variant="primary1"
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
                            review={review}
                            games={games}
                            genres={genres}
                            platforms={platforms}
                            users={users}
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
                            onPress={onClose}
                        />
                        <Button
                            title={deleting ? "Excluindo..." : "Excluir"}
                            variant="primary1"
                            onPress={() => {
                                if(review){
                                    handleDeleteReview(review, onClose);
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}