import { Image, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { router } from "expo-router";

import { colors } from "@/constants/colors";
import { styles } from "@/styles/login";

import AuthToggle from "@/components/AuthToggle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import CheckboxWithText from "@/components/CheckboxWithText";
import ChangeColorTheme from "@/components/ChangeColorTheme";

import {useLogin} from "@/hooks/useLogin";

import { useAuth } from "@/hooks/useAuth";

import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";

import { login } from "@/services/auth";

import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {

  const {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        togglePassword,
        rememberMe,
        toggleRememberMe,
    } = useLogin();

    const {signIn} = useAuth();

    async function handleLogin(){
      try {
        const response = await login({
          email,
          password,
        });

        await signIn(response.token);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView 
        style={styles.sectionLogin}
        contentContainerStyle={styles.scrollLogin}
        enableOnAndroid
        extraScrollHeight={230}
        keyboardShouldPersistTaps="handled"
      >
        <Image 
          style={styles.loginBanner} 
          source={require("@/assets/images/banners/login-banner.png")}
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
              size={34}
              color={colors.secondary}
              />
            }
            icon2={
              <TouchableOpacity onPress={togglePassword}>
                <AntDesign
                name={showPassword ? "eye" : "eye-invisible"}
                size={22}
                color={colors.secondary}
                />
              </TouchableOpacity>
            }
            placeholder="Senha" 
            secureTextEntry={showPassword ? false : true}
          />
          <ChangeColorTheme/>
          <Button 
            title="Entrar"
            onPress={handleLogin}
          />
          <AuthToggle 
            href="/register" 
            title="Não tem uma conta? " 
            link="Cadastre-se"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  </SafeAreaView>
  );
};
