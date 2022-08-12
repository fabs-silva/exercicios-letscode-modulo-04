import { useFonts } from 'expo-font';
import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ConcertList } from './pages/ConcertList';
import Loading from './pages/Loading';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

export default function App() {
  const [loaded] = useFonts({
    RubikDirt: require('./assets/fonts/RubikDirt-Regular.ttf'),
    NunitoSans: require('./assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSansBold: require('./assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!loaded) return <Loading />;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#073b4c" />
        <ConcertList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#073b4c',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
