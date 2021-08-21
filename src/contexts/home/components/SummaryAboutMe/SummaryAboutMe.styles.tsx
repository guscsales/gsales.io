import styled from 'styled-components';
import { Breakpoints, Spaces } from '@design-system/core/Tokens';

export const Greetings = styled.div`
  width: 100%;
  padding: ${Spaces.NONE} ${Spaces.ONE};

  @media ${Breakpoints.TABLET_PORTRAIT} {
    padding: ${Spaces.NONE};
  }
`;
