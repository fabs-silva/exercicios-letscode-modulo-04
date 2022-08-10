import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { ticketsInfo } from './assets/ticketInfo';
import { ConcertCard } from './pages/ConcertCard';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ConcertCard ticketInfo={ticketsInfo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
