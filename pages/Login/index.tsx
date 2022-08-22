import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../variables';
import {
  LoginButton,
  LoginButtonsContainer,
  LoginButtonText,
  LoginContainer,
  LoginForm,
  LoginHairline,
  LoginHeader,
  LoginLink,
  LoginMain,
  LoginMainTitle,
  LoginNoAccount,
  LoginOption,
  LoginOptionText,
  LoginText,
  LoginTextInput,
} from './styles';

export const Login = ({ navigation }) => {
  return (
    <LoginContainer>
      <LoginHeader>
        <Icon
          name="logo-twitter"
          size={30}
          color={colors.extraExtraLightGray}
        />
      </LoginHeader>
      <LoginMain>
        <LoginMainTitle>Entrar no Twitter</LoginMainTitle>
        <LoginButtonsContainer>
          <LoginButton style={{ marginBottom: 25 }}>
            <Icon name="logo-google" size={20} color="#4285F4" />
            <LoginButtonText>Continuar com o Google</LoginButtonText>
          </LoginButton>
          <LoginButton>
            <Icon name="logo-apple" size={20} color="#000" />
            <LoginButtonText>Continuar com a Apple</LoginButtonText>
          </LoginButton>
        </LoginButtonsContainer>
        <LoginOption>
          <LoginHairline />
          <LoginOptionText style={{ width: '20%', paddingHorizontal: 5 }}>
            ou
          </LoginOptionText>
          <LoginHairline />
        </LoginOption>
        <LoginForm>
          <LoginTextInput
            placeholder="Celular"
            placeholderTextColor={colors.darkGray}
            style={{ marginBottom: 15 }}
          />
          <LoginTextInput
            placeholder="Senha"
            placeholderTextColor={colors.darkGray}
            style={{ marginBottom: 30 }}
          />
          <LoginButton>
            <LoginButtonText>Avançar</LoginButtonText>
          </LoginButton>
        </LoginForm>
        <LoginNoAccount>
          <LoginText>
            Não tem uma conta? <LoginLink>Inscreva-se</LoginLink>
          </LoginText>
        </LoginNoAccount>
      </LoginMain>
    </LoginContainer>
  );
};
