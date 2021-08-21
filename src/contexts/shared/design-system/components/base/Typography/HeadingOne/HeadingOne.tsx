import styled from 'styled-components';
import {
  Breakpoints,
  Colors,
  FontAlignments,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../../../core/Tokens';
import { TypographyProps } from '../shared/TypographyProps';

export const HeadingOne = styled.h1<TypographyProps>`
  font-family: ${FontFamilies.TITLES};
  font-weight: ${FontWeights.BOLDER};
  line-height: ${FontLineHeights.SMALL};
  font-size: ${FontSizes.X_LARGE};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin: 0;
  padding: 0;

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    font-size: ${FontSizes.XX_LARGE};
  }
`;

HeadingOne.defaultProps = {
  color: Colors.BLUE_GRAY_700,
  align: FontAlignments.LEFT,
};
