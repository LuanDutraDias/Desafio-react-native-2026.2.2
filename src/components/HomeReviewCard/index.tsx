import { View, Image, Pressable, Text } from "react-native";

import { useState } from "react";

import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

import {styles} from "./styles";
import HomeCardContent from "../HomeCardContent";

import { Review } from "@/types/review";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";

import { gameCovers } from "@/constants/gameCovers";
import PlatformIcon from "../PlatformIcons";
import { platformIcons } from "@/constants/platformIcons";


type HomeReviewCardProps = {
    review: Review;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users: User[];
};

export default function HomeReviewCard({review, games, genres, platforms, users}: HomeReviewCardProps){

    const {primary} = useColorTheme();

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

    const platformColor = platform?.nome ? platformIcons[platform.nome]?.color: undefined;

    const [readMore, setReadMore] = useState(false);
    const [hasMoreLines, setHasMoreLines] = useState(false);

    return (
        <View style={styles.containerCard}>
            <View style={styles.containerImageAndIcons}>
                <Image
                    style={styles.image}
                    source={gameCovers[game.capa]}
                />
                <View style={styles.containerIcons}>
                    <PlatformIcon platformName={platform?.nome} />
                    <Text style={[styles.platformName, { color: platformColor }]}>
                        {platform?.nome}
                    </Text>
                </View>
            </View>
            <HomeCardContent
                title={game?.titulo}
                author={author?.name}
                action={review.created_at === review.updated_at ? "publicou" : "editou"}
                edited_at={review.updated_at}
                rating={review.nota}
                genre={genre?.genero}
                year={game?.ano_lancamento}
                review={review.comentario}
                readMore={readMore}
                style={{paddingBottom: 25}}
                commentLines={3}
                onHasMoreLines={setHasMoreLines}
            />
            {hasMoreLines && (
                <Pressable style={[styles.containerButtonReadMore, {backgroundColor: `${primary}1A`}]} onPress={() => setReadMore(!readMore)}>
                    <Text style={[styles.textButtonReadMore, {color: primary}]}>
                        {readMore ? 'Ler menos' : 'Ler mais'}
                    </Text>
                </Pressable>
            )}
        </View>
    )
}