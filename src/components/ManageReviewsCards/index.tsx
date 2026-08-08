import { View, Image, Text } from "react-native";

import {AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import {styles} from "./styles";
import ManageReviewsButtons from "../ManageReviewsButtons";

type HomeCardContentProps = {
    image: any,
    title: string;
    rating: string;
    genre: string;
    updated: string;
    showButtons?: boolean;
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function ManageReviewCard({title, rating, genre, image, updated, showButtons = true, onView, onEdit, onDelete}: HomeCardContentProps){

    return (
        <View style={styles.containerCard}>
            <Image
                style={styles.image}
                source={image}
            />
            <View style={styles.containerManageCardContent}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={styles.containerRatingGenre}>
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
                </View>
                <Text style={styles.updated}>
                    {updated}
                </Text>
            </View>
            {showButtons && (
                <ManageReviewsButtons
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            )}
        </View>
    )
}