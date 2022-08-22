import styled from "styled-components/native";
import { colors } from "../../../variables";

const ProductCard = styled.View`
  width: 100%;
  background-color: ${colors.lightColor};
  border-radius: 5px;
  margin-bottom: 25px;
  border: 2px solid #ddd;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductImage = styled.Image`
  width: 25%;
  height: auto;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ProductInfo = styled.View`
  width: 60%;
  padding: 15px 8px;
  justify-content: space-between;
`;

const ProductTitle = styled.Text`
  font-family: Jost_700Bold;
  font-size: 17px;
  margin-bottom: 5px;
`;

const ProductText = styled.Text`
  font-size: 14px;
  font-family: Jost_400Regular;
  margin-bottom: 3px;
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

const ProductButtonsContainer = styled.View`
  width: 15%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  justify-content: space-between;
`;

const ProductButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  background-color: ${(props) => props.bgColor || "#32c980"};
`;

export {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductText,
  ProductPriceBox,
  ProductPrice,
  ProductQuantityBox,
  ProductQuantity,
  ProductButton,
  ProductButtonsContainer,
};
