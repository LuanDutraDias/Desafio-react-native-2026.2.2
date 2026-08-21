import { ActivityIndicator, Keyboard, Pressable, View} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";
import SearchBar from "@/components/SearchBar";
import SelectedGameCard from "@/components/SelectedGameCard";
import RatingInputWithTitle from "@/components/RatingInputWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import Button from "@/components/Button";

import { styles } from "./styles";

import { useColorTheme } from "@/hooks/useColorTheme";

import { useCreateReview } from "@/hooks/useCreateReview";
import { useAppData } from "@/contexts/appDataContext";

import { useAuth } from "@/hooks/useAuth";

export default function CreateReviewScreen() {

    const {user, loadingUser} = useAuth();
    const {reviews} = useAppData();

    const { primary } = useColorTheme();

    const {
        games,
        selectedGame,
        selectedGenre,
        setSelectedGame,
        handleSelectGame,
        rating,
        setRating,
        handleRatingChange,
        comment,
        setComment,
        loadingGenre,
        publishing,
        publishReview,
        isFormComplete,
    } = useCreateReview();

    const loggedUserReviews = reviews.filter(
        (review) => review.usuario_id === user?.id
    )

    return (

        <SafeAreaView
            style={styles.safeAreaView}
            edges={["top"]}
        >
            <KeyboardAwareScrollView
                style={styles.sectionCreateReview}
                contentContainerStyle={
                    styles.scrollCreateReview
                }
                enableOnAndroid
                extraScrollHeight={50}
                keyboardShouldPersistTaps="handled"
            >
                <Pressable
                    style={styles.containerContent}
                    onPress={Keyboard.dismiss}
                    accessible={false}
                >
                        <ManageReviewIconWithTitle
                            icon={
                                <MaterialCommunityIcons
                                    name="file-plus"
                                    size={50}
                                    color={primary}
                                />
                            }
                            title="Nova avaliação"
                        />
                        <SearchBar
                            placeholder={
                                "Escolha o jogo para avaliar"
                            }
                            games={games}
                            loggedUserReviews={loggedUserReviews}
                            onSelect={handleSelectGame}
                        />
                        {selectedGame && (

                            loadingGenre ? (
                                <ActivityIndicator
                                    color={primary}
                                />
                            ) : (
                                selectedGenre && (

                                    <SelectedGameCard
                                        game={selectedGame}
                                        genre={selectedGenre}
                                        onRemove={() => setSelectedGame(null)}
                                    />
                                )
                            )
                        )}
                        <RatingInputWithTitle
                            title="Sua nota:"
                            placeholder="0.0"
                            value={rating}
                            onChangeText={handleRatingChange}
                        />
                        <CommentInputWithTitle
                            title="Seu comentário:"
                            placeholder="O que achou do jogo?"
                            comment={comment}
                            onChangeText={setComment}
                        />
                </Pressable>
            </KeyboardAwareScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    title={
                        publishing
                            ? "Publicando..."
                            : "Publicar avaliação"
                    }
                    onPress={publishReview}
                    disabled={publishing || loadingUser || !user || !isFormComplete}
                />
            </View>
        </SafeAreaView>
    );
}