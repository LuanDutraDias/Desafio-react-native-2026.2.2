import Header from "@/components/Header";
import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/manage-reviews";

export default function ManageReviewSreen(){
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header
                title="Minhas Reviews"
            />
        </SafeAreaView>
    )
}