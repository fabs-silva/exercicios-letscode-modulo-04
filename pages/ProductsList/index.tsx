import React from 'react';
import { FlatList } from 'react-native';
import { productsList } from '../../assets/productsList';
import { RenderedProduct } from './RenderedProduct';
import { ProductListContainer } from './styles';

export const ProductsList = () => {
  return (
    <ProductListContainer>
      <FlatList
        data={productsList}
        renderItem={({ item }) => <RenderedProduct item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </ProductListContainer>
  );
};
