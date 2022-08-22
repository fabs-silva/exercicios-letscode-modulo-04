import React from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../../CartContext";
import { colors } from "../../variables";
import {
  CartButtonTop,
  CartContainer,
  CartHeader,
  CartProducts,
  CartTitle,
} from "./styles";

export const PurchaseHistory = ({ navigation }) => {
  const { setCartItems, getCartItems, getTotal } = useCart();
  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>
          <Icon name="history" size={28} color={colors.accentColor} /> Purchases
        </CartTitle>
        <CartButtonTop onPress={() => navigation.navigate("productsList")}>
          <Icon name="home" size={20} color={colors.lightColor} />
        </CartButtonTop>
      </CartHeader>
      <CartProducts>
        <FlatList
          data={getCartItems()}
          renderItem={({ item }) => <Text>{item.id}</Text>}
          numColumns={1}
        />
      </CartProducts>
    </CartContainer>
  );
};
