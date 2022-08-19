import React from 'react';
import { FlatList } from 'react-native';
import { productsList } from '../../assets/productsList';
import { RenderedProduct } from './RenderedProduct';
import {
  ProductListButton,
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../variables';

export const ProductsList = ({ navigation }) => {
  return (
    <ProductListContainer>
      <ProductListHeader>
        <ProductListTitle>
          Choco
          <Icon name="heart" size={28} color="#e43442" />
          Love
        </ProductListTitle>
        <ProductListButton onPress={() => navigation.navigate('cart')}>
          <Icon name="cart" size={23} color={colors.lightColor} />
        </ProductListButton>
      </ProductListHeader>
      <FlatList
        data={productsList}
        renderItem={({ item }) => <RenderedProduct item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </ProductListContainer>
  );
};
