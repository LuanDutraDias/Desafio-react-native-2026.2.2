import { Image, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from "@/constants/colors";
import { styles } from "@/styles/register";

import AuthToggle from "@/components/AuthToggle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

import {useRegister} from "@/hooks/useRegister";

import { register } from "@/services/auth";

import { AntDesign, EvilIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import CheckboxWithText from "@/components/CheckboxWithText";

export default function RegisterScreen() {

  const {
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
          confirmedPassword,
          setConfirmedPassword,
          showPassword,
          togglePassword,
          showConfirmedPassword,
          toggleConfirmedPassword,
          acceptTerms,
          toggleAcceptTerms,
      } = useRegister();

  async function handleRegister(){

    if (password === confirmedPassword){
      try {
        const response = await register({
          name,
          email,
          password,
        });
  
        console.log(response);
  
      } catch (error: any) {
        console.log(error.response?.data);
      }
    } else {
      alert("Senhas não coincidem");
    }
}    

  return (
    <KeyboardAwareScrollView 
      style={styles.sectionRegister}
      contentContainerStyle={styles.scrollRegister}
      enableOnAndroid
      extraScrollHeight={200}
      keyboardShouldPersistTaps="handled"
    >
      <Image 
        style={styles.registerBanner} 
        source={require("@/assets/images/banners/register-banner.png")}
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
            onChangeText={setName}
            value={name}
            icon1={
              <Ionicons
                name="person"
                size={20}
                color={colors.secondary}
              />  
            }
            icon2= {
              null
            } 
            placeholder="Usuário" 
          />
          <Input 
            onChangeText={setEmail}
            value={email}
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
            onChangeText={setPassword}
            value={password}
            icon1={
              <EvilIcons
                name="lock"
                size={30}
                color={colors.secondary}
              />
            }
            icon2={
              <TouchableOpacity onPress={togglePassword}>
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
          <Input
            onChangeText={setConfirmedPassword}
            value={confirmedPassword}
            icon1={
              <EvilIcons
                name="lock"
                size={30}
                color={colors.secondary}
              />
            }
            icon2={
              <TouchableOpacity onPress={toggleConfirmedPassword}>
                <AntDesign
                  name={showConfirmedPassword ? "eye" : "eye-invisible"}
                  size={20}
                  color={colors.secondary}
                />
              </TouchableOpacity>
            }
            placeholder="Confirmar senha" 
            secureTextEntry={showConfirmedPassword ? false : true}
          />
          <CheckboxWithText label="Aceito os Termos de Uso" onPress={toggleAcceptTerms} checked={acceptTerms}/>
          <Button title="Cadastrar" onPress={handleRegister}/>
          <AuthToggle href="/login" title="Já tem uma conta? " link="Faça login"></AuthToggle>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
