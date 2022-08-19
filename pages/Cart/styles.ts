import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const CartContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  background-color: ${colors.lightColor};
  justify-content: space-between;
`;

const CartTitle = styled.Text`
  width: 90%;
  font-size: 25px;
  color: ${colors.accentColor};
  font-family: Jost_700Bold;
`;

const CartProducts = styled.View`
  width: 100%;
  padding: 10px;
`;

const CartButton = styled.TouchableOpacity`
  background-color: ${colors.accentColor};
  width: 100%;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
`;

const CartButtonText = styled.Text`
  color: ${colors.lightColor};
  font-size: 20px;
  font-family: Jost_700Bold;
`;

const CartHeader = styled.View`
  width: 100%;
  background-color: ${colors.bgColor};
  padding: 0 15px 25px 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const CartButtonTop = styled.TouchableOpacity`
  background-color: ${colors.accentColor};
  border-radius: 5px;
  padding: 8px;
`;

export {
  CartContainer,
  CartTitle,
  CartProducts,
  CartButton,
  CartButtonText,
  CartHeader,
  CartButtonTop,
};
