import styled from 'styled-components';

import { font, fontsize, color } from 'src/theme';

export const Title = styled.h1`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.large};
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

export const TextMainHeading = styled.h1`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.xlarge};
  font-weight: 200;
  text-align: left;
`;

export const TextSecondaryHeading = styled.h2`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.large};
  font-weight: 400;
  text-align: left;
`;

export const TextSubHeading = styled.h3`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.medium};
  font-weight: 400;
  text-align: left;
`;

export const TextSubSubHeading = styled.h4`
  font-family: ${font.SansSerif};
  color: ${color.text};
  text-transform: uppercase;
  font-size: ${fontsize.small};
  font-weight: 800;
  text-align: left;
`;
