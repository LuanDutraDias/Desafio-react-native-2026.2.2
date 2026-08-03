import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "@/styles/home"
import Header from "@/components/Header";

export default function HomeSreen(){
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header title="Início"/>
        </SafeAreaView>
    )
}