import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ClothingAd } from '../../../../assets/clothes';
import { BookmarkButton, Card, CardImage, CardText } from '../styles';

export function ClothItem(props: {
  cloth: ClothingAd;
  isSquare: boolean;
  index: number;
}) {
  const imageUrl = require('../../../../assets/imagemBase.jpg');

  function checkIndexIsEven(n: number) {
    return n % 2 == 0 ? 'squareRight' : 'squareLeft';
  }

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <Card
      textStyle={props.isSquare ? checkIndexIsEven(props.index) : 'line'}
      style={!props.cloth.isInStock && { opacity: 0.5 }}
    >
      <CardImage
        source={imageUrl}
        textStyle={props.isSquare ? 'square' : 'line'}
      />
      <View>
        <CardText textStyle="title" numberOfLines={1}>
          {props.cloth.title}
        </CardText>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {props.cloth.isDiscounted && (
            <CardText textStyle="discount">
              R$ {props.cloth.originalValue.toFixed(2)}
            </CardText>
          )}
          <CardText textStyle="price">
            R$ {props.cloth.currentValue.toFixed(2)}
          </CardText>
        </View>
        <View>
          {props.cloth.isInStock ? (
            <CardText textStyle="stock">In Stock</CardText>
          ) : (
            <CardText textStyle="outStock">Out of Stock</CardText>
          )}
        </View>
        <BookmarkButton>
          <Icon.Button
            name="bookmark"
            backgroundColor={isBookmarked ? '#f15bb5' : '#aaa'}
            size={15}
            iconStyle={{
              marginRight: 0,
            }}
            onPress={() => setIsBookmarked(!isBookmarked)}
          ></Icon.Button>
        </BookmarkButton>
      </View>
    </Card>
  );
}
