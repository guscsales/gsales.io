import styled from 'styled-components';
import { Box } from 'reflexbox';
import { BorderRadiuses, Colors, Shadows } from '../../../core/Tokens';

type Props = {
  backgroundColor?: Colors;
  borderRadius?: BorderRadiuses;
  clickable?: boolean;
};

export const Card = styled(Box)<Props>`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${Shadows.ONE};

  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;
    
    &:active {
      box-shadow: ${Shadows.HALF};
    }
  `}

  a {
    text-decoration: none;
  }
`;

Card.defaultProps = {
  backgroundColor: Colors.GRAY_10,
  borderRadius: BorderRadiuses.TWO,
};
