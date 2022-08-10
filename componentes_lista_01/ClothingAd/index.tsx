import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { clothes, clothesType, ClothingAd } from '../../assets/clothes';
import { ClothItem } from './components/ClothItem';

export function ClothingAdApp(props: { isSquare: boolean }) {
  const filteredList = (clothesList: ClothingAd[], clothType: string) => {
    return clothesList.filter((cloth) => cloth.type === clothType);
  };

  const [selectedType, setSelectedType] = useState<string>('tshirt');

  const list = filteredList(clothes, selectedType);

  return (
    <>
      <RNPickerSelect
        value={selectedType}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
        items={clothesType}
      ></RNPickerSelect>
      <ScrollView>
        <View style={styles.clothesContainer}>
          {list.map((cloth: ClothingAd, i: number) => {
            return (
              <ClothItem
                cloth={cloth}
                key={i}
                index={i}
                isSquare={props.isSquare}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
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
