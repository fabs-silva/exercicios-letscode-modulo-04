import React from 'react';
import {
  AppHeader,
  AppLogoContainer,
  AppLogoText,
  LoginButton,
  LoginButtonText,
} from './styles';

function Header() {
  return (
    <AppHeader>
      <AppLogoContainer>
        <AppLogoText textStyle="titleGray">Swap</AppLogoText>
        <AppLogoText textStyle="titleGreen">Vest</AppLogoText>
      </AppLogoContainer>
      <LoginButton>
        <LoginButtonText>Fazer Login</LoginButtonText>
      </LoginButton>
    </AppHeader>
  );
}

export default Header;
