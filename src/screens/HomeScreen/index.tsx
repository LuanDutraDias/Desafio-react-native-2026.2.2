import {FlatList, ActivityIndicator, View, Text} from "react-native";
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
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { BORDER_RADIUS } from "@/constants/dimensions";

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
            <View style={{paddingHorizontal: 20}}>
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
                style={{flex: 1, paddingTop: 10}}
                ListHeaderComponent={
                    !search.trim() && carouselReviews.length > 0 ? (
                        <View>
                            <View style={[styles.containerWeekHighlights]}>
                                <View style={styles.containerRatingIcon}>
                                    <View style={styles.ratingInsideIcon}>
                                    </View>
                                    <FontAwesome6
                                        name="fire"
                                        color={colors.primary1}
                                        size={19}
                                    />
                                </View>
                                <Text style={styles.weekHighlightsText}>Destaques da Semana</Text>
                            </View>
                            <Carousel 
                                reviews={carouselReviews}
                                games={games}
                                genres={genres}
                                platforms={platforms}
                                users={users}
                            />
                        </View>
                    ) : null
                }
                contentContainerStyle={{gap: 10, paddingBottom: 20}}
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