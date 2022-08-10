import styled from 'styled-components/native';
import { TextStyleProps, variant } from 'styled-system';

const AppHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const AppLogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AppLogoText = styled.Text<TextStyleProps>`
  font-size: 25px;
  font-weight: 700;

  ${variant({
    prop: 'textStyle',
    variants: {
      titleGray: {
        color: '#333',
      },
      titleGreen: {
        color: '#00f5d4',
      },
    },
  })};
`;

const LoginButton = styled.TouchableHighlight`
  background-color: #039380;
  padding: 10px;
  border-radius: 5px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-weight: 500;
`;

export {
  AppHeader,
  AppLogoContainer,
  AppLogoText,
  LoginButton,
  LoginButtonText,
};
