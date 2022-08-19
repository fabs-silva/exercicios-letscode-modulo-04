import {
  Jost_400Regular,
  Jost_700Bold,
  useFonts,
} from '@expo-google-fonts/jost';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './Routes';
import { colors } from './variables';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.bgColor} />
      <Routes />
    </SafeAreaView>
  );
}
