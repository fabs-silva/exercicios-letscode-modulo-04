import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../variables';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const ProductListContainer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgColor};
`;

export { ProductListContainer };
