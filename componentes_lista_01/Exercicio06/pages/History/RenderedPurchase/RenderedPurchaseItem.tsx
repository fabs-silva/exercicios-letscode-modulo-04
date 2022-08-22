import React from 'react';
import {
  PurchaseCard,
  PurchaseImage,
  PurchaseInfo,
  PurchasePrice,
  PurchasePriceBox,
  PurchaseText,
  PurchaseTitle,
} from './styles';

import { productsList } from '../../../assets/productsList';
import { CartItem } from '../../../CartContext';

export const RenderedPurchaseItem = (props: { item: CartItem }) => {
  const cartItem = productsList.find((prd) => prd.id === props.item.id);

  return (
    <PurchaseCard>
      <PurchaseImage source={cartItem?.image} resizeMode="contain" />
      <PurchaseInfo>
        <PurchaseTitle numberOfLines={1}>{cartItem?.name}</PurchaseTitle>
        <PurchasePriceBox>
          <PurchaseText>
            R$ {cartItem?.price.toFixed(2)} /{' '}
            <PurchasePrice>{props.item?.amount}</PurchasePrice> un
          </PurchaseText>
          <PurchasePrice>
            Total: R$ {(cartItem?.price * props.item?.amount).toFixed(2)}
          </PurchasePrice>
        </PurchasePriceBox>
      </PurchaseInfo>
    </PurchaseCard>
  );
};
