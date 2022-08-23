import React from "react";
import { View } from "react-native";
import { AppInput } from "../../components/AppInput";
import {
  SignUpButton,
  SignUpButtonText,
  SignUpContainer,
  SignUpForm,
  SignUpTitle,
} from "./styles";

export const SignUp = ({ navigation }) => {
  return (
    <SignUpContainer>
      <SignUpForm>
        <SignUpTitle>Criar sua conta</SignUpTitle>
        <View>
          <AppInput placeholder="Nome" />
          <AppInput
            placeholder="Celular (com DDD)"
            keyboardType="phone-pad"
            maxLength={11}
          />
          <AppInput
            placeholder="Senha (8 dígitos)"
            secureTextEntry
            maxLength={8}
          />
        </View>
      </SignUpForm>
      <SignUpButton>
        <SignUpButtonText>Avançar</SignUpButtonText>
      </SignUpButton>
    </SignUpContainer>
  );
};
