import { View, Image, Text } from "react-native";

import {AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import {styles} from "./styles";
import ManageReviewsButtons from "../ManageReviewsButtons";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";
import { Review } from "@/types/review";
import { gameCovers } from "@/constants/gameCovers";

type HomeCardContentProps = {
    review: Review;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users?: User[];
    showButtons?: boolean;
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function ManageReviewCard({review, games, genres, platforms, users, showButtons = true, onView, onEdit, onDelete}: HomeCardContentProps){

    const game = games.find(
        (game) => game.id === review.jogo_id
    );
    
    if (!game) return null;
    
    const genre = genres.find(
        (genre) => genre.id === game.genero_id
    );

    const platform = platforms.find(
        (platform) => platform.id === game.plataforma_id
    );

    return (
        <View style={styles.containerCard}>
            <Image
                style={styles.image}
                source={gameCovers[game.capa]}
            />
            <View style={styles.containerManageCardContent}>
                <Text style={styles.title}>
                    {game.titulo}
                </Text>
                <View style={styles.containerRatingGenre}>
                    <AntDesign
                        name="star"
                        size={17}
                        color={colors.rating}
                    />
                    <Text style={styles.rating}>
                        {review.nota}
                    </Text>
                    <View style={styles.containerGenre}>
                        <Text style={styles.genre}>
                            {genre?.genero}
                        </Text>
                    </View>
                </View>
                <Text style={styles.updated}>
                    Atualizado em...
                </Text>
            </View>
            {showButtons && (
                <ManageReviewsButtons
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            )}
        </View>
    )
}