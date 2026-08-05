import { View, Image, Pressable, Text } from "react-native";

import { useState } from "react";

import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

import { useColorTheme } from "@/hooks/useColorTheme";

import {styles} from "./styles";
import HomeCardContent from "../HomeCardContent";

type HomeCardContentProps = {
    image: any,
    title: string;
    author: string;
    rating: number;
    genre: string;
    year: number;
    review: string;
}

export default function HomeReviewCard({title, author, rating, genre, year, review, image}: HomeCardContentProps){

    const {primary} = useColorTheme();

    const [readMore, setReadMore] = useState(false);

    return (
        <View style={styles.containerCard}>
            <View style={styles.containerImageAndIcons}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <View style={styles.containerIcons}>
                    <MaterialCommunityIcons 
                        name="sony-playstation" 
                        size={15}
                        color="blue"
                    />
                    <MaterialCommunityIcons 
                        name="microsoft-xbox" 
                        size={15} 
                        color="green"
                    />
                    <MaterialCommunityIcons 
                        name="nintendo-switch" 
                        size={15} 
                        color="red"
                    />
                    <FontAwesome6 
                        name="computer" 
                        size={14} 
                        color={colors.secondary} 
                    />
                </View>
            </View>
            <HomeCardContent
                title={title}
                author={author}
                rating={rating}
                genre={genre}
                year={year}
                review={review}
                readMore={readMore}
                style={{paddingBottom: 25}}
            />
            <Pressable style={[styles.containerButtonReadMore, {backgroundColor: `${primary}1A`}]} onPress={() => setReadMore(!readMore)}>
                <Text style={[styles.textButtonReadMore, {color: primary}]}>
                    {readMore ? 'Ler menos' : 'Ler mais'}
                </Text>
            </Pressable>
        </View>
    )
}