import styled from 'styled-components/native';
import { colors } from '../../../../variables';

const TweetContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom-color: ${colors.darkGray};
  border-bottom-width: 1px;
  margin-bottom: 20px;
`;

const TweetMessageContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
`;

const TweetImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

const TweetTextContainer = styled.View`
  width: 95%;
  padding: 0 20px;
`;

const TweetUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

const TweetUser = styled.Text`
  font-size: 18px;
  font-family: Roboto_700Bold;
  color: ${colors.extraExtraLightGray};
`;

const TweetText = styled.Text`
  font-size: 17px;
  font-family: Roboto_400Regular;
  color: ${colors.extraExtraLightGray};
  line-height: 23px;
`;

const TweetIconButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export {
  TweetContainer,
  TweetMessageContainer,
  TweetImage,
  TweetText,
  TweetTextContainer,
  TweetUser,
  TweetUserContainer,
  TweetIconButtons,
};
