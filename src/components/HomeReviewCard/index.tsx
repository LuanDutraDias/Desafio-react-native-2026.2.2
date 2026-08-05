import { View, Image } from "react-native";

import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

import { colors } from "@/constants/colors";

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
            />
        </View>
    )
}