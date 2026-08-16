import { Animated, View, Dimensions } from "react-native";
import { useRef, useState } from "react";

import { styles } from "./styles";

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
    users: User[];
}

export default function Carousel({ reviews, games, genres, platforms, users }: CarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
            useNativeDriver: true,
            listener: (event) => {
                const offsetX = (event as any).nativeEvent.contentOffset.x;
                const index = Math.round(offsetX / SNAP_INTERVAL);
                if (index !== currentIndex && index >= 0 && index < reviews.length) {
                    setCurrentIndex(index);
                }
            },
        }
    );

    return (
        <>
            <Animated.FlatList
                contentContainerStyle={[styles.containerCarousel, { paddingHorizontal: SIDE_PADDING }]}
                horizontal
                snapToInterval={SNAP_INTERVAL}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                bounces={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                data={reviews}
                keyExtractor={(item) => String(item.id)}
                ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
                getItemLayout={(_, index) => ({
                    length: SNAP_INTERVAL,
                    offset: SNAP_INTERVAL * index,
                    index,
                })}
                renderItem={({ item, index }) => (
                    <CarouselCard
                        review={item}
                        games={games}
                        genres={genres}
                        platforms={platforms}
                        users={users}
                        index={index}
                        scrollX={scrollX}
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