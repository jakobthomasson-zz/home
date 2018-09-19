import styled from 'styled-components';

import { font, fontsize, color } from 'src/theme';

export const SmallText = styled.span`
  font-family: ${font.Serif};
  color: ${color.text};
  font-size: ${fontsize.small};
  margin: 0;
`;

export const NormalText = styled.div`
  font-family: ${font.Serif};
  color: ${color.text};
  font-size: ${fontsize.medium};
  margin: 0;
`;

export const MenuText = styled.span`
  font-family: ${font.Serif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.small};
  margin: 0;
`;
