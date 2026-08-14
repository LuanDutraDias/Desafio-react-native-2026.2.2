import { View, Text, StyleProp, ViewStyle } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import {styles} from "./styles";

import { formatDateToBrasilia } from "@/utils/formatDate";

type HomeCardContentProps = {
    style?: StyleProp<ViewStyle>;
    title?: string;
    author?: string;
    rating?: number;
    genre?: string;
    year?: number;
    review?: string;
    edited_at: string;
    action: string;
    readMore?: boolean;
    commentLines: any;
    onHasMoreLines?: (hasMore: boolean) => void
}

export default function HomeCardContent({title, author, rating, genre, year, review, style, edited_at, action, readMore, commentLines, onHasMoreLines}: HomeCardContentProps){
    return (
        <View style={[styles.containerHomeCardContent, style]}>
            <Text style={styles.author}>
                {author} {action} em {formatDateToBrasilia(edited_at)}
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
                    {rating == 10 ? 10 : rating == 0 ? 0 : rating}
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
            <View style={{ position: "relative" }}>
                <Text
                    style={[styles.reviewComment, { position: "absolute", opacity: 0, zIndex: -1 }]}
                    onTextLayout={(e) => {
                        const lines = e.nativeEvent.lines.length;
                        onHasMoreLines?.(lines > commentLines);
                    }}
                    >
                    "{review}"
                </Text>
                <Text 
                    numberOfLines={readMore ? undefined : commentLines} 
                    style={styles.reviewComment}
                    >
                    "{review}"
                </Text>
            </View>
        </View>
    )
}