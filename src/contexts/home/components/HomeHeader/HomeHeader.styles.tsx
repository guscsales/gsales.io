import styled from 'styled-components';
import { Box } from 'reflexbox';
import {
  Breakpoints,
  Colors,
  FontFamilies,
  FontSizes,
  Shadows,
  Spaces,
} from '@design-system/core/Tokens';

const rectanglesBackgroundSrc = require('@public/images/home-header-retangles.svg');
const dotsBackgroundSrc = require('@public/images/home-header-dot-grid.svg');

export const StyledHeaderWrapper = styled(Box)`
  width: 100%;
  background-color: ${Colors.BLUE_GRAY_700};
  position: relative;
  overflow: hidden;
  padding-bottom: ${Spaces.SIX};

  @media ${Breakpoints.TABLET_PORTRAIT} {
    height: 75vh;
    padding-bottom: ${Spaces.NONE};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  position: relative;
  z-index: 10;
`;

export const GusPhoto = styled(Box)`
  border-radius: 100%;
  box-shadow: ${Shadows.ONE};
  border: 0.6rem solid ${Colors.NEUTRAL_WHITE};
  width: 12.4rem;
  height: 12.4rem;
  overflow: hidden;

  img {
    border-radius: 100%;
  }

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    width: 29.2rem;
    height: 29.2rem;
    border: 1.2rem solid ${Colors.NEUTRAL_WHITE};
  }
`;

export const HeadingsGroup = styled.div`
  h1 {
    text-align: center;

    @media ${Breakpoints.TABLET_LANDSCAPE} {
      text-align: left;
    }
  }
`;

export const CodeLine = styled.span`
  font-family: ${FontFamilies.CODE};
  color: ${Colors.SECONDARY};
  font-size: ${FontSizes.X_SMALL};
  text-align: center;
  width: 100%;
  display: inline-block;

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    text-align: left;
  }
`;

export const RectanglesBackground = styled.div`
  visibility: hidden;

  @media ${Breakpoints.TABLET_PORTRAIT} {
    background-image: url('${rectanglesBackgroundSrc}');
    background-repeat: no-repeat;
    width: 505px;
    height: 44px;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 107px;
    pointer-events: none;
    visibility: visible;
    background-size: contain;
  }

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    left: -240px;
    bottom: 95px;
    height: 64px;
  }

  @media ${Breakpoints.DESKTOP} {
    bottom: 107px;
  }
`;

export const DotsBackground = styled.div`
  background-image: url('${dotsBackgroundSrc}');
  background-repeat: no-repeat;
  width: 150px;
  height: 600px;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  right: -133px;
  bottom: -7px;

  @media ${Breakpoints.TABLET_PORTRAIT} {
    right: -83px;
  }

  @media ${Breakpoints.TABLET_LANDSCAPE} {
    right: -40px;
    bottom: -280px;
  }

  @media ${Breakpoints.DESKTOP} {
    bottom: -80px;
  }
`;
