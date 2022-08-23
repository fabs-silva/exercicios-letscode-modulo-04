import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { AccountData } from './AccountContext';

export const getObject = async (objKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(objKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error getting data');
  }
};

export const storeAccountData = async (value: AccountData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@account', jsonValue);
  } catch (e) {
    Alert.alert('Error while saving data');
  }
};

export const storeTweets = async (tweet: any) => {
  try {
    const object = await getObject('@tweets');
    const jsonValue = object
      ? JSON.stringify([...object, tweet])
      : JSON.stringify([tweet]);
    await AsyncStorage.setItem('@tweets', jsonValue);
  } catch (e) {
    Alert.alert('Error while saving tweet');
  }
};

export const removeValue = async (objKey: string) => {
  try {
    await AsyncStorage.removeItem(objKey);
  } catch (e) {
    Alert.alert('Error while deleting data');
  }
};
