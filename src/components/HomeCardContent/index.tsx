import { View, Text, StyleProp, ViewStyle } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import {styles} from "./styles";

type HomeCardContentProps = {
    style?: StyleProp<ViewStyle>;
    title: string;
    author: string;
    rating: string;
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
                "{review}"
            </Text>
        </View>
    )
}