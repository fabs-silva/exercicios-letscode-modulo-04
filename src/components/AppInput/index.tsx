import React, { useState } from "react";
import { colors } from "../../variables";
import { AppTextInput } from "./styles";

export const AppInput = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <AppTextInput
      placeholder={props.placeholder}
      placeholderTextColor={colors.darkGray}
      selectionColor={colors.blue}
      style={[isFocused && { borderWidth: 2, borderColor: colors.blue }]}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
    />
  );
};
