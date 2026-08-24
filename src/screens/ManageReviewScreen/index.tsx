import Header from "@/components/Header";
import {FlatList, View, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";
import ViewReviewModal from "@/components/Overlays/ViewReviewModal";
import EditReviewModal from "@/components/Overlays/EditReviewModal";
import DeleteReviewModal from "@/components/Overlays/DeleteReviewModal";
import MyReviewSearchBar from "@/components/MyReviewsSearchBar";

import { useManageReview } from "@/hooks/useManageReview";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import { colors } from "@/constants/colors";

import { router } from "expo-router";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useAppData } from "@/contexts/appDataContext";
import { useState } from "react";
import NothingFound from "@/components/NothingFound";

export default function ManageReviewSreen(){

    const {primary} = useColorTheme();

    const [search, setSearch] = useState("");

    const {
        selectedReview,
        setSelectedReview,
        modal,
        setModal,
        handleView,
        handleEdit,
        handleDelete,
        closeModal,
        user
    } = useManageReview();

    const {
            reviews,
            games,
            genres,
            platforms,
            //users,
            loading,
            reloadReviews,
        } = useAppData();

    const loggedUserReviews = reviews.filter(
        (review) => review.usuario_id === user?.id
    )

    const filteredReviews = loggedUserReviews.filter((review) => {
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
            <Header
                title="Minhas Reviews"
            />
            <View style={styles.containerContent}>
                {loggedUserReviews.length > 0 && (
                    <MyReviewSearchBar
                        placeholder="Procure sua review"
                        onSearch={setSearch}
                    />
                )}
                {(loggedUserReviews.length == 0 || filteredReviews.length == 0) && (
                    <NothingFound
                        text={loggedUserReviews.length == 0 ? "Você ainda não tem reviews" : "Nenhuma review encontrada"}
                        style={{marginTop: 15}}
                    />
                )}
                <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{gap: 15, paddingBottom: 15, paddingTop: 15}}
                    data={filteredReviews}
                    renderItem={({ item }) => (
                        <ManageReviewCard 
                            review={item}
                            games={games}
                            genres={genres}
                            platforms={platforms}
                            onView={() => handleView(item)}
                            onEdit={() => handleEdit(item)}
                            onDelete={() => handleDelete(item)}
                        />)}
                />
                <Button
                    title="Nova avaliação"
                    icon={
                        <AntDesign 
                            name="plus" 
                            size={24} 
                            color={colors.secondary}
                        />
                    }
                    onPress={() => router.navigate("/create-review")}
                />
                <ViewReviewModal
                    visible={modal === "view"}
                    onClose={closeModal}
                    review={selectedReview}
                    games={games}
                    genres={genres}
                    platforms={platforms}

                />
                <EditReviewModal
                    visible={modal === "edit"}
                    onClose={closeModal}
                    review={selectedReview}
                    games={games}
                    genres={genres}
                    platforms={platforms}
                />
                <DeleteReviewModal
                    visible={modal === "delete"}
                    onClose={closeModal}
                    review={selectedReview}
                    games={games}
                    genres={genres}
                    platforms={platforms}
                />
            </View>
        </SafeAreaView>
    )
}