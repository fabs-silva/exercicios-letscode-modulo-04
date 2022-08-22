import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { CartItem } from "./CartContext";

export const getMyObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@shopping_cart");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert("Error getting data");
  }
};

export const storeData = async (value: CartItem[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@shopping_cart", jsonValue);
  } catch (e) {
    Alert.alert("Error while saving purchase");
  }

  console.log(getMyObject());
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("@shopping_cart");
  } catch (e) {
    Alert.alert("Error while deleting data");
  }
};
