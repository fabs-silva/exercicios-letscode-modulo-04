import styled from 'styled-components/native';
import { colors } from '../../../variables';

const PurchaseCard = styled.View`
  width: 100%;
  background-color: ${colors.lightColor};
  border-radius: 5px;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const PurchaseImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 5px;
`;

const PurchaseInfo = styled.View`
  width: 85%;
  padding: 12px 8px;
  justify-content: space-between;
`;

const PurchaseTitle = styled.Text`
  font-family: Jost_700Bold;
  font-size: 17px;
  margin-bottom: 5px;
`;

const PurchaseText = styled.Text`
  font-size: 14px;
  font-family: Jost_400Regular;
  margin-bottom: 3px;
`;

const PurchasePriceBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PurchasePrice = styled.Text`
  font-size: 14px;
  padding: 3px 0;
  font-family: Jost_700Bold;
`;

export {
  PurchaseCard,
  PurchaseImage,
  PurchaseTitle,
  PurchaseInfo,
  PurchaseText,
  PurchasePriceBox,
  PurchasePrice,
};
