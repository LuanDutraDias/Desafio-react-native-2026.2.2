import {Text, FlatList, View, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "@/styles/home"
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import HomeReviewCard from "@/components/HomeReviewCard";

import { useGetReview } from "@/hooks/useGetReview";
import { useColorTheme } from "@/hooks/useColorTheme";

export default function HomeSreen(){

    const {primary} = useColorTheme();

    const {
        reviews,
        games,
        genres,
        platforms,
        //users,
        loading,
    } = useGetReview();

    const carouselReviews = reviews.slice(0,5);
    const remainingReviews = reviews.slice(5);

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
            <Header title="Início" />
            <FlatList
                style={{flex: 1}}
                ListHeaderComponent={
                    <Carousel 
                        reviews={carouselReviews}
                        games={games}
                        genres={genres}
                        platforms={platforms}
                    />
                }
                contentContainerStyle={{gap: 10, paddingBottom: 15}}
                data={remainingReviews}
                renderItem={({ item }) => <HomeReviewCard 
                    review={item}
                    games={games}
                    genres={genres}
                    platforms={platforms}
                    //users={users}
                />}
            />
        </SafeAreaView>
    )
}