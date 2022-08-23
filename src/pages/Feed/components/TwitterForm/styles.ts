import styled from 'styled-components/native';
import { colors } from '../../../../variables';

const FormContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom-color: ${colors.darkGray};
  border-bottom-width: 1px;
  margin-bottom: 20px;
`;

const FormInput = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
`;

const FormImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const FormTextInput = styled.TextInput`
  font-size: 20px;
  width: 77%;
  font-family: Roboto_400Regular;
  margin: 0 20px;
  color: ${colors.extraExtraLightGray};
  line-height: 25px;
`;

const FormButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FormIconButtons = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: flex-end;
`;

const FormTweetButton = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 25px;
  border-radius: 9999px;
`;

const FormTweetButtonText = styled.Text`
  font-size: 18px;
  font-family: Roboto_700Bold;
  color: ${colors.extraExtraLightGray};
`;

export {
  FormContainer,
  FormInput,
  FormImage,
  FormTextInput,
  FormButtons,
  FormIconButtons,
  FormTweetButton,
  FormTweetButtonText,
};
