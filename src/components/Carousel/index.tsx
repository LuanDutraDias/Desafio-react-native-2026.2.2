import { FlatList, View, Dimensions} from "react-native";

import { useState } from "react";

import {styles} from "./styles";

import CarouselCard from "../CarouselCard";
import PaginationDots from "../PaginationDots";

import { CARD_WIDTH, CARD_SPACING } from "@/constants/dimensions";
import { Review } from "@/types/review";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { User } from "@/types/user";
import { Platform } from "@/types/platform";

const { width } = Dimensions.get("window");

const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;
const SIDE_PADDING = (width - CARD_WIDTH) / 2;

type CarouselProps = {
    reviews: Review[];
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    users?: User[];
}

export default function Carousel({reviews, games, genres, platforms, users}: CarouselProps){

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
                data={reviews}
                keyExtractor={(item) => String(item.id)}
                ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
                renderItem={({ item }) => (
                    <CarouselCard
                        review={item}
                        games={games}
                        genres={genres}
                        platforms={platforms}
                        //users={users}
                    />
                )}
                />
            <PaginationDots
                total={reviews.length}

                
                current={currentIndex}
            />
        </>
    )
}