export interface ILanguageMetadataStructure {
  hourFormat: string;
  dateFormat: string;
  headerCodePhrases: string[];
  name: string;
  nickname: string;
  role: string;
  at: string;
  currentCompany: string;
  profilePictureAltText: string;
  twitter: string;
  navigator: {
    home: string;
    wall: string;
  };
  metaTags: {
    home: {
      title: string;
      description: string;
    };
  };
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
  topVideos: {
    title: string;
    description: string;
    views: string;
    moreVideos: string;
  };
  latestTweet: {
    title: string;
  };
  footer: {
    verse: {
      content: string;
      reference: string;
    };
  };
  wall: {
    title: string;
    description: string;
    form: {
      message: {
        placeholder: string;
        error: string;
        callout: string;
      };
      submit: string;
    };
    cards: {
      remove: string;
    };
    metatags: {
      title: string;
      description: string;
    };
  };
}

export const en: ILanguageMetadataStructure = {
  dateFormat: 'PP',
  hourFormat: 'p',
  headerCodePhrases: [
    'doing what you love is just fun',
    'do something awesome!',
    'spread the bad news',
    'communication is everything',
    'be relentlessly resourceful',
    'keep things simple',
    'give feedback',
    'be a leader everywhere',
    'have ownsership feeling',
    'think on client',
    'learn from unnatural movements',
    'be ready for new challenges',
  ],
  name: 'Gustavo Sales',
  nickname: 'Gus',
  role: 'Frontend Engineer',
  at: '@',
  currentCompany: 'Boulevard',
  profilePictureAltText: "A black and white Gustavo's profile picture",
  twitter: '@gussalesdev',
  navigator: {
    home: 'Home',
    wall: 'Wall',
  },
  metaTags: {
    home: {
      title: 'Gustavo Sales - Software Engineer and Content Creator.',
      description:
        'Coding awesome things since 2012, with many attention of details, feeling owner and giving and receiving feedback. You can call me Gus.',
    },
  },
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
  topVideos: {
    title: 'Featured videos',
    description:
      'I believe that creating code can be easier than people think. Knowing this I like to share my knowledge and experience to generate value for other people through videos.',
    views: 'views',
    moreVideos: 'Watch more videos',
  },
  latestTweet: {
    title: 'Latest tweet',
  },
  footer: {
    verse: {
      content:
        'Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord.',
      reference: 'PSalm 27:14',
    },
  },
  wall: {
    title: 'Drop a message',
    description: `Have you ever heard about "The Facebook Wall"? Post any message here for me or anyone else to read.

It could be inspirational, some feedback, a reminder for the future or from the future, or anything you want to share. Be creative! 🤓`,
    form: {
      message: {
        placeholder: 'Type your message...',
        callout:
          'Will be needed to log in with your Google account just to show your name.',
        error: 'Type something on the field above.',
      },
      submit: 'Post',
    },
    cards: {
      remove: 'Remove',
    },
    metatags: {
      title: 'Type something on The Gus Wall - Gustavo Sales',
      description:
        'Have you ever heard about "The Facebook Wall"? Post any message here for me or anyone else to read. Be creative!',
    },
  },
};

export const pt: ILanguageMetadataStructure = {
  dateFormat: 'PP',
  hourFormat: 'p',
  headerCodePhrases: [
    'fazer o que ama é apenas diversão',
    'crie algo incrível!',
    'espalhe as más notícias',
    'comunicação é tudo',
    'seja impecavelmente engenhoso',
    'mantenha as coisas simples',
    'dê feedback',
    'seja líder onde estiver',
    'tenha sentimento de dono',
    'pense no cliente',
    'aprenda com o desconhecido',
    'conquiste novos desafios',
  ],
  name: 'Gustavo Sales',
  nickname: 'Gus',
  role: 'Engenheiro Frontend',
  at: 'na',
  currentCompany: 'Boulevard',
  profilePictureAltText: 'Uma foto preta e branca de perfil do Gustavo',
  twitter: '@gussalesdev',
  navigator: {
    home: 'Home',
    wall: 'Mural',
  },
  metaTags: {
    home: {
      title: 'Gustavo Sales - Engenheiro de Software e Criador de Conteúdo.',
      description:
        'Criando coisas incríveis desde 2012, com muita atenção aos detalhes, sentimento de dono e exercendo o feedback. Você pode me chamar de Gus.',
    },
  },
  homeBio: {
    content:
      'Criando coisas incríveis desde 2012, com muita atenção aos detalhes, sentimento de dono e exercendo o feedback.',
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
          'Compartilho minha experiência e conhecimento em formato de vídeo ou texto.',
      },
    ],
  },
  professionalRoad: {
    title: '10 anos na estrada',
    description:
      'Cada empresa que passei e cada pessoa com quem trabalhei tem uma parte especial na minha história como profissional. Tenho muito orgulhoso pela chance de ter feito parte da jornada de cada um.',
    mosaicAltText:
      'Um moisaíco com fotos da linha do tempo profissional do Gus',
  },
  topVideos: {
    title: 'Vídeos mais vistos',
    description:
      'Eu acredito que criar código pode ser mais fácil do que as pessoas imaginam. Sabendo disso eu gosto de compartilhar meu conhecimento e experiência para gerar valor para os outras pessoas através de vídeos.',
    views: 'visualizações',
    moreVideos: 'Ver mais vídeos',
  },
  latestTweet: {
    title: 'Último tweet',
  },
  footer: {
    verse: {
      content:
        'Espera no Senhor e sê forte! Fortifique-se o teu coração e espera no Senhor!',
      reference: 'Salmo 27:14',
    },
  },
  wall: {
    title: 'Deixe uma mensagem',
    description: `Ja viu a parede de assinaturas do Facebook? Deixe aqui qualquer mensagem para eu ou qualquer outra pessoa ler.

Pode ser algo inspiracional, um feedback, um aviso para o futuro ou do futuro, ou qualquer coisa que você queira compartilhar. Manda ver na criatividade! 🤓`,
    form: {
      message: {
        placeholder: 'Escreva sua mensagem...',
        callout:
          'Será preciso logar com sua conta do Google apenas para mostrar seu nome.',
        error: 'Escreva algo no campo acima.',
      },
      submit: 'Postar',
    },
    cards: {
      remove: 'Apagar',
    },
    metatags: {
      title: 'Escreva algo na The Gus Wall - Gustavo Sales',
      description:
        'Ja viu a parede de assinaturas do Facebook? Deixe aqui qualquer mensagem para eu ou qualquer outra pessoa ler. Manda ver na criatividade!',
    },
  },
};
