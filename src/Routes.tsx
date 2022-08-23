import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Feed } from "./pages/Feed";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Feed}
          name="Feed"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
