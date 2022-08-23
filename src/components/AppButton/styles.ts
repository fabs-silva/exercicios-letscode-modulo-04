import styled from 'styled-components/native';

const AppButtonContainer = styled.TouchableOpacity`
  border-radius: 9999px;
  flex-direction: row;
  padding: 15px 0;
  justify-content: center;
`;

const AppButtonText = styled.Text`
  margin-left: 8px;
  font-family: Roboto_700Bold;
  font-size: 16px;
`;

export { AppButtonContainer, AppButtonText };
