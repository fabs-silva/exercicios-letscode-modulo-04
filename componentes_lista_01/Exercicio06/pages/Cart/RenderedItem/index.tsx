import React, { useState } from 'react';
import { productsList } from '../../../assets/productsList';
import {
  ProductButton,
  ProductButtonsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductPriceBox,
  ProductQuantity,
  ProductQuantityBox,
  ProductText,
  ProductTitle,
} from './styles';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartItem, useCart } from '../../../CartContext';

export const RenderedItem = (props: { item: CartItem }) => {
  const { updateAmount, removeFromCart } = useCart();
  const [qtd, onChangeQtd] = useState<string>('');
  const cartItem = productsList.find((prd) => prd.id === props.item.id);

  return (
    <ProductCard>
      <ProductImage source={cartItem?.image} resizeMode="contain" />
      <ProductInfo>
        <ProductTitle numberOfLines={1}>{cartItem?.name}</ProductTitle>
        <ProductPriceBox>
          <View>
            <ProductText>
              R$ {cartItem?.price.toFixed(2)} /{' '}
              <ProductPrice>{props.item?.amount}</ProductPrice> un
            </ProductText>
            <ProductPrice>
              Total: R$ {(cartItem?.price * props.item?.amount).toFixed(2)}
            </ProductPrice>
          </View>
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
      <ProductButtonsContainer>
        <ProductButton
          onPress={() => {
            updateAmount(props.item.id, parseFloat(qtd));
            onChangeQtd('');
          }}
        >
          <Icon name="cart-plus" size={25} color="#fff" />
        </ProductButton>
        <ProductButton
          bgColor={' #c93e32'}
          onPress={() => removeFromCart(props.item.id)}
        >
          <Icon name="cart-remove" size={25} color="#fff" />
        </ProductButton>
      </ProductButtonsContainer>
    </ProductCard>
  );
};
