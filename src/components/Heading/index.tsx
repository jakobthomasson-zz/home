import styled from 'styled-components';

import { font, fontsize, color } from 'src/theme';

export const Title = styled.h1`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.large};
  font-weight: 800;
  text-align: center;
  margin: 0;
`;
