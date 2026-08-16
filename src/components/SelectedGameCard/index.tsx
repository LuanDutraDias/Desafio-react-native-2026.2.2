import { Image, Text, TouchableOpacity, View} from "react-native";

import { Game } from "@/types/game";
import { Genre } from "@/types/genre";

import { styles } from "./styles";
import { colors } from "@/constants/colors";

import { gameCovers } from "@/constants/gameCovers";
import { AntDesign } from "@expo/vector-icons";

type SelectedGameCardProps = {
    game: Game;
    genre: Genre;
    onRemove: () => void;
};

export default function SelectedGameCard({game, genre, onRemove}: SelectedGameCardProps) {

    return (
        <View style={styles.containerCard}>
            <TouchableOpacity activeOpacity={0.7} hitSlop={20} style={styles.removeButton} onPress={onRemove}>
                <AntDesign
                    name="close"
                    size={10}
                    color={colors.secondary}
                />
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={gameCovers[game.capa]}
                fadeDuration={0}
            />
            <View style={styles.containerCardContent}>
                <Text style={styles.title} numberOfLines={1}>
                    {game.titulo}
                </Text>
                <View style={styles.containerGenre}>
                    <Text style={styles.genre}>
                        {genre.genero}
                    </Text>
                </View>
                <View style={styles.containerYear}>
                    <Text style={styles.year}>
                        {game.ano_lancamento}
                    </Text>
                </View>
            </View>
        </View>
    )
}