import React from 'react';
import EIcon from 'react-native-vector-icons/EvilIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../variables';
import {
  TweetContainer,
  TweetIconButtons,
  TweetImage,
  TweetInput,
  TweetTextInput,
} from './styles';

export const Tweet = () => {
  return (
    <TweetContainer>
      <TweetInput>
        <TweetImage source={require('../../../../assets/avatar.png')} />
        <TweetTextInput
          placeholder="O que está acontecendo?"
          placeholderTextColor={colors.darkGray}
          multiline
          maxLength={140}
          numberOfLines={3}
          scrollEnabled
          textAlignVertical="top"
          selectionColor={colors.blue}
          blurOnSubmit
        />
      </TweetInput>
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
          name="tray-arrow-down"
          size={25}
          color={colors.extraExtraLightGray}
        />
      </TweetIconButtons>
    </TweetContainer>
  );
};
