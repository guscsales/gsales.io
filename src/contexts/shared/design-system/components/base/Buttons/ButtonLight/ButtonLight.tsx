import styled from 'styled-components';
import {
  BorderRadiuses,
  Colors,
  FontFamilies,
  FontWeights,
} from '../../../../core/Tokens';
import { ButtonSizeMapper } from '../shared/ButtonMappers';
import { ButtonProps } from '../shared/ButtonProps';

export const ButtonLight = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ size }) => ButtonSizeMapper[size].height};
  font-size: ${({ size }) => ButtonSizeMapper[size].fontSize};
  font-family: ${FontFamilies.COMMON};
  font-weight: ${FontWeights.BOLDER};
  padding: ${({ size }) => ButtonSizeMapper[size].padding};
  border-radius: ${BorderRadiuses.ONE};
  background-color: ${Colors.GRAY_10};
  color: ${Colors.BLUE_GRAY_700};
  border: none;
  cursor: pointer;
`;
