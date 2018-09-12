import styled from 'styled-components';

import { font, fibonacing, color } from 'src/theme';

export const Title = styled.h1`
  font-family: ${font.Noto};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fibonacing._21};
  font-weight: 600;
  text-align: center;
  margin: 0;
`;
