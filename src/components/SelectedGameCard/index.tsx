import { Image, Text, View} from "react-native";

import { Game } from "@/types/game";
import { Genre } from "@/types/genre";

import { styles } from "./styles";

import { gameCovers } from "@/constants/gameCovers";

type SelectedGameCardProps = {
    game: Game;
    genre: Genre;
};

export default function SelectedGameCard({game, genre}: SelectedGameCardProps) {

    return (
        <View style={styles.containerCard}>
            <Image
                style={styles.image}
                source={gameCovers[game.capa]}
            />
            <View style={styles.containerCardContent}>
                <Text style={styles.title}>
                    {game.titulo}
                </Text>
                <View style={styles.containerGenreOrYear}>
                    <Text style={styles.genre}>
                        {genre.genero}
                    </Text>
                </View>
                <View style={styles.containerGenreOrYear}>
                    <Text style={styles.year}>
                        {game.ano_lancamento}
                    </Text>
                </View>
            </View>
        </View>
    )
}