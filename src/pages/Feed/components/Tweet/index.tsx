import React from 'react';
import EIcon from 'react-native-vector-icons/EvilIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../variables';
import {
  TweetContainer,
  TweetIconButtons,
  TweetImage,
  TweetMessageContainer,
  TweetText,
  TweetTextContainer,
  TweetUser,
  TweetUserContainer,
} from './styles';

export const Tweet = () => {
  return (
    <TweetContainer>
      <TweetMessageContainer>
        <TweetImage source={require('../../../../assets/avatar.png')} />
        <TweetTextContainer>
          <TweetUserContainer>
            <TweetUser>UserName</TweetUser>
            <MCIcon
              name="dots-horizontal"
              size={20}
              color={colors.extraLightGray}
            />
          </TweetUserContainer>
          <TweetText>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
            commodo tempor.
          </TweetText>
        </TweetTextContainer>
      </TweetMessageContainer>
      <TweetIconButtons>
        <MCIcon
          name="comment-outline"
          size={25}
          color={colors.extraExtraLightGray}
        />
        <EIcon name="retweet" size={32} color={colors.extraExtraLightGray} />
        <MCIcon
          name="cards-heart-outline"
          size={25}
          color={colors.extraExtraLightGray}
        />
        <MCIcon
          name="tray-arrow-up"
          size={25}
          color={colors.extraExtraLightGray}
        />
      </TweetIconButtons>
    </TweetContainer>
  );
};
