import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Loading() {
  const loadingAnimation = React.useRef<LottieView>();
  return (
    <View style={styles.loader}>
      <LottieView
        ref={loadingAnimation}
        loop={true}
        source={require('../../assets/lottie/97930-loading.json')}
      />
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
