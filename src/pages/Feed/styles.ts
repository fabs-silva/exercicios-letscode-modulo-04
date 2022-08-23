import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const FeedContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  padding: 0 10px;
`;

const FeedHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const FeedTitle = styled.Text`
  font-size: 25px;
  text-align: left;
  color: ${colors.extraExtraLightGray};
  font-family: Roboto_700Bold;
`;

const FeedMain = styled.View`
  width: 100%;
  height: 94%;
  align-content: flex-start;
`;

const TwitterFeed = styled.View``;

const NoTweetFeed = styled.Text`
  font-size: 20px;
  font-family: Roboto_700Bold;
  text-align: center;
  color: ${colors.extraExtraLightGray};
`;

export {
  FeedContainer,
  FeedHeader,
  FeedTitle,
  FeedMain,
  NoTweetFeed,
  TwitterFeed,
};
