import Header from "@/components/Header";
import {Text, FlatList, View, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";
import ViewReviewModal from "@/components/overlays/ViewReviewModal";
import EditReviewModal from "@/components/overlays/EditReviewModal";
import DeleteReviewModal from "@/components/overlays/DeleteReviewModal";

import { useManageReview } from "@/hooks/useManageReview";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "@/styles/manage-reviews";

import { colors } from "@/constants/colors";

import { router } from "expo-router";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useAppData } from "@/contexts/appDataContext";
import { getMe } from "@/services/auth";

export default function ManageReviewSreen(){

    const {primary} = useColorTheme();

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
                <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{gap: 20, paddingBottom: 15}}
                    data={loggedUserReviews}
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