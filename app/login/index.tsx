import { Image, TouchableOpacity, View } from "react-native";

import { useState } from "react";

import { colors } from "../../src/constants/colors";
import { styles } from "../../src/styles/login";

import AuthToggle from "../../src/components/AuthToggle";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import Subtitle from "../../src/components/Subtitle";
import Title from "../../src/components/Title";

import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";

export default function LoginScreen() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.sectionLogin}>
        <Image 
          style={styles.loginBanner} 
          source={require("../../src/assets/images/banners/login-banner.png")}
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
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
            icon1={
              <EvilIcons
              name="lock"
              size={30}
              color={colors.secondary}
              />
            }
            icon2={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <AntDesign
                name={showPassword ? "eye" : "eye-invisible"}
                size={20}
                color={colors.secondary}
                />
              </TouchableOpacity>
            }
            placeholder="Senha" 
            secureTextEntry={showPassword ? false : true}
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
