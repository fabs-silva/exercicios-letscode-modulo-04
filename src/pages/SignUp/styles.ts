import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../variables";

const windowWidth: number = Dimensions.get("window").width;
const windowHeight: number = Dimensions.get("window").height;

const SignUpContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: space-between;
  background-color: ${colors.black};
  padding: 35px 25px;
`;

const SignUpForm = styled.View`
  justify-content: flex-start;
`;

const SignUpTitle = styled.Text`
  font-size: 28px;
  color: ${colors.extraExtraLightGray};
  font-family: Roboto_700Bold;
  margin-bottom: 25px;
`;

const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.blue};
  border-radius: 9999px;
`;

const SignUpButtonText = styled.Text`
  font-family: Roboto_700Bold;
  text-align: center;
  padding: 15px 0;
  font-size: 17px;
`;

export {
  SignUpContainer,
  SignUpTitle,
  SignUpButton,
  SignUpButtonText,
  SignUpForm,
};
