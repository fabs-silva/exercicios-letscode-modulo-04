import styled from 'styled-components/native';
import { TextStyleProps, variant } from 'styled-system';

const Card = styled.View<TextStyleProps>`
  border: 2px solid gray;
  margin-bottom: 10px;
  align-items: center;

  ${variant({
    prop: 'textStyle',
    variants: {
      squareRight: {
        width: 170,
        minHeight: 230,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginRight: 10,
      },
      squareLeft: {
        width: 170,
        minHeight: 230,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginRight: 0,
      },
      line: {
        width: '100%',
        height: 110,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
      },
    },
  })};
`;

const CardImage = styled.Image<TextStyleProps>`
  margin-right: 15px;
  ${variant({
    prop: 'textStyle',
    variants: {
      square: {
        width: 150,
        height: 100,
      },
      line: {
        width: 80,
        height: 80,
      },
    },
  })};
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
        fontWeight: '600',
        backgroundColor: '#00f5d4',
        padding: 1,
      },
      discount: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        marginRight: 10,
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

const BookmarkButton = styled.View<TextStyleProps>`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export { CardImage, Card, CardText, BookmarkButton };
