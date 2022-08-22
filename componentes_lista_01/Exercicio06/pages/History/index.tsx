import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartItem } from '../../CartContext';
import { getMyObject } from '../../LocalStorage';
import { colors } from '../../variables';
import { RenderedPurchase } from './RenderedPurchase';
import {
  PurchaseButtonTop,
  PurchaseContainer,
  PurchaseHeader,
  PurchaseProducts,
  PurchaseTitle,
} from './styles';

export const PurchaseHistory = ({ navigation }) => {
  const [purchaseList, setPurchaseList] = useState<CartItem[][]>(
    [] as CartItem[][]
  );
  useEffect(() => {
    getMyObject().then((result) => {
      console.log(result);
      setPurchaseList(result);
    });
  }, []);

  return (
    <PurchaseContainer>
      <PurchaseHeader>
        <PurchaseTitle>
          <Icon name="history" size={28} color={colors.accentColor} /> Purchases
        </PurchaseTitle>
        <PurchaseButtonTop onPress={() => navigation.navigate('productsList')}>
          <Icon name="home" size={20} color={colors.lightColor} />
        </PurchaseButtonTop>
      </PurchaseHeader>
      <PurchaseProducts>
        <FlatList
          data={purchaseList}
          renderItem={({ item, index }) => (
            <RenderedPurchase cartKey={index} purchaseList={item} />
          )}
          numColumns={1}
        />
      </PurchaseProducts>
    </PurchaseContainer>
  );
};
