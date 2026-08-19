import { Image, Keyboard, Pressable, Text, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from "@/constants/colors";
import { styles } from "./styles";

import AuthToggle from "@/components/AuthToggle";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import ChangeColorTheme from "@/components/ChangeColorTheme";

import { useLogin } from "@/hooks/useLogin";
import { useAuth } from "@/hooks/useAuth";

import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";

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
    errors,
    handleLogin,
    logging,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView
        style={styles.sectionLogin}
        contentContainerStyle={styles.scrollLogin}
        enableOnAndroid
        extraScrollHeight={230}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable onPress={Keyboard.dismiss} accessible={false}>
          <Image
            style={styles.loginBanner}
            source={require("@/assets/images/banners/login-banner.png")}
          />
          <View style={styles.containerContent}>
            <View style={styles.containerWelcome}>
              <Title>Bem-vindo</Title>
              <Subtitle>Faça login para continuar</Subtitle>
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
                  value={email}
                  onChangeText={handleChangeEmail}
                  icon1={<Fontisto name="email" size={20} color={colors.secondary} />}
                  icon2={null}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  error={!!errors.email}
                  />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.containerInputAndError}>
                <Input
                  value={password}
                  onChangeText={handleChangePassword}
                  icon1={<EvilIcons name="lock" size={34} color={colors.secondary} />}
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
                  error={!!errors.password}
                  />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <ChangeColorTheme />
              <Button
                title={logging ? "Entrando..." : "Entrar"}
                onPress={handleLogin}
                disabled={logging}
              />
              <AuthToggle
                href="/register"
                title="Não tem uma conta? "
                link="Cadastre-se"
              />
            </View>
          </View>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};