import { Image, Keyboard, Pressable, TouchableOpacity, View, Text} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import AuthToggle from "@/components/AuthToggle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import ModalTermsOfUse from "@/components/overlays/ModalTermsOfUse";

import {useRegister} from "@/hooks/useRegister";

import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, EvilIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import CheckboxWithText from "@/components/CheckboxWithText";

export default function RegisterScreen() {

  const {
          name,
          email,
          password,
          
          confirmedPassword,
          setConfirmedPassword,
          showPassword,
          togglePassword,
          showConfirmedPassword,
          toggleConfirmedPassword,
          acceptTerms,
          registering,
          passwordFocused,
          setPasswordFocused,
          handleChangeName,
          handleChangeEmail,
          handleChangePassword,
          handleRegister,
          showModal,
          setShowModal,
          errors,
          validatePasswordRequirements,
          onAcceptTerms,
          onCheckAcceptTerms,
          onOpenModalTerms,
      } = useRegister();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ModalTermsOfUse visible={showModal} onClose={() => setShowModal(false)} onAccept={onAcceptTerms}/>
      <KeyboardAwareScrollView 
        style={styles.sectionRegister}
        contentContainerStyle={styles.scrollRegister}
        enableOnAndroid
        extraScrollHeight={200}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={Keyboard.dismiss}
          accessible={false}
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
              <View style={styles.containerInputAndError}>
                {errors.general && (
                  <View style={styles.generalErrorContainer}>
                    <AntDesign name="exclamation-circle" size={16} color={colors.primary1} />
                    <Text style={styles.errorText}>{errors.general}</Text>
                  </View>
                )}
                <Input 
                  error={!!errors.name}
                  onChangeText={handleChangeName}
                  value={name}
                  icon1={
                    <Ionicons
                    name="person"
                    size={22}
                    color={colors.secondary}
                    />  
                  }
                  icon2= {
                    null
                  } 
                  placeholder="Usuário" 
                  />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>
                <View style={styles.containerInputAndError}>
                <Input 
                  error={!!errors.email}
                  onChangeText={handleChangeEmail}
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
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.containerInputAndError}>
                <Input
                  error={!!errors.password}
                  onChangeText={handleChangePassword}
                  value={password}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  icon1={
                    <EvilIcons
                      name="lock"
                      size={34}
                      color={colors.secondary}
                    />
                  }
                  icon2={
                    <TouchableOpacity onPress={togglePassword} activeOpacity={0.7}>
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
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                {passwordFocused && (
              <View style={styles.containerPasswordRequirements}>
                <Text style={styles.textPasswordRequirements}>A sua senha deve conter, no mínimo:</Text>
                <View style={styles.containerTextPasswordRequirements}>
                  <AntDesign
                    name={validatePasswordRequirements.length ? "check" : "close"}
                    size={16}
                    color={validatePasswordRequirements.length ? colors.primary3 : colors.primary1}
                  />
                  <Text style={styles.textPasswordRequirements}>8 caracteres</Text>
                </View>
                <View style={styles.containerTextPasswordRequirements}>
                  <AntDesign
                    name={validatePasswordRequirements.number ? "check" : "close"}
                    size={16}
                    color={validatePasswordRequirements.number ? colors.primary3 : colors.primary1}
                  />
                  <Text style={styles.textPasswordRequirements}>1 número</Text>
                  </View>
                <View style={styles.containerTextPasswordRequirements}>
                  <AntDesign
                    name={validatePasswordRequirements.case ? "check" : "close"}
                    size={16}
                    color={validatePasswordRequirements.case ? colors.primary3 : colors.primary1}
                  />
                  <Text style={styles.textPasswordRequirements}>1 letra maiúscula e minúscula</Text>
                </View>
                <View style={styles.containerTextPasswordRequirements}> 
                  <AntDesign
                    name={validatePasswordRequirements.simbol ? "check" : "close"}
                    size={16}
                    color={validatePasswordRequirements.simbol ? colors.primary3 : colors.primary1}
                  />
                  <Text style={styles.textPasswordRequirements}>1 símbolo</Text>
                </View>
              </View>
                )}
              </View>
              <View style={styles.containerInputAndError}>
              <Input
                onChangeText={setConfirmedPassword}
                value={confirmedPassword}
                error={!!errors.confirmedPassword}
                icon1={
                  <EvilIcons
                    name="lock"
                    size={34}
                    color={colors.secondary}
                  />
                }
                icon2={
                  <TouchableOpacity onPress={toggleConfirmedPassword} activeOpacity={0.7}>
                    <AntDesign
                      name={showConfirmedPassword ? "eye" : "eye-invisible"}
                      size={22}
                      color={colors.secondary}
                    />
                  </TouchableOpacity>
                }
                placeholder="Confirmar senha" 
                secureTextEntry={showConfirmedPassword ? false : true}
              />
              {errors.confirmedPassword && (
                <Text style={styles.errorText}>{errors.confirmedPassword}</Text>
              )}
              </View>
              <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
                <CheckboxWithText error={!!errors.acceptTerms} label="Li e Aceito os " termsLink="Termos de Uso" onOpen={onOpenModalTerms} onCheck={onCheckAcceptTerms} checked={acceptTerms}/>
              </View>
              <Button title={registering ? "Cadastrando..." : "Cadastrar"} onPress={handleRegister}/>
              <AuthToggle href="/login" title="Já tem uma conta? " link="Faça login"></AuthToggle>
            </View>
          </View>
        </Pressable>     
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
