import {FlatList, ActivityIndicator, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "./styles"
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import HomeReviewCard from "@/components/HomeReviewCard";

import { getTopWeeklyReviews } from "@/utils/getTopWeeklyReviews";

import { useColorTheme } from "@/hooks/useColorTheme";
import { useAppData } from "@/contexts/appDataContext";
import MyReviewSearchBar from "@/components/MyReviewsSearchBar";
import { useState } from "react";
import NothingFound from "@/components/NothingFound";

export default function HomeSreen(){

    const [search, setSearch] = useState("");

    const {primary} = useColorTheme();

    const {
        reviews,
        games,
        genres,
        platforms,
        users,
        loading,
    } = useAppData();

    const carouselReviews = getTopWeeklyReviews(reviews, 5);

    const filteredReviews = reviews.filter((review) => {
        const game = games.find(
            (game) => game.id === review.jogo_id
        );

        return game?.titulo.toLowerCase().includes(search.toLowerCase().trim());
    })

    if (loading) {
        return (

            <SafeAreaView
                style={styles.safeAreaView}
            >
                <ActivityIndicator
                    size="large"
                    color={primary}
                />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <Header title="Início"/>
            <View style={{paddingHorizontal: 20, paddingBottom: 10}}>
                <MyReviewSearchBar
                    onSearch={setSearch}
                    placeholder="Pesquise um jogo"
                />
                {filteredReviews.length == 0 && (
                    <NothingFound
                        text="Nenhuma review encontrada"  
                        style={{marginTop: 10}}
                    />
                )}
            </View>
            <FlatList
                style={{flex: 1}}
                ListHeaderComponent={
                    !search.trim() && carouselReviews.length > 0 ? (
                        <Carousel 
                            reviews={carouselReviews}
                            games={games}
                            genres={genres}
                            platforms={platforms}
                            users={users}
                        />
                    ) : null
                }
                contentContainerStyle={{gap: 10, paddingBottom: 15}}
                data={filteredReviews}
                renderItem={({ item }) => <HomeReviewCard 
                    review={item}
                    games={games}
                    genres={genres}
                    platforms={platforms}
                    users={users}
                />}
            />
        </SafeAreaView>
    )
}