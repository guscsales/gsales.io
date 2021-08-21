import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Breakpoints, Spaces } from '@design-system/core/Tokens';

export const SocialMediaCardsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};

  @media ${Breakpoints.TABLET_PORTRAIT} {
    grid-template-columns: 1fr 1fr;
    gap: ${Spaces.TWO};
  }

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
