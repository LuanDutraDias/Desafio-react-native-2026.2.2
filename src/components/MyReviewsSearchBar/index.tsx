import { TextInput, TextInputProps, View } from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

type MyReviewSearchBarProps = TextInputProps & {
    onSearch: (text: string) => void;
};

export default function MyReviewSearchBar({
    onSearch,
    ...props
}: MyReviewSearchBarProps) {

    const [search, setSearch] = useState("");

    function handleSearch(text: string) {
        setSearch(text);
        onSearch(text);
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
                    onChangeText={handleSearch}
                    style={styles.input}
                    placeholderTextColor={colors.inputPlaceHolder}
                />
            </View>
        </View>
    );
}