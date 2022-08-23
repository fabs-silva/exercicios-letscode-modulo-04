import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AccountData } from '../../AccountContext';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { getObject } from '../../LocalStorage';
import { colors } from '../../variables';
import {
  LoginButtonsContainer,
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
} from './styles';

export const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localData, setLocalData] = useState({} as AccountData);

  const handleLogin = () => {
    getObject('@account').then((result) => setLocalData(result));

    if (username !== localData.username || password !== localData.password) {
      Alert.alert('Login ou senha inválidos!');
      return;
    }

    navigation.navigate('Feed');
  };

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
          <AppButton
            disabled
            buttonTitle="Continuar com o Google"
            style={{
              backgroundColor: colors.lightGray,
              marginBottom: 25,
            }}
            textStyle={{ color: colors.darkGray, marginLeft: 8 }}
          >
            <Icon name="logo-google" size={20} color={colors.darkGray} />
          </AppButton>
          <AppButton
            disabled
            buttonTitle="Continuar com a Apple"
            style={{
              backgroundColor: colors.lightGray,
              marginBottom: 10,
            }}
            textStyle={{ color: colors.darkGray, marginLeft: 8 }}
          >
            <Icon name="logo-apple" size={20} color={colors.darkGray} />
          </AppButton>
        </LoginButtonsContainer>
        <LoginOption>
          <LoginHairline />
          <LoginOptionText style={{ width: '20%', paddingHorizontal: 5 }}>
            ou
          </LoginOptionText>
          <LoginHairline />
        </LoginOption>
        <LoginForm>
          <AppInput
            placeholder="Nome de Usuário"
            maxLenght={15}
            value={username}
            onChangeText={setUsername}
          />
          <AppInput
            placeholder="Senha"
            mb={35}
            secureTextEntry
            maxLength={8}
            value={password}
            onChangeText={setPassword}
          />
          <AppButton
            buttonTitle="Entrar"
            style={{ backgroundColor: colors.extraExtraLightGray }}
            textStyle={{ color: colors.black }}
            onPress={handleLogin}
          />
          <LoginText
            style={{
              color: colors.darkGray,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            Esqueci minha senha
          </LoginText>
        </LoginForm>
        <LoginNoAccount>
          <LoginText>
            Não tem uma conta?{' '}
            <LoginLink onPress={() => navigation.navigate('SignUp')}>
              Inscreva-se
            </LoginLink>
          </LoginText>
        </LoginNoAccount>
      </LoginMain>
    </LoginContainer>
  );
};
