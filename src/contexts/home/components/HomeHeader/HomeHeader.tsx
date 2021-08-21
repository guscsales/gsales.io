import { Box, Flex } from 'reflexbox';
import Image from 'next/image';
import MainLogo from '@design-system/components/core/MainLogo/MainLogo';
import Container from '@design-system/components/core/Container/Container';
import { Colors, FontAlignments, Spaces } from '@design-system/core/Tokens';
import {
  HeadingOne,
  HeadingTwo,
} from '@design-system/components/base/Typography';

import {
  CodeLine,
  Content,
  DotsBackground,
  GusPhoto,
  HeadingsGroup,
  RectanglesBackground,
  StyledHeaderWrapper,
  Greetings,
} from './HomeHeader.styles';

type Props = {
  gusPhoto: any;
};

export default function HomeHeader({ gusPhoto }: Props) {
  return (
    <StyledHeaderWrapper>
      <RectanglesBackground />
      <DotsBackground />
      <Content>
        <Container pt={Spaces.TWO}>
          <header>
            <MainLogo />
          </header>
        </Container>
        <Flex
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          margin="0 auto"
          mt={[Spaces.SIX, Spaces.TWELVE]}
        >
          <GusPhoto>
            <Image {...gusPhoto} placeholder="blur" />
          </GusPhoto>
          <Flex
            alignItems="center"
            ml={[Spaces.NONE, Spaces.NONE, Spaces.FOUR]}
            mt={[Spaces.TWO, Spaces.TWO, Spaces.NONE]}
          >
            <Box>
              <Box mb={Spaces.ONE}>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <CodeLine>// doing what you love is just fun; _</CodeLine>
              </Box>
              <HeadingsGroup>
                <HeadingOne color={Colors.NEUTRAL_WHITE}>
                  Engenheiro de Software,
                  <br /> Criador de Conteúdo,
                  <br /> O Cara da Foto.
                </HeadingOne>
              </HeadingsGroup>
            </Box>
          </Flex>
        </Flex>
      </Content>
    </StyledHeaderWrapper>
  );
}
