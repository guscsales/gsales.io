export interface ILanguageMetadataStructure {
  headerCodePhrases: string[];
  name: string;
  nickname: string;
  role: string;
  at: string;
  currentCompany: string;
  profilePictureAltText: string;
  homeBio: {
    content: string;
    greetings: string;
  };
  whatIDo: {
    title: string;
    description: string;
    actuations: {
      title: string;
      description: string;
    }[];
  };
  professionalRoad: {
    title: string;
    description: string;
    mosaicAltText: string;
  };
  footer: {
    verse: {
      content: string;
      reference: string;
    };
  };
}

export const en: ILanguageMetadataStructure = {
  headerCodePhrases: [
    'doing what you love is just fun',
    'do something awesome!',
  ],
  name: 'Gustavo Sales',
  nickname: 'Gus',
  role: 'Frontend Engineer',
  at: '@',
  currentCompany: 'Boulevard',
  profilePictureAltText: "A black and white Gustavo's profile picture",
  homeBio: {
    content:
      'Coding awesome things since 2012, with many attention of details, feeling owner and giving and receiving feedback.',
    greetings: 'You can call me',
  },
  whatIDo: {
    title: 'What I do',
    description:
      "I have already worked with a lot of people, participating of many different projects and products, currently is not different, I'm continue looking by challenges that makes me grow.",
    actuations: [
      {
        title: 'Frontend',
        description:
          'I generate the user experience beyond the creation of apps, websites and systems.',
      },
      {
        title: 'Backend',
        description:
          'I build the chain that generates the experience between the visual and non-visual.',
      },
      {
        title: 'Content',
        description:
          'I share my experience and knowledge in video or text format.',
      },
    ],
  },
  professionalRoad: {
    title: '10 years on the street',
    description:
      "Each company that I've been passed and each person that I've worked together has a special part in my history as a professional. I'm really proud to have had a chance to be part of the journey of each one.",
    mosaicAltText: "A mosaic of photos of Gus' professional timeline",
  },
  footer: {
    verse: {
      content:
        'Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord.',
      reference: 'PSalm 27:14',
    },
  },
};

export const pt: ILanguageMetadataStructure = {
  headerCodePhrases: [
    'fazer o que ama é apenas diversão',
    'crie algo incrível!',
  ],
  name: 'Gustavo Sales',
  nickname: 'Gus',
  role: 'Engenheiro Frontend',
  at: 'na',
  currentCompany: 'Boulevard',
  profilePictureAltText: 'Uma foto preta e branca de perfil do Gustavo',
  homeBio: {
    content:
      'Criando coisas incríveis desde 2012, com muita atenção aos detalhes, sentimento de dono e trabando o feedback.',
    greetings: 'Você pode me chamar de',
  },
  whatIDo: {
    title: 'O que eu faço',
    description:
      'Já trabalhei com muita gente, participando de muitos projetos e produtos diferentes, atualmente não é diferente, continuo procurando por desafios que me façam crescer.',
    actuations: [
      {
        title: 'Frontend',
        description:
          'Gero a experiência do usuário através da criação de aplicativos, sites e sistemas.',
      },
      {
        title: 'Backend',
        description:
          'Crio a corrente que gera a experiência entre o visual e o não visual.',
      },
      {
        title: 'Conteúdo',
        description:
          'Eu compartilho minha experiência e conhecimento em formato de vídeo ou texto.',
      },
    ],
  },
  professionalRoad: {
    title: '10 anos na estrada',
    description:
      'Cada empresa por que passei e cada pessoa com quem trabalhei tem uma parte especial na minha história como profissional. Tenho muito orgulhoso pela chance de ter feito parte da jornada de cada um.',
    mosaicAltText:
      'Um moisaíco com fotos da linha do tempo profissional do Gus',
  },
  footer: {
    verse: {
      content:
        'Espera no Senhor e sê forte! Fortifique-se o teu coração e espera no Senhor!',
      reference: 'Salmo 27:14',
    },
  },
};
