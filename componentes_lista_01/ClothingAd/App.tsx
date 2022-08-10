import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { ClothingAdApp } from './pages/ClothingAd';
import Header from './pages/ClothingAd/components/Header';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

export default function App() {
  const [isSquare, setIsSquare] = useState<boolean>(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.changeLayout}>
          {isSquare ? (
            <Icon.Button
              name="list"
              backgroundColor="#aaa"
              iconStyle={{
                marginRight: 0,
              }}
              onPress={() => setIsSquare(false)}
            ></Icon.Button>
          ) : (
            <Icon.Button
              name="grid"
              backgroundColor="#aaa"
              iconStyle={{ marginRight: 0 }}
              onPress={() => setIsSquare(true)}
            ></Icon.Button>
          )}
        </View>
        <ClothingAdApp isSquare={isSquare} />
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
  changeLayout: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
});
