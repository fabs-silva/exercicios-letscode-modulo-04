import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../variables";

export const AppTextInput = styled.TextInput`
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
  padding: 15px 5px;
  font-family: Roboto_400Regular;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${colors.lightGray};
`;
