import { View, Image} from "react-native";

import {LinearGradient} from "expo-linear-gradient";

import { colors } from "@/constants/colors";

import {styles} from "./styles";

import HomeCardContent from "../HomeCardContent";

type CarouselCardProps = {
    image: any;
    title: string;
    author: string;
    rating: number;
    genre: string;
    year: number;
    review: string;
}

export default function CarouselCard({image, title, author, rating, genre, year, review}: CarouselCardProps){
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.image}
                source={image}
            />
            <LinearGradient
                colors={[
                    "rgba(0,0,0,0.1)",
                    "rgba(0,0,0,0.5)",
                    "rgba(0,0,0,1)",
                ]}
                style={styles.gradient}
            />
            <HomeCardContent
                title={title}
                author={author}
                rating={rating}
                genre={genre}
                year={year}
                review={review}
                style={{justifyContent: "flex-end", paddingBottom: 10}}
            />
        </View>
    )
}