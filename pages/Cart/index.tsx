import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { productsList } from '../../assets/productsList';
import { colors } from '../../variables';
import { RenderedItem } from './RenderedItem';
import {
  CartButton,
  CartButtonText,
  CartButtonTop,
  CartContainer,
  CartHeader,
  CartProducts,
  CartTitle,
} from './styles';

export const Cart = ({ navigation }) => {
  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>
          <Icon name="cart" size={28} color={colors.accentColor} /> Cart
        </CartTitle>
        <CartButtonTop onPress={() => navigation.navigate('productsList')}>
          <Icon name="home" size={20} color={colors.lightColor} />
        </CartButtonTop>
      </CartHeader>
      <CartProducts>
        <FlatList
          data={productsList}
          renderItem={({ item }) => <RenderedItem item={item} />}
          numColumns={1}
        />
      </CartProducts>
      <CartButton>
        <CartButtonText>
          <Icon name="card" size={25} color={colors.lightColor} /> Purchase
        </CartButtonText>
      </CartButton>
    </CartContainer>
  );
};
