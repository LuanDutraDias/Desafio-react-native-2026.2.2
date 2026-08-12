import { TextInput, TextInputProps, TouchableOpacity, View, Text } from "react-native";

import { useState, useMemo } from "react";

import { colors } from "../../constants/colors";
import { styles } from "./styles";

import { Ionicons } from "@expo/vector-icons";

import { Game } from "@/types/game";

type SearchBarProps = TextInputProps & {
    games: Game[];
    onSelect: (game: Game) => void;
};

export default function SearchBar({games, onSelect, ...props}: SearchBarProps){

    const [search, setSearch] = useState("");

    const filteredGames = useMemo(() => {
        if (!search.trim()) {
            return games;
        }

        return games.filter((game) =>
            game.titulo.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, games]);

    function handleSelect(game: Game) {
        setSearch(game.titulo);
        onSelect(game);
    }

    return (
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
            {search.length > 0 && (
                <View>
                    {filteredGames.map((game) => (
                        <TouchableOpacity
                            key={game.id}
                            onPress={() => handleSelect(game)}
                        >
                            <Text>
                                {game.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
};