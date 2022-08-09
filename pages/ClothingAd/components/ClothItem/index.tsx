import React from 'react';
import { View } from 'react-native';
import { ClothingAd } from '../../../../assets/clothes';
import { CardImage, CardSquare, CardText } from '../styles';

export function ClothItem(props: { cloth: ClothingAd; index: number }) {
  const imageUrl = require('../../../../assets/imagemBase.jpg');

  function checkIndexIsEven(n: number) {
    return n % 2 == 0;
  }

  return (
    <CardSquare textStyle={checkIndexIsEven(props.index) ? 'right' : 'left'}>
      <CardImage source={imageUrl} />
      <View>
        <CardText textStyle="title" numberOfLines={1}>
          {props.cloth.title}
        </CardText>
        <View>
          <CardText textStyle="price">
            R$ {props.cloth.currentValue.toFixed(2)}
          </CardText>
          {props.cloth.isDiscounted && (
            <CardText textStyle="discount">
              Original Price: R$ {props.cloth.originalValue.toFixed(2)}
            </CardText>
          )}
        </View>
        <View>
          {props.cloth.isInStock ? (
            <CardText textStyle="stock">In Stock</CardText>
          ) : (
            <CardText textStyle="outStock">Out of Stock</CardText>
          )}
        </View>
      </View>
    </CardSquare>
  );
}
