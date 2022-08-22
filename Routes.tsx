import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Cart } from "./pages/Cart";
import { PurchaseHistory } from "./pages/History";
import { ProductsList } from "./pages/ProductsList";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="productsList">
        <Stack.Screen
          component={ProductsList}
          name="productsList"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Cart}
          name="cart"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={PurchaseHistory}
          name="history"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
