import React from 'react';
import { FlatList } from 'react-native';
import { CartItem, useCart } from '../../../CartContext';
import { PurchaseListHeader, PurchaseListHeaderText } from '../styles';
import { RenderedPurchaseItem } from './RenderedPurchaseItem';

export const RenderedPurchase = (props: {
  cartKey: number;
  purchaseList: CartItem[];
}) => {
  const { getTotal } = useCart();
  return (
    <FlatList
      data={props.purchaseList}
      style={{ marginBottom: 15 }}
      renderItem={({ item }) => <RenderedPurchaseItem item={item} />}
      numColumns={1}
      ListHeaderComponent={() => {
        return (
          <PurchaseListHeader>
            <PurchaseListHeaderText>
              Purchase #{props.cartKey + 1}
            </PurchaseListHeaderText>
          </PurchaseListHeader>
        );
      }}
      ListFooterComponent={() => {
        return (
          <PurchaseListHeader>
            <PurchaseListHeaderText>
              Total: R$ {getTotal(props.purchaseList).toFixed(2)}
            </PurchaseListHeaderText>
          </PurchaseListHeader>
        );
      }}
    />
  );
};
