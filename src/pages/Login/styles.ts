import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const LoginContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  padding: 0 10px;
`;

const LoginHeader = styled.View``;

const LoginMain = styled.View`
  width: 100%;
  height: 90%;
  justify-content: center;
  padding: 0 40px;
`;

const LoginMainTitle = styled.Text`
  font-size: 25px;
  text-align: left;
  color: ${colors.extraExtraLightGray};
  font-family: Roboto_700Bold;
  margin-bottom: 30px;
`;

const LoginButtonsContainer = styled.View``;

const LoginButton = styled.TouchableOpacity`
  background-color: ${colors.extraExtraLightGray};
  border-radius: 9999px;
  flex-direction: row;
  padding: 10px 0;
  justify-content: center;
`;

const LoginButtonText = styled.Text`
  margin-left: 8px;
  font-family: Roboto_700Bold;
  font-size: 16px;
  color: ${colors.darkGray};
`;

const LoginHairline = styled.View`
  width: 40%;
  border-bottom-color: ${colors.lightGray};
  border-bottom-width: 1px;
`;

const LoginOption = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const LoginOptionText = styled.Text`
  color: ${colors.extraExtraLightGray};
  text-align: center;
  font-size: 20px;
  font-family: Roboto_400Regular;
`;

const LoginForm = styled.View`
  margin-bottom: 40px;
`;

const LoginTextInput = styled.TextInput`
  padding: 5px 15px;
  border: 1px solid ${colors.darkGray};
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-family: Roboto_700Bold;
`;

const LoginNoAccount = styled.View``;

const LoginText = styled.Text`
  color: ${colors.lightGray};
  font-family: Roboto_400Regular;
`;

export {
  LoginContainer,
  LoginHeader,
  LoginMain,
  LoginMainTitle,
  LoginButtonsContainer,
  LoginButton,
  LoginButtonText,
  LoginOption,
  LoginOptionText,
  LoginForm,
  LoginTextInput,
  LoginLink,
  LoginNoAccount,
  LoginText,
  LoginHairline,
};
