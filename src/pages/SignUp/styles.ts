import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const SignUpContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: space-between;
  background-color: ${colors.black};
  padding: 35px 25px;
`;

const SignUpHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const SignUpForm = styled.View`
  justify-content: flex-start;
`;

const SignUpTitle = styled.Text`
  font-size: 28px;
  color: ${colors.extraExtraLightGray};
  font-family: Roboto_700Bold;
`;

const SignUpLink = styled.Text`
  margin-top: 20px;
  color: ${colors.extraExtraLightGray};
  text-align: center;
  font-family: Roboto_700Bold;
`;

export { SignUpContainer, SignUpTitle, SignUpForm, SignUpHeader, SignUpLink };
