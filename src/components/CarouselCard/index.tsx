import { View, Image, Animated } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import HomeCardContent from "../HomeCardContent";
import { Review } from "@/types/review";
import { gameCovers } from "@/constants/gameCovers";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";
import { CARD_WIDTH, CARD_SPACING } from "@/constants/dimensions";

type CarouselCardProps = {
    review: Review;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users: User[];
    index: number;
    scrollX: Animated.Value;
}

const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

export default function CarouselCard({ review, games, genres, platforms, users, index, scrollX }: CarouselCardProps) {

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

    const author = users.find(
        (user) => user.id === review.usuario_id
    );

    const inputRange = [
        (index - 1) * SNAP_INTERVAL,
        index * SNAP_INTERVAL,
        (index + 1) * SNAP_INTERVAL,
    ];

    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.88, 1, 0.88],
        extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.6, 1, 0.6],
        extrapolate: "clamp",
    });

    return (
        <Animated.View style={[styles.cardContainer, { transform: [{ scale }], opacity }]}>
            <Image
                style={styles.image}
                source={gameCovers[game.capa]}
            />
            <LinearGradient
                colors={[
                    "rgba(0,0,0,0.1)",
                    "rgba(0,0,0,0.5)",
                    "rgba(0,0,0,1)",
                ]}
                style={styles.gradient}
            />
            <HomeCardContent
                title={game.titulo}
                author={author?.name}
                action={review.created_at === review.updated_at ? "publicou" : "editou"}
                edited_at={review.updated_at}
                rating={review.nota}
                genre={genre?.genero}
                year={game.ano_lancamento}
                review={review.comentario}
                style={{ justifyContent: "flex-end", paddingBottom: 10 }}
                commentLines={undefined}
            />
        </Animated.View>
    )
}