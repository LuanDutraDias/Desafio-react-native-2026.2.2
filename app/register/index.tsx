import { Image, TouchableOpacity, View } from "react-native";

import { colors } from "../../src/constants/colors";
import { styles } from "../../src/styles/register";

import AuthToggle from "../../src/components/AuthToggle";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import Subtitle from "../../src/components/Subtitle";
import Title from "../../src/components/Title";

import {useRegister} from "@/hooks/useRegister";

import { AntDesign, EvilIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import CheckboxWithText from "@/components/CheckboxWithText";

export default function RegisterScreen() {

  const {
          username,
          setUsername,
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

  return (
    <View style={styles.sectionRegister}>
        <Image style={styles.registerBanner} source={require("../../src/assets/images/banners/register-banner.png")}/>
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
            onChangeText={setUsername}
            value={username}
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
          <Button title="Cadastrar"/>
          <AuthToggle href="/login" title="Já tem uma conta? " link="Faça login"></AuthToggle>
        </View>
      </View>
    </View>
  );
};
