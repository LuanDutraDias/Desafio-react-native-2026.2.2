import { View, Image, Pressable, Text } from "react-native";

import { useState } from "react";

import { MaterialCommunityIcons, FontAwesome6, AntDesign } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

import {styles} from "./styles";
import ManageReviewsButtons from "../ManageReviewsButtons";

type HomeCardContentProps = {
    image: any,
    title: string;
    rating: number;
    genre: string;
    updated: string;
}

export default function ManageReviewCard({title, rating, genre, image, updated}: HomeCardContentProps){

    const {primary} = useColorTheme();

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
            <ManageReviewsButtons/>
        </View>
    )
}