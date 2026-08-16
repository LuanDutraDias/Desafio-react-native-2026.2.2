import { TextInput, TextInputProps, TouchableOpacity, View, Text } from "react-native";

import { useState, useMemo } from "react";

import { colors } from "../../constants/colors";
import { styles } from "./styles";

import { Entypo, Ionicons } from "@expo/vector-icons";

import { Game } from "@/types/game";
import { Review } from "@/types/review";

type SearchBarProps = TextInputProps & {
    games: Game[];
    onSelect: (game: Game) => void;
    loggedUserReviews: Review[];
};

export default function SearchBar({games, onSelect, loggedUserReviews, ...props}: SearchBarProps){

    const [search, setSearch] = useState("");

    const reviewedGameIds = useMemo(() => {
        return new Set(loggedUserReviews.map((review) => review.jogo_id));
    }, [loggedUserReviews]);

    const filteredGames = useMemo(() => {
        if (!search.trim()) {
            return [];
        }

        return games.filter((game) =>
            game.titulo.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, games]);

    function handleSelect(game: Game) {
        setSearch("");
        onSelect(game);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Ionicons 
                    name="search-outline" 
                    size={28} 
                    color={colors.secondary} 
                />
                <TextInput
                    {...props}
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                    placeholderTextColor={colors.inputPlaceHolder}
                />
            </View>
            {search.length > 0 && filteredGames.length > 0 && (
                <View style={styles.resultsContainer}>
                    {filteredGames.map((game) => {

                        const alreadyReviewed = reviewedGameIds.has(game.id);

                        return (
                            <TouchableOpacity
                                key={game.id}
                                style={styles.result}
                                onPress={() => handleSelect(game)}
                                disabled={alreadyReviewed}
                            >
                                <View style={styles.resultTextContainer}>
                                    <Text style={[styles.resultText, alreadyReviewed && styles.alreadyReviewedResult]}>
                                        {game.titulo}
                                    </Text>
                                </View>
                                {alreadyReviewed && 
                                    <View style={styles.alreadyReviewedContainer}>
                                        <Entypo 
                                            name="check" 
                                            size={14} 
                                            color={colors.secondary} 
                                        />
                                        <Text style={styles.alreadyReviewedText}>
                                            Avaliado
                                        </Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )}
        </View>
    )
};