import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "@/styles/home"
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

export default function HomeSreen(){
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header title="Início"/>
            <Carousel/>
        </SafeAreaView>
    )
}