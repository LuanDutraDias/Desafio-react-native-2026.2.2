import { FlatList, View, Dimensions } from "react-native";

import { useState } from "react";

import {styles} from "./styles";

import CarouselCard from "../CarouselCard";
import PaginationDots from "../PaginationDots";

import { CARD_WIDTH, CARD_SPACING } from "@/constants/dimensions";

const { width } = Dimensions.get("window");

const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;
const SIDE_PADDING = (width - CARD_WIDTH) / 2;

const games = [
    {
        id: "1",
        title: "Elden Ring",
        author: "@luandutra",
        rating: "9,7",
        genre: "RPG",
        year: 2022,
        review: "Um dos melhores RPGs já feitos.",
        image: require("@/assets/images/game-cover/capa-elden-ring-teste.jpg"),
    },
    {
        id: "2",
        title: "Zelda",
        author: "@pedro",
        rating: "10",
        genre: "Aventura",
        year: 2023,
        review: "Uma aventura incrível.",
        image: require("@/assets/images/game-cover/capa-zelda-teste.webp"),
    },
    {
        id: "3",
        title: "Super Mario Odyssey",
        author: "@pedrohenrique",
        rating: "9,8",
        genre: "Platform",
        year: 2017,
        review: "Uma aventura extremamente criativa, divertida e cheia de personalidade. Cada reino apresenta mecânicas únicas e incentiva a exploração do início ao fim. Perfeito para se divertir e explorar muitoooooo",
        image: require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png"),
        },
    {
        id: "4",
        title: "God of War",
        author: "@marcossilva",
        rating: "9,9",
        genre: "Action",
        year: 2018,
        review: "Uma experiência emocionante que combina combate intenso, narrativa impecável e uma relação inesquecível entre Kratos e Atreus.",
        image: require("@/assets/images/game-cover/capa-god-of-war-teste.png"),
    },
    {
        id: "5",
        title: "Super Mario Odyssey",
        author: "@pedrohenrique",
        rating: "9,8",
        genre: "Platform",
        year: 2017,
        review: "UMA AVENTURA EXTREMAMENTE CRIATIVA, DIVERTIDA E CHEIA DE PERSONALIDADE. CADA REINO APRESENTA MECÂNICAS ÚNICAS E INCENTIVA A EXPLORAÇÃO DO INÍCIO AO FIM. PERFEITO PARA SE DIVERTIR E EXPLORAR MUITOOOOOO",
        image: require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png"),
        },
];

export default function Carousel(){

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <FlatList
                contentContainerStyle={[styles.containerCarousel, {paddingHorizontal: SIDE_PADDING}]}
                horizontal
                snapToInterval={SNAP_INTERVAL}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                bounces={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / SNAP_INTERVAL
                    );
                    setCurrentIndex(index);
                }}
                data={games}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
                renderItem={({ item }) => (
                    <CarouselCard {...item} />
                )}
                />
            <PaginationDots
                total={games.length}
                current={currentIndex}
            />
        </>
    )
}