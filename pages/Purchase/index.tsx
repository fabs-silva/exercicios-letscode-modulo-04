import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Purchase() {
  return (
    <View style={styles.loader}>
      <Text>Purchase</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
