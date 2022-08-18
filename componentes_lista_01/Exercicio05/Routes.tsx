import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ConcertList } from './pages/ConcertList';
import { ConcertPage } from './pages/ConcertPage';
import Purchase from './pages/Purchase';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="concerts">
        <Stack.Screen
          name="concerts"
          component={ConcertList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="concertPage"
          component={ConcertPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="purchase"
          component={Purchase}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
