
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import ManageReviewIconWithTitle from "@/components/ManageReviewIconWithTitle";

import { styles } from "@/styles/create-review";

import { useColorTheme } from "@/hooks/useColorTheme";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

export default function CreateReviewSreen(){

    const {primary} = useColorTheme();

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <Header title="Criar Review" />
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
        </SafeAreaView>
    )
}