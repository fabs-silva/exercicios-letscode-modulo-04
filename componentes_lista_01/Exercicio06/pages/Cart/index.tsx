import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCart } from '../../CartContext';
import { storeData } from '../../LocalStorage';
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
  CartTotal,
  CartTotalText,
} from './styles';

export const Cart = ({ navigation }) => {
  const { setCartItems, getCartItems, getTotal } = useCart();

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>
          <Icon name="cart" size={28} color={colors.accentColor} /> Cart
        </CartTitle>
        <View style={{ flexDirection: 'row' }}>
          <CartButtonTop
            onPress={() => navigation.navigate('productsList')}
            style={{ marginRight: 8 }}
          >
            <Icon name="home" size={20} color={colors.lightColor} />
          </CartButtonTop>
          <CartButtonTop
            onPress={() => {
              setCartItems([]);
              Alert.alert('Cart is empty!');
            }}
          >
            <Icon name="cart-off" size={20} color={colors.lightColor} />
          </CartButtonTop>
        </View>
      </CartHeader>
      <CartProducts>
        <FlatList
          data={getCartItems()}
          renderItem={({ item }) => <RenderedItem item={item} />}
          numColumns={1}
        />
      </CartProducts>
      <CartTotal>
        <CartTotalText>
          Total: R$ {getTotal(getCartItems()).toFixed(2)}
        </CartTotalText>
      </CartTotal>
      <CartButton
        onPress={() => {
          if (getCartItems().length === 0) {
            Alert.alert('Empty cart!');
            return;
          }
          storeData(getCartItems());
          Alert.alert('Purchase successful!');
          setCartItems([]);
          navigation.navigate('productsList');
        }}
      >
        <CartButtonText>
          <Icon name="credit-card" size={25} color={colors.lightColor} />{' '}
          Purchase
        </CartButtonText>
      </CartButton>
    </CartContainer>
  );
};
