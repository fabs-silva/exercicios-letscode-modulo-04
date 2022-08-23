import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../variables';
import {
  FormButtons,
  FormContainer,
  FormIconButtons,
  FormImage,
  FormInput,
  FormTextInput,
  FormTweetButton,
  FormTweetButtonText,
} from './styles';

export const TwitterForm = () => {
  return (
    <FormContainer>
      <FormInput>
        <FormImage source={require('../../../../assets/avatar.png')} />
        <FormTextInput
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
      </FormInput>
      <FormButtons>
        <FormIconButtons>
          <Icon
            style={{ marginRight: 15 }}
            name="image-outline"
            size={28}
            color={colors.blue}
          />
          <Icon
            style={{ marginRight: 15 }}
            name="file-gif-box"
            size={28}
            color={colors.blue}
          />
          <Icon
            style={{ marginRight: 15 }}
            name="emoticon-happy-outline"
            size={28}
            color={colors.blue}
          />
          <Icon name="map-marker-outline" size={28} color={colors.blue} />
        </FormIconButtons>
        <FormTweetButton>
          <FormTweetButtonText>Tweetar</FormTweetButtonText>
        </FormTweetButton>
      </FormButtons>
    </FormContainer>
  );
};
