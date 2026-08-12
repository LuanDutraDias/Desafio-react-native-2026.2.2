import { View, Image} from "react-native";

import {LinearGradient} from "expo-linear-gradient";

import { colors } from "@/constants/colors";

import {styles} from "./styles";

import HomeCardContent from "../HomeCardContent";
import { Review } from "@/types/review";
import { gameCovers } from "@/constants/gameCovers";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { User } from "@/types/user";

type CarouselCardProps = {
    review: Review;
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users?: User[];
}

export default function CarouselCard({review, games, genres, platforms, users}: CarouselCardProps){
    
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
    

    //const author = users.find(
    //    (user) => user.id === review.usuario_id
    //);

    return (
        <View style={styles.cardContainer}>
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
                //author={}
                rating={review.nota}
                genre={genre?.genero}
                year={game.ano_lancamento}
                review={review.comentario}
                style={{justifyContent: "flex-end", paddingBottom: 10}}
                commentLines={undefined}
            />
        </View>
    )
}