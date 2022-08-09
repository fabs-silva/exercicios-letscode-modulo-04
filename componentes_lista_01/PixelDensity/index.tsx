import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { PixelRatio, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { TextStyleProps, variant } from 'styled-system';

const CustomTypography = styled.Text<TextStyleProps>`
  text-align: center;

  ${variant({
    prop: 'textStyle',
    variants: {
      title: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto Mono',
        fontWeight: '600',
        padding: 20,
      },
      text: {
        color: '#555',
        fontSize: 18,
        fontFamily: 'Raleway',
        fontWeight: '400',
      },
    },
  })};
`;

export function PixelDensity() {
  const [loaded] = useFonts({
    Raleway: require('../../assets/fonts/RalewayRegular.ttf'),
    'Roboto Mono': require('../../assets/fonts/RobotoMonoSemiBold.ttf'),
  });

  const pixelRatio = PixelRatio.get();

  const [message, setMessage] = useState<string>('');

  const messagePixel = (pixelRatio: number) => {
    if (pixelRatio < 2) {
      setMessage(`densidade de pixels baixa - ${pixelRatio}`);
      return;
    }

    if (pixelRatio >= 2 && pixelRatio <= 3) {
      setMessage(`densidade de pixels média - ${pixelRatio}`);
      return;
    }

    setMessage(`densidade de pixels alta - ${pixelRatio}`);
    return;
  };

  useEffect(() => {
    messagePixel(pixelRatio);
  }, []);

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <CustomTypography textStyle="title">
        Densidade de pixel deste dispositivo
      </CustomTypography>
      <CustomTypography textStyle="text">resultado: {message}</CustomTypography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* type CustomTypography = {
  font: 'Roboto Mono' | 'Raleway';
  weight: 'light' | 'regular' | 'semibold' | 'bold';
};

const CustomTypography = styled.Text<CustomTypography>`
  font-family: ${(props) => props.font};
  font-weight: ${(props) => {
    if (props.weight === 'light') {
      return '300';
    }
    if (props.weight === 'regular') {
      return '400';
    }
    if (props.weight === 'semibold') {
      return '600';
    }
    if (props.weight === 'bold') {
      return '700';
    }
  }};
`; */
