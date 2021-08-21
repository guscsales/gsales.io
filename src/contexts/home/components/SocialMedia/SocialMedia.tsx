import {
  HeadingThree,
  HeadingTwo,
  Paragraph,
} from '@design-system/components/base/Typography';
import { Colors, FontAlignments, Spaces } from '@design-system/core/Tokens';
import { Box } from 'reflexbox';
import Container from '@design-system/components/core/Container/Container';
import { Card } from '@design-system/components/base/Card/Card';
import { SocialMediaCardsGrid } from '@contexts/home/components/SocialMedia/SocialMedia.styles';

const socialMedias = [
  {
    name: 'YouTube',
    description:
      'Vídeos sobre progrmação e carreira e curso de NodeJS gratuíto',
    link: 'https://canal.gsales.io',
  },
  {
    name: 'Instagram',
    description:
      'Posts com dicas, reels de humor e parte da minha vida cotidiana',
    link: 'https://www.instagram.com/gussales.dev/',
  },
  {
    name: 'Twitter',
    description:
      'Onde posto algumas ideias rapidas e comentários sobre programação',
    link: 'https://twitter.com/gussalesdev',
  },
  {
    name: 'GitHub',
    description: 'Conheça projetos que já criei e outros que já ajudei',
    link: 'https://github.com/gussalesdev',
  },
  {
    name: 'Facebook',
    description:
      'Aqui você pode acompanhar os posts relacionados aos vídeos que posto no canal',
    link: 'http://facebook.com/gussales.dev',
  },
  {
    name: 'LinkedIn',
    description:
      'Meu currículo, jornada profissional e depoimentos de pessoas que já trabalharam comigo',
    link: 'https://www.linkedin.com/in/gsaless/',
  },
];

export function SocialMedia() {
  return (
    <Container>
      <Box mb={Spaces.THREE}>
        <HeadingTwo align={FontAlignments.CENTER}>Meus canais</HeadingTwo>
      </Box>
      <SocialMediaCardsGrid>
        {socialMedias.map((item) => (
          <Card key={item.name} p={Spaces.TWO} clickable>
            <a target="_blank" href={item.link} rel="noreferrer">
              <Box mb={Spaces.ONE}>
                <HeadingThree
                  color={Colors.PRIMARY}
                  align={FontAlignments.CENTER}
                >
                  {item.name}
                </HeadingThree>
              </Box>
              <Paragraph align={FontAlignments.CENTER}>
                {item.description}
              </Paragraph>
            </a>
          </Card>
        ))}
      </SocialMediaCardsGrid>
    </Container>
  );
}
