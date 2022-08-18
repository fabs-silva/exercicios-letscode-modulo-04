import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ticketsInfo } from '../../assets/ticketInfo';
import { ConcertCard } from '../ConcertCard';

export function ConcertList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ticketsInfo}
        renderItem={(item) => <ConcertCard item={item.item} />}
        keyExtractor={({ id }) => id.toString()}
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
    paddingVertical: 20,
  },

  title: {
    color: '#117864',
    fontFamily: 'Jost_700Bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
});
