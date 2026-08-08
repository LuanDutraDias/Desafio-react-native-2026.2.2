import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "@/styles/create-review";

import { useColorTheme } from "@/hooks/useColorTheme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "@/components/SearchBar";
import RatingInputWithTitle from "@/components/RatingInputWithTitle";
import CommentInputWithTitle from "@/components/CommentInputWithTitle";
import Button from "@/components/Button";

export default function CreateReviewSreen(){

    const {primary} = useColorTheme();

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <KeyboardAwareScrollView 
                style={styles.sectionCreateReview}
                contentContainerStyle={styles.scrollCreateReview}
                enableOnAndroid
                extraScrollHeight={50}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.containerContent}>
                    <ManageReviewIconWithTitle
                        icon={
                            <MaterialCommunityIcons 
                                name="file-plus"
                                size={50} 
                                color={primary}
                            />
                        }
                        title={"Nova avaliação"}
                    />
                    <SearchBar placeholder="Escolha o jogo para avaliar"/>
                    <RatingInputWithTitle
                        title="Sua nota:"
                        placeholder="0,0"
                    />
                    <CommentInputWithTitle
                        title="Seu comentário:"
                        placeholder="O que achou do jogo?"
                    />
                    <Button
                        title="Publicar avaliação"
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}