import React from 'react';
import { AppButtonContainer, AppButtonText } from './styles';

export const AppButton = ({ ...props }) => {
  return (
    <AppButtonContainer
      style={props.style}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
      <AppButtonText style={props.textStyle}>{props.buttonTitle}</AppButtonText>
    </AppButtonContainer>
  );
};
