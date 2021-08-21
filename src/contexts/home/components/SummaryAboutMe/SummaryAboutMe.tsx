import {
  HeadingTwo,
  Paragraph,
} from '@design-system/components/base/Typography';
import { FontAlignments, Spaces } from '@design-system/core/Tokens';
import { Box, Flex } from 'reflexbox';
import Container from '@design-system/components/core/Container/Container';
import { Greetings } from './SummaryAboutMe.styles';

export function SummaryAboutMe() {
  return (
    <Container>
      <Greetings>
        <HeadingTwo align={FontAlignments.CENTER}>
          Olá, eu sou o Gustavo, <br />
          mas pode me chamar de Gus!
        </HeadingTwo>
      </Greetings>
      <Flex mt={Spaces.TWO} justifyContent="center">
        <Box width={[1, '60rem']}>
          <Paragraph align={FontAlignments.CENTER}>
            Programando coisas legais desde 2009 e atualmente no time da startup
            Boulevard.
            <br />
            Tenho como foco o frontend, com muita atenção aos detalhes,
            procurando dar e receber feedback, afinal de contas o sentimento de
            dono é inevitável.
          </Paragraph>
        </Box>
      </Flex>
    </Container>
  );
}
