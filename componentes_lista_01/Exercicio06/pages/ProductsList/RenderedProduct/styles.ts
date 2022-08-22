import styled from 'styled-components/native';
import { colors } from '../../../variables';

const ProductCard = styled.View`
  width: 47%;
  min-height: 200px;
  background-color: ${colors.lightColor};
  border-radius: 5px;
  margin-bottom: 25px;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 90px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ProductInfo = styled.View`
  padding: 15px 8px;
  justify-content: space-between;
  height: 110px;
`;

const ProductTitle = styled.Text`
  font-family: Jost_700Bold;
  font-size: 17px;
`;

const ProductText = styled.Text`
  font-size: 14px;
  font-family: Jost_400Regular;
`;

const ProductFlag = styled.Text`
  font-size: 17px;
`;

const ProductPriceBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  padding: 3px 0;
  font-family: Jost_700Bold;
`;

const ProductQuantityBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProductQuantity = styled.TextInput`
  border-color: ${colors.baseColor};
  border-radius: 5px;
  border-width: 2px;
  margin-left: 5px;
  width: 40px;
  padding: 0 5px;
  font-size: 12px;
`;

const ProductButton = styled.TouchableOpacity`
  background-color: ${colors.accentColor};
  width: 100%;
  padding: 12px 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ProductButtonText = styled.Text`
  color: ${colors.lightColor};
  font-size: 15px;
  font-family: Jost_700Bold;
`;

export {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductText,
  ProductFlag,
  ProductPriceBox,
  ProductPrice,
  ProductQuantityBox,
  ProductQuantity,
  ProductButton,
  ProductButtonText,
};
