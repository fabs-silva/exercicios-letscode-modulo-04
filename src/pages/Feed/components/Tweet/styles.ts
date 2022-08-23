import styled from 'styled-components/native';
import { colors } from '../../../../variables';

const TweetContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom-color: ${colors.lightGray};
  border-bottom-width: 1px;
  margin-bottom: 20px;
`;

const TweetInput = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
`;

const TweetImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const TweetTextInput = styled.TextInput`
  font-size: 20px;
  width: 77%;
  font-family: Roboto_400Regular;
  margin: 0 20px;
  color: ${colors.extraExtraLightGray};
  line-height: 25px;
`;

const TweetIconButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export {
  TweetContainer,
  TweetInput,
  TweetImage,
  TweetTextInput,
  TweetIconButtons,
};
