import React, { useState } from 'react';
import { Product } from '../../../assets/productsList';
import {
  ProductButton,
  ProductButtonText,
  ProductCard,
  ProductFlag,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductPriceBox,
  ProductQuantity,
  ProductQuantityBox,
  ProductText,
  ProductTitle,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../variables';

export const RenderedProduct = (props: { item: Product }) => {
  const [qtd, onChangeQtd] = useState<string>('');
  return (
    <ProductCard>
      <ProductImage source={props.item.image} resizeMode="contain" />
      <ProductInfo>
        <ProductTitle numberOfLines={1}>{props.item.name}</ProductTitle>
        <ProductText>
          Country: <ProductFlag>{props.item.country}</ProductFlag>
        </ProductText>
        <ProductPriceBox>
          <ProductPrice>R$ {props.item.price.toFixed(2)}</ProductPrice>
          <ProductQuantityBox>
            <ProductText>Qtd:</ProductText>
            <ProductQuantity
              onChangeText={onChangeQtd}
              value={qtd}
              keyboardType="numeric"
              maxLength={2}
            />
          </ProductQuantityBox>
        </ProductPriceBox>
      </ProductInfo>
      <ProductButton>
        <ProductButtonText>
          <Icon name="cart" size={20} color={colors.lightColor} /> Add To Cart
        </ProductButtonText>
      </ProductButton>
    </ProductCard>
  );
};
