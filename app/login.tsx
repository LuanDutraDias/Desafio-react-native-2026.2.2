import {View, Image} from "react-native";

import {colors} from "../styles/colors";
import {styles} from "../styles/login";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthToggle from "../components/AuthToggle";

import { Fontisto, EvilIcons, AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <View style={styles.sectionLogin}>
        <Image 
          style={styles.loginBanner} 
          source={require("../assets/images/login-banner.png")}
        />
      <View style={styles.containerContent}>
        <View style={styles.containerWelcome}>
          <Title>
            Bem-vindo
          </Title>
          <Subtitle>
            Faça login para continuar
          </Subtitle>
        </View>
        <View style={styles.containerForms}>
          <Input 
            icon1={
              <Fontisto
              name="email"
              size={20}
              color={colors.secondary}
              />  
            }
            icon2= {
              null
            } 
            placeholder="E-mail" 
            keyboardType="email-address"
            />
          <Input
            icon1={
              <EvilIcons
              name="lock"
              size={30}
              color={colors.secondary}
              />
            }
            icon2={
              < AntDesign
              name="eye"
              size={20}
              color={colors.secondary}
              />
            }
            placeholder="Senha" 
            secureTextEntry={true}
            />
          <Button 
            title="Entrar"
            />
          <AuthToggle 
            href="/register" 
            title="Não tem uma conta? " 
            link="Cadastre-se"
            />
        </View>
      </View>
    </View>
  );
};
