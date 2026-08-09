import Header from "@/components/Header";
import {Text, FlatList, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";
import ViewReviewModal from "@/overlays/ViewReviewModal";
import EditReviewModal from "@/overlays/EditReviewModal";
import DeleteReviewModal from "@/overlays/DeleteReviewModal";

import { useManageReview } from "@/hooks/useManageReview";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "@/styles/manage-reviews";

import { colors } from "@/constants/colors";

import { router } from "expo-router";

const games = [
    {
        id: "1",
        title: "Elden Ring",
        rating: "9,7",
        genre: "RPG",
        image: require("@/assets/images/game-cover/capa-elden-ring-teste.jpg"),
        updated: "Editado em 02/12/2023",
        comment: "ELDEN RINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",
    },
    {
        id: "2",
        title: "Zelda",
        rating: "10",
        genre: "Aventura",
        image: require("@/assets/images/game-cover/capa-zelda-teste.webp"),
        updated: "Editado em 02/12/2023",
        comment: "ZELDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
    {
        id: "3",
        title: "Super Mario Odyssey",
        rating: "9,8",
        genre: "Plataforma",
        image: require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png"),
        updated: "Editado em 02/12/2023",
        comment: "Uma aventura extremamente criativa, divertida e cheia de personalidade. Cada reino apresenta mecânicas únicas e incentiva a exploração do início ao fim. Perfeito para se divertir e explorar muitoooooo",
        },
    {
        id: "4",
        title: "God of War",
        rating: "9,9",
        genre: "Ação",
        image: require("@/assets/images/game-cover/capa-god-of-war-teste.png"),
        updated: "Editado em 02/12/2023",
        comment: "sei lá",
    },
    {
        id: "5",
        title: "God of War",
        rating: "9,9",
        genre: "Ação",
        image: require("@/assets/images/game-cover/capa-god-of-war-teste.png"),
        updated: "Editado em 02/12/2023",
        comment: "sei lá",
    },
    {
        id: "6",
        title: "God of War",
        rating: "9,9",
        genre: "Ação",
        image: require("@/assets/images/game-cover/capa-god-of-war-teste.png"),
        updated: "Editado em 02/12/2023",
        comment: "sei lá",
    },
];

export default function ManageReviewSreen(){

    const {
        selectedReview,
        setSelectedReview,
        modal,
        setModal,
        handleView,
        handleEdit,
        handleDelete,
        closeModal,
    } = useManageReview();

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <Header
                title="Minhas Reviews"
            />
            <View style={styles.containerContent}>
                <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{gap: 20, paddingBottom: 15}}
                    data={games}
                    renderItem={({ item }) => (
                        <ManageReviewCard 
                            {...item} 
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
                />
                <EditReviewModal
                    visible={modal === "edit"}
                    onClose={closeModal}
                    review={selectedReview}
                />
                <DeleteReviewModal
                    visible={modal === "delete"}
                    onClose={closeModal}
                    review={selectedReview}
                />
            </View>
        </SafeAreaView>
    )
}