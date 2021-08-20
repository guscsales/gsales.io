import styled from 'styled-components';
import {
  Colors,
  FontAlignments,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../../../core/Tokens';
import { TypographyProps } from '../shared/TypographyProps';

export const HeadingThree = styled.h3<TypographyProps>`
  font-family: ${FontFamilies.TITLES};
  font-weight: ${FontWeights.BOLDER};
  line-height: ${FontLineHeights.MEDIUM};
  font-size: ${FontSizes.LARGE};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin: 0;
  padding: 0;
`;

HeadingThree.defaultProps = {
  color: Colors.BLUE_GRAY_700,
  align: FontAlignments.LEFT,
};
