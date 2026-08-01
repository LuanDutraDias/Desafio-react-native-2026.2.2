
import { View, Image } from "react-native";

import {styles} from "@/styles/support";

import {colors} from "@/constants/colors";

import { Fontisto,  Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Contact from "@/components/Contact";
import SupportMessage from "@/components/SupportMessage";
import AppVersion from "@/components/AppVersion";
import ChangeColorTheme from "@/components/ChangeColorTheme";

export default function SupportScreen(){
    return (
        <View style={styles.sectionSupport}>
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
                        link="luandutracontato@gmail.com"
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
                        link="@luan.dutra"
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
                        link="(24) 99251-9459"
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
        </View>
    )
}