import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ticketsInfo } from '../../assets/ticketInfo';
import { ConcertCard } from '../ConcertCard';

export function ConcertList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ticketsInfo}
        renderItem={ConcertCard}
        keyExtractor={({ bandName }) => bandName}
        ListHeaderComponent={() => {
          return <Text style={styles.title}>Concerts List</Text>;
        }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'RubikDirt',
    marginBottom: 10,
  },
});
