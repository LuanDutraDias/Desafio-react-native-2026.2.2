import { View, Text, StyleProp, ViewStyle } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import {styles} from "./styles";

type HomeCardContentProps = {
    style?: StyleProp<ViewStyle>;
    title: string;
    author: string;
    rating: number;
    genre: string;
    year: number;
    review: string;
    readMore?: boolean;
}

export default function HomeCardContent({title, author, rating, genre, year, review, style, readMore}: HomeCardContentProps){
    return (
        <View style={[styles.containerHomeCardContent, style]}>
            <Text style={styles.author}>
                {author} em 02/04/2018
            </Text>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.containerRatingGenreYear}>
                <AntDesign
                    name="star"
                    size={17}
                    color={colors.rating}
                />
                <Text style={styles.rating}>
                    {rating}
                </Text>
                <View style={styles.containerGenre}>
                    <Text style={styles.genre}>
                        {genre}
                    </Text>
                </View>
                <View style={styles.containerYear}>
                    <Text style={styles.year}>
                        {year}
                    </Text>
                </View>
            </View>
            <Text numberOfLines={readMore ? undefined : 3} style={styles.reviewComment}>
                {/* Mario Odyssey é uma obra-prima absoluta do design de jogos. É um jogo vibrante, extremamente criativo e indispensável para qualquer dono do console... */review}
            </Text>
        </View>
    )
}