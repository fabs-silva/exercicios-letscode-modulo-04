import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../variables';
import { Tweet } from './components/Tweet';
import { TweetUser } from './components/Tweet/styles';
import { TwitterForm } from './components/TwitterForm';
import {
  FeedContainer,
  FeedHeader,
  FeedMain,
  FeedTitle,
  TwitterFeed,
} from './styles';

export const Feed = ({ navigation }) => {
  return (
    <FeedContainer>
      <FeedHeader>
        <FeedTitle>Página Inicial</FeedTitle>
        <Icon
          name="star-four-points-outline"
          size={25}
          color={colors.extraExtraLightGray}
        />
      </FeedHeader>
      <FeedMain>
        <TwitterForm />
        <TwitterFeed>
          <Tweet />
          {/* <NoTweetFeed>No Tweet Available!</NoTweetFeed> */}
        </TwitterFeed>
        <TweetUser
          style={{ textAlign: 'center', fontSize: 16 }}
          onPress={() => navigation.navigate('Login')}
        >
          Sair
        </TweetUser>
      </FeedMain>
    </FeedContainer>
  );
};
