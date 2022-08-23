import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AccountData } from '../../AccountContext';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { storeAccountData } from '../../LocalStorage';
import { colors } from '../../variables';
import {
  SignUpContainer,
  SignUpForm,
  SignUpHeader,
  SignUpLink,
  SignUpTitle,
} from './styles';

export const SignUp = ({ navigation }) => {
  const [account, setAccount] = useState({
    name: '',
    phone: '',
    username: '',
    password: '',
  } as AccountData);

  const handleChange = (property: string, inputText: string) => {
    setAccount({ ...account, [property]: inputText });
  };

  return (
    <SignUpContainer>
      <SignUpForm>
        <SignUpHeader>
          <SignUpTitle>Criar sua conta</SignUpTitle>
          <Icon
            name="logo-twitter"
            size={27}
            color={colors.extraExtraLightGray}
          />
        </SignUpHeader>
        <View>
          <AppInput
            placeholder="Nome"
            value={account.name}
            onChangeText={(text: string) => handleChange('name', text)}
          />
          <AppInput
            placeholder="Celular (com DDD)"
            keyboardType="phone-pad"
            maxLength={11}
            value={account.phone}
            onChangeText={(text: string) => handleChange('phone', text)}
          />
          <AppInput
            name="username"
            placeholder="Nome de Usuário (15 dígitos)"
            maxLength={15}
            value={account.username}
            onChangeText={(text: string) => handleChange('username', text)}
          />
          <AppInput
            name="password"
            placeholder="Senha (8 dígitos)"
            secureTextEntry
            maxLength={8}
            value={account.password}
            onChangeText={(text: string) => handleChange('password', text)}
          />
        </View>
      </SignUpForm>
      <View>
        <AppButton
          buttonTitle="Cadastrar"
          style={{ backgroundColor: colors.blue }}
          textStyle={{ color: colors.extraExtraLightGray }}
          onPress={() => {
            storeAccountData(account);
            Alert.alert('Conta criada com sucesso!');
            setTimeout(() => {
              navigation.navigate('Login');
            }, 1000);
          }}
        />
        <SignUpLink onPress={() => navigation.navigate('Login')}>
          Voltar para o login
        </SignUpLink>
      </View>
    </SignUpContainer>
  );
};
