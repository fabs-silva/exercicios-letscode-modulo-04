import styled from 'styled-components/native';

type CustomTypography = {
  font: 'Roboto Mono' | 'Raleway';
  weight: 'light' | 'regular' | 'semibold' | 'bold';
};

const CustomTypography = styled.Text.attrs(
  (props: { font: string; weight: string }) => props
)`
  font-family: ${(props) => props.font};
  font-weight: ${(props) => props.weight};
`;
