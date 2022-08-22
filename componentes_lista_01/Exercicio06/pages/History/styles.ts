import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const PurchaseContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  background-color: ${colors.lightColor};
  justify-content: space-between;
`;

const PurchaseHeader = styled.View`
  width: 100%;
  background-color: ${colors.bgColor};
  padding: 15px 15px 25px 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const PurchaseTitle = styled.Text`
  width: 90%;
  font-size: 25px;
  color: ${colors.accentColor};
  font-family: Jost_700Bold;
`;

const PurchaseButtonTop = styled.TouchableOpacity`
  background-color: ${colors.accentColor};
  border-radius: 5px;
  padding: 8px;
`;

const PurchaseProducts = styled.View`
  width: 100%;
  height: 90%;
  padding: 10px;
`;

const PurchaseListHeader = styled.View`
  width: 100%;
  background-color: ${colors.baseColor};
  padding: 10px 10px 15px 10px;
  justify-content: center;
`;

const PurchaseListHeaderText = styled.Text`
  font-size: 17px;
  color: ${colors.lightColor};
  font-family: Jost_700Bold;
`;

export {
  PurchaseContainer,
  PurchaseTitle,
  PurchaseProducts,
  PurchaseListHeader,
  PurchaseListHeaderText,
  PurchaseHeader,
  PurchaseButtonTop,
};
