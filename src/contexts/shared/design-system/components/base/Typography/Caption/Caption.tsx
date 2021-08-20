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

export const Caption = styled.span<TypographyProps>`
  font-family: ${FontFamilies.COMMON};
  line-height: ${FontLineHeights.SMALL};
  font-size: ${FontSizes.XX_SMALL};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  margin: 0;
  padding: 0;
`;

Caption.defaultProps = {
  color: Colors.GRAY_900,
  align: FontAlignments.LEFT,
  weight: FontWeights.REGULAR,
};
