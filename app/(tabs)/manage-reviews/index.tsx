import Header from "@/components/Header";
import {Text, FlatList, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ManageReviewCard from "@/components/ManageReviewsCards";
import Button from "@/components/Button";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "@/styles/manage-reviews";

import { colors } from "@/constants/colors";

const games = [
    {
        id: "1",
        title: "Elden Ring",
        rating: 9.7,
        genre: "RPG",
        image: require("@/assets/images/game-cover/capa-elden-ring-teste.jpg"),
        updated: "Editado em 02/12/2023"
    },
    {
        id: "2",
        title: "Zelda",
        rating: 10,
        genre: "Aventura",
        image: require("@/assets/images/game-cover/capa-zelda-teste.webp"),
        updated: "Editado em 02/12/2023"
    },
    {
        id: "3",
        title: "Super Mario Odyssey",
        rating: 9.8,
        genre: "Platform",
        image: require("@/assets/images/game-cover/capa-super-mario-odyssey-teste.png"),
        updated: "Editado em 02/12/2023"
        },
    {
        id: "4",
        title: "God of War",
        rating: 9.9,
        genre: "Action",
        image: require("@/assets/images/game-cover/capa-god-of-war-teste.png"),
        updated: "Editado em 02/12/2023"
    },
];

export default function ManageReviewSreen(){
    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <Header
                title="Minhas Reviews"
            />
            <View style={styles.containerContent}>
                <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{gap: 20}}
                    data={games}
                    renderItem={({ item }) => <ManageReviewCard {...item} />}
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
                />
            </View>
        </SafeAreaView>
    )
}