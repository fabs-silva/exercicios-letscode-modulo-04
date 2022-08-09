import styled from 'styled-components/native';
import { TextStyleProps, variant } from 'styled-system';

const CardSquare = styled.View<TextStyleProps>`
  width: 170px;
  min-height: 230px;
  padding: 10px 5px;
  border: 2px solid gray;
  margin-bottom: 10px;
  align-items: center;

  ${variant({
    prop: 'textStyle',
    variants: {
      right: {
        marginRight: 10,
      },
      left: {
        marginRight: 0,
      },
    },
  })};
`;

const CardImage = styled.Image`
  width: 150px;
  height: 100px;
  margin-bottom: 10px;
`;

const CardText = styled.Text<TextStyleProps>`
  margin-bottom: 2px;
  ${variant({
    prop: 'textStyle',
    variants: {
      title: {
        fontSize: 16,
        fontWeight: '600',
      },
      body: {
        fontSize: 14,
        fontWeight: '400',
      },
      price: {
        fontSize: 20,
        fontWeight: '600',
      },
      discount: {
        color: 'green',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      },
      stock: {
        fontWeight: '500',
        marginTop: 1,
      },
      outStock: {
        color: 'red',
        fontWeight: '500',
        marginTop: 1,
      },
    },
  })}
`;

export { CardImage, CardSquare, CardText };
