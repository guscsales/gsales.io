import { Box } from 'reflexbox';
import styled from 'styled-components';
import { Breakpoints, Spaces } from '@design-system/core/Tokens';

const Container = styled(Box)`
  width: 100%;
  padding-left: ${Spaces.TWO};
  padding-right: ${Spaces.TWO};

  @media ${Breakpoints.TABLET_PORTRAIT} {
    padding-left: ${Spaces.THREE};
    padding-right: ${Spaces.THREE};
  }

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    width: 996px;
    margin: 0 auto;
    padding-left: ${Spaces.NONE};
    padding-right: ${Spaces.NONE};
  }

  @media ${Breakpoints.DESKTOP} {
    width: 1200px;
  }
`;

export default Container;
