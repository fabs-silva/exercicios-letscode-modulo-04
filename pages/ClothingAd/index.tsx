import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { clothes, ClothingAd } from '../../assets/clothes';
import { ClothItem } from './components/ClothItem';

export function ClothingAdApp() {
  const [colorHex, setColorHex] = useState<string>('');

  return (
    <ScrollView>
      <View style={styles.clothesContainer}>
        {clothes.map((cloth: ClothingAd, i: number) => {
          return <ClothItem cloth={cloth} key={i} index={i} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clothesContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
