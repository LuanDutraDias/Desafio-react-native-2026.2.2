import { View, Image, ScrollView } from "react-native";

import {styles} from "./styles";

import {colors} from "@/constants/colors";

import { Fontisto,  Entypo, FontAwesome} from "@expo/vector-icons";

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Contact from "@/components/Contact";
import SupportMessage from "@/components/SupportMessage";
import AppVersion from "@/components/AppVersion";
import ChangeColorTheme from "@/components/ChangeColorTheme";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SupportScreen(){
    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <ScrollView style={styles.sectionSupport} contentContainerStyle={styles.scrollContent}>
                <Image 
                    style={styles.supportBanner} 
                    source={require("@/assets/images/banners/support-banner.png")}    
                />
                <View style={styles.containerContent}>
                    <View style={styles.containerWelcome}>
                        <Title>
                            Fale conosco
                        </Title>
                        <Subtitle>
                            Dúvida, sugestão ou problema? Entre em contato conosco
                        </Subtitle>
                    </View>
                    <View style={styles.containerInformations}>
                        <SupportMessage/>
                        <Contact
                            title="E-mail"
                            link="mailto:luandutracontato@gmail.com?subject=Suporte"
                            textLink="luandutracontato@gmail.com"
                            icon1={
                                <Fontisto
                                    name="email"
                                    size={20}
                                    color={colors.secondary}
                                />  
                            }
                        />
                        <Contact
                            title="Instagram"
                            link="https://www.instagram.com/luan.dutra._?igsh=MmV0cmE2NmpiZmg3"
                            textLink="@luan.dutra"
                            icon1={
                                <Entypo
                                    name="instagram"
                                    size={18}
                                    color={colors.secondary}
                                />  
                            }
                        />
                        <Contact
                            title="WhatsApp"
                            link="https://wa.me/24992519459"
                            textLink="(24) 99251-9459"
                            icon1={
                                <FontAwesome
                                    name="whatsapp"
                                    size={22}
                                    color={colors.secondary}
                                />  
                            }
                        />
                        <AppVersion/>
                        <ChangeColorTheme/>
                    </View>
                </View>      
            </ScrollView>
        </SafeAreaView>
    )
}