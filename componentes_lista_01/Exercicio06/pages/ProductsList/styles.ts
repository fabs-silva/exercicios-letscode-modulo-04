import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../variables";

const windowWidth: number = Dimensions.get("window").width;
const windowHeight: number = Dimensions.get("window").height;

const ProductListContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgColor};
  padding: 0 10px;
`;

const ProductListHeader = styled.View`
  width: 100%;
  background-color: ${colors.bgColor};
  padding: 15px 15px 25px 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ProductListTitle = styled.Text`
  font-size: 25px;
  color: ${colors.accentColor};
  font-family: Jost_700Bold;
`;

const ProductListButton = styled.TouchableOpacity`
  background-color: ${colors.accentColor};
  border-radius: 5px;
  padding: 5px;
`;

export {
  ProductListContainer,
  ProductListTitle,
  ProductListButton,
  ProductListHeader,
};
