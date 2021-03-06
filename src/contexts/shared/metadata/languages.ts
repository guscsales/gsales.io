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
    journey: string;
    blog: string;
    channel: string;
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
    nothingPlaying: string;
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
  journey: {
    title: string;
    description: string;
    descriptionPartTwo: string;
    experienceTitle: string;
    educationTitle: string;
    awardsTitle: string;
    metatags: {
      title: string;
      description: string;
    };
    experiences: {
      startDate: string;
      endDate: string;
      title: string;
      position: string;
      description: string;
      site?: string;
    }[];
    educations: {
      startDate: string;
      endDate: string;
      title: string;
      institution: string;
    }[];
    awards: {
      startDate: string;
      title: string;
      description: string;
      photo: string;
      photoAlt: string;
    }[];
  };
  blog: {
    title: string;
    description: string;
    postedAt: string;
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
  role: 'Founder Frontend Engineer',
  at: '@',
  currentCompany: 'BlastRadius',
  profilePictureAltText: "A black and white Gustavo's profile picture",
  twitter: '@gussalesdev',
  navigator: {
    home: 'Home',
    wall: 'Wall',
    journey: 'Journey',
    blog: 'Blog',
    channel: 'Channel',
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
    title: '10 years on the road',
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
    nothingPlaying: 'Nothing playing',
  },
  wall: {
    title: 'Drop a message',
    description: `Have you ever heard about "The Facebook Wall"? Post any message here for me or anyone else to read.

It could be inspirational, some feedback, a reminder for the future or from the future, or anything you want to share. Be creative! ????`,
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
  journey: {
    title: 'Nice to meet you!',
    description: `Now officially, I want to welcome you, my name is <strong>Gustavo Campos Sales</strong>, the person in the photo on the right. Being honest, I'm currently looks less like the Gustavo there, because of course, this photo was taken <s>a few</s> years ago ????.

Do this: click on the photo and then you will be able to see me in an almost current version. So, did you notice the similarity? ????`,
    descriptionPartTwo:
      "On the first page of the site I commented that I'm 10 years on the road and here I want to share my journey in a little more detail, i.e.: the companies I went through, where I studied and competitions I participated.",
    awardsTitle: 'Competition & Awards',
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    experiences: [
      {
        startDate: '11.2021',
        endDate: 'Current',
        title: 'BlastRadius',
        description:
          "First frontend engineer, I'm participating in the development of BlastRadius frontend app from zero, building the UI library and the structure of other apps using monorepo.",
        position: 'Founder Frontend Engineer',
        site: 'blastradius.ai',
      },
      {
        startDate: '08.2021',
        endDate: 'Current',
        title: 'Boulevard',
        description:
          'Create and maintenance of Boulevard main React app, creating components and improving the design system.',
        position: 'Senior Frontend Engineer',
        site: 'joinblvd.co',
      },
      {
        startDate: '03.2021',
        endDate: '08.2021',
        title: 'Origin',
        description: `Be part of the product giving feedbacks and questioning is essential and common in my workday, beyond develop I love to give insights and participate in the product sessions.

On the technical side, my contribution is developing Origin's platforms using React, SWR, custom hooks, and many other technologies commonly used by the best companies. I also do code reviews, pair coding, and I lead refinements, plannings, and dailies.
          
Other responsibilities are having a macro vision for the company ecosystem thinking in improvements for the whole company, e.g.: the creation of design system and design tokens, migration from monolith to micro frontends, architecture improvements before the company growth generates a bottleneck, improvements on hiring processes, improvements in apps security, and other things related.
          
I have contributions in the backend discussions and also technical contributions updating the codebase whenever necessary.`,
        position: 'Senior Frontend Engineer',
        site: 'useorigin.com',
      },
      {
        startDate: '09.2019',
        endDate: '03.2020',
        title: 'Ita?? Unibanco',
        description: `My main activity was to act as a cross helping several other teams with their doubts and help giving better solutions for demands. Working directly on the foundation team.

I have shared the experience of agile methods and created platforms to be able to use micro frontends using React, Redux, NextJS, and similar libraries. I also did inner sources to create and update Angular 8 components.`,
        position: 'Senior Frontend Engineer',
        site: 'itau.com.br',
      },
      {
        startDate: '08.2017',
        endDate: '08.2019',
        title: 'PagSeguro UOL',
        description: `The mindset was to make the best product respecting the flow of value delivery. At PAGS my main actuation was frontend, but the backend was strong on the workdays.

Help the team to decide the best technologies for each project, get requisites for new solutions, lead the other engineers, removing impediments, discussing with others leaders, and team the agile process to make things better and faster, I also made decisions at difficult and pressure moments.
        
I have developed systems for the clients, using React, Nextjs, Redux, API Gateways, Java, PHP, GO, agile methods, and others tools, ideas, and libraries. Also, we used system monitors as New Relic and Splunk to know how was our system health and our microservices dependencies health.
        
My focus was also to give the best experience to the final client. Always thinking on design system, unit, integrated, E2E and a lot of other tests, build process, reusable components, scalability, and the best performance on each render.
        
I have worked built internal microservices with NodeJS using Typescript, Kafka, Amazon RDS, Amazon DynamoDB and other technologies.`,
        position: 'Senior Frontend Engineer / Tech Lead',
        site: 'pagseguro.com.br',
      },
      {
        startDate: '12.2015',
        endDate: '03.2017',
        title: 'Netbiis',
        description: `Development the management system of Engel & V??lkers with AngularJS. I have had direct contact with partners of different nationalities, strong English to communicate.

In others projects for big players like TIM (phone company), I have had a strong usage of Angular 2 and Ionic 2.`,
        position: 'Mid-Level Frontend Engineer',
        site: 'netbiis.com',
      },
      {
        startDate: '04.2014',
        endDate: '12.2015',
        title: 'RMC Brothers',
        description: `Development and maintenance of many websites, systems, and apps from zero. Many projects with AngularJS and other Javascript frameworks like jQuery, Underscore, Breeze, LinqJS, and other libraries.

On the backend side, I have participated in many .NET and PHP (WordPress) projects.`,
        position: 'Mid-Level Fullstack Engineer',
        site: 'rmcbrothers.com.br',
      },
      {
        startDate: '07.2013',
        endDate: '04.2014',
        title: 'Plaay',
        description: `I have been the first employee of this startup and the engineering team. I have created a platform of web music with an emphasis on social media, allowing the users to follow each other and see their friend's timeline songs.

I have done maintenance of web services in PHP (CakePHP), including some crawlers to get data from other domains. Strong usage of social media APIs, like Facebook, Twitter, Google+, and YouTube. All the frontend application has been developed using Backbone, Underscore and other libraries.`,
        position: 'Junior Fullstack Engineer',
      },
      {
        startDate: '07.2012',
        endDate: '07.2013',
        title: 'Foster WPP',
        description: `Internship in Front and Backend development. I have worked with HTML5, CSS3, Javascript, jQuery and ASP.NET C#. I have done many newsletters, blog posts and templates for big players, like Danone, Goodyear, Bayer, AcerlorMittal, AC Camargo Cancer Center, Marfrig, and others.`,
        position: 'Engineer Intern',
        site: 'foster.com.br',
      },
    ],
    educations: [
      {
        title: 'Digital Games',
        institution: 'FIAP',
        startDate: '2016',
        endDate: '2017',
      },
      {
        title: 'Science Computer',
        institution: 'Uninove',
        startDate: '2012',
        endDate: '2015',
      },
    ],
    awards: [
      {
        startDate: '10.2017',
        title: 'Second Place - BGJAM - Brasil Game Show (BGS)',
        description:
          'The ???Globo Television??? (globo.com) created this challenge on the biggest event of games in Latin America. Me and my team developed from zero a new game to improve the game "Cartola FC" in 48 hours.',
        photo: 'bgjam-bgs-2017.png',
        photoAlt:
          'All people that participate on the BGJam in front of the Globo studio',
      },
      {
        startDate: '11.2016',
        title: 'First Place - UOL Host Hackathon',
        description:
          'We have created a marketplace solution for B2B2C, bringing together suppliers, micro entrepreneurs, and customers. I have created all front end (with fake data and using requests on API of products) in less than 24 hours.',
        photo: 'hackathon-uol-host-2016.png',
        photoAlt: 'Gustavo and other winners in front of the hackathon banner',
      },
    ],
    metatags: {
      title: 'A journey of a software engineer - Gustavo Sales',
      description:
        "I've been on the road for 10 years, it's a lot of history, a lot of projects and a lot of people. Here I want to share my journey since 2012 in a little more detail.",
    },
  },
  blog: {
    title: 'Blog',
    description:
      "Writing is one of the coolest ways to express yourself, and it wouldn't be different to talk about career and technology and a few posts about my life. Note that the articles are only in portuguese for now.",
    metatags: {
      title: 'Articles and posts - Blog - Gustavo Sales',
      description:
        'Writing is one of the coolest ways to express yourself, here is my personal blog, a place where I write tech articles and posts about carrier and my life.',
    },
    postedAt: 'Posted at',
  },
};

export const pt: ILanguageMetadataStructure = {
  dateFormat: "dd 'de' MMM 'de' yyyy",
  hourFormat: 'p',
  headerCodePhrases: [
    'fazer o que ama ?? apenas divers??o',
    'crie algo incr??vel!',
    'espalhe as m??s not??cias',
    'comunica????o ?? tudo',
    'seja impecavelmente engenhoso',
    'mantenha as coisas simples',
    'd?? feedback',
    'seja l??der onde estiver',
    'tenha sentimento de dono',
    'pense no cliente',
    'aprenda com o desconhecido',
    'conquiste novos desafios',
  ],
  name: 'Gustavo Sales',
  nickname: 'Gus',
  role: 'Engenheiro Frontend',
  at: 'na',
  currentCompany: 'BlastRadius',
  profilePictureAltText: 'Uma foto preta e branca de perfil do Gustavo',
  twitter: '@gussalesdev',
  navigator: {
    home: 'Home',
    wall: 'Mural',
    journey: 'Jornada',
    blog: 'Blog',
    channel: 'Canal',
  },
  metaTags: {
    home: {
      title: 'Gustavo Sales - Engenheiro de Software e Criador de Conte??do.',
      description:
        'Criando coisas incr??veis desde 2012, com muita aten????o aos detalhes, sentimento de dono e exercendo o feedback. Voc?? pode me chamar de Gus.',
    },
  },
  homeBio: {
    content:
      'Criando coisas incr??veis desde 2012, com muita aten????o aos detalhes, sentimento de dono e exercendo o feedback.',
    greetings: 'Voc?? pode me chamar de',
  },
  whatIDo: {
    title: 'O que eu fa??o',
    description:
      'J?? trabalhei com muita gente, participando de muitos projetos e produtos diferentes, atualmente n??o ?? diferente, continuo procurando por desafios que me fa??am crescer.',
    actuations: [
      {
        title: 'Frontend',
        description:
          'Gero a experi??ncia do usu??rio atrav??s da cria????o de aplicativos, sites e sistemas.',
      },
      {
        title: 'Backend',
        description:
          'Crio a corrente que gera a experi??ncia entre o visual e o n??o visual.',
      },
      {
        title: 'Conte??do',
        description:
          'Compartilho minha experi??ncia e conhecimento em formato de v??deo ou texto.',
      },
    ],
  },
  professionalRoad: {
    title: '10 anos na estrada',
    description:
      'Cada empresa que passei e cada pessoa com quem trabalhei tem uma parte especial na minha hist??ria como profissional. Tenho muito orgulhoso pela chance de ter feito parte da jornada de cada um.',
    mosaicAltText:
      'Um moisa??co com fotos da linha do tempo profissional do Gus',
  },
  topVideos: {
    title: 'V??deos mais vistos',
    description:
      'Eu acredito que criar c??digo pode ser mais f??cil do que as pessoas imaginam. Sabendo disso eu gosto de compartilhar meu conhecimento e experi??ncia para gerar valor para os outras pessoas atrav??s de v??deos.',
    views: 'visualiza????es',
    moreVideos: 'Ver mais v??deos',
  },
  latestTweet: {
    title: '??ltimo tweet',
  },
  footer: {
    verse: {
      content:
        'Espera no Senhor e s?? forte! Fortifique-se o teu cora????o e espera no Senhor!',
      reference: 'Salmo 27:14',
    },
    nothingPlaying: 'Nada tocando',
  },
  wall: {
    title: 'Deixe uma mensagem',
    description: `Ja viu a parede de assinaturas do Facebook? Deixe aqui qualquer mensagem para eu ou qualquer outra pessoa ler.

Pode ser algo inspiracional, um feedback, um aviso para o futuro ou do futuro, ou qualquer coisa que voc?? queira compartilhar. Manda ver na criatividade! ????`,
    form: {
      message: {
        placeholder: 'Escreva sua mensagem...',
        callout:
          'Ser?? preciso logar com sua conta do Google apenas para mostrar seu nome.',
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
  journey: {
    title: 'Prazer em conhecer!',
    description: `Agora oficialmente, desejo boas vindas a voc??, meu nome ?? <strong>Gustavo Campos Sales</strong>, essa pessoa da foto ao lado. Sendo sincero atualmente estou menos parecido com esse Gustavo a??, porque claro, essa foto foi tirada h?? <s>poucos</s> anos atr??s ????.

Faz assim: clica em cima dessa foto e a?? voc?? vai poder me ver em uma vers??o quase atual. E a??, notou a semelhan??a? ????`,
    descriptionPartTwo:
      'Na primeira p??gina do site eu comentei que estou 10 anos na estrada e aqui eu quero compartilhar com um pouco mais de detalhes a minha jornada, ou seja, as empresas que passei, onde estudei e competi????es que participei.',
    awardsTitle: 'Competi????es & Conquistas',
    educationTitle: 'Academia',
    experienceTitle: 'Experi??ncia',
    experiences: [
      {
        startDate: '11.2021',
        endDate: 'Atual',
        title: 'BlastRadius',
        description:
          'Primeiro engenheiro frontend, estou participando do desenvolvimento do aplicativo frontend BlastRadius do zero, construindo a biblioteca de components e a estrutura de outros aplicativos usando monorepo.',
        position: 'Engenheiro Frontend Fundador',
        site: 'blastradius.ai',
      },
      {
        startDate: '08.2021',
        endDate: '11.2021',
        title: 'Boulevard',
        description:
          'Cria????o e manuten????o do aplicativo React principal do Boulevard, criando componentes e aprimorando o sistema de design.',
        position: 'Engenheiro de Software S??nior',
        site: 'joinblvd.co',
      },
      {
        startDate: '03.2021',
        endDate: '08.2021',
        title: 'Origin',
        description: `Fazer parte do produto dando feedbacks e questionamentos ?? essencial e comum no meu dia de trabalho, al??m de desenvolver adoro dar insights e participar das sess??es de produto.

No lado t??cnico, minha contribui????o ?? desenvolver as plataformas Origin usando React, SWR, custom hooks e muitas outras tecnologias comumente utilizadas pelas melhores empresas. Tamb??m fa??o revis??es de c??digo, codifica????o em pares e conduzo refinamentos, planejamentos e di??rios.
                  
Outras responsabilidades s??o ter uma vis??o macro do ecossistema da empresa pensando em melhorias para toda a empresa, por exemplo: a cria????o do sistema de design e tokens de design, migra????o de mon??lito para micro frontends, melhorias na arquitetura antes que o crescimento da empresa gere um gargalo, melhorias na contrata????o processos, melhorias na seguran??a de aplicativos e outras coisas relacionadas.
                  
Tenho contribui????es nas discuss??es de backend e tamb??m contribui????es t??cnicas atualizando o codebase sempre que necess??rio.`,
        position: 'Engenheiro de Software S??nior',
        site: 'useorigin.com',
      },
      {
        startDate: '09.2019',
        endDate: '03.2020',
        title: 'Ita?? Unibanco',
        description: `Minha principal atividade era atuar como uma cruz, ajudando v??rias outras equipes com suas d??vidas e ajudando a dar melhores solu????es para as demandas. Trabalhando diretamente na equipe de funda????o.

Eu compartilhei a experi??ncia de m??todos ??geis e criei plataformas para poder usar micro frontends usando React, Redux, NextJS e bibliotecas semelhantes. Eu tamb??m fiz fontes internas para criar e atualizar componentes do Angular 8.`,
        position: 'Engenheiro de Software S??nior',
        site: 'itau.com.br',
      },
      {
        startDate: '08.2017',
        endDate: '08.2019',
        title: 'PagSeguro UOL',
        description: `A mentalidade era fazer o melhor produto respeitando o fluxo de entrega de valor. No PAGS minha atua????o principal era o front-end, mas o back-end era forte nos dias de trabalho.

Ajudar a equipe a decidir as melhores tecnologias para cada projeto, obter requisitos para novas solu????es, liderar os outros engenheiros, removendo impedimentos, discutir com outros l??deres, e equipe o processo ??gil para tornar as coisas melhores e mais r??pidas, tamb??m tomei decis??es em dificuldades e momentos de press??o.
                
Tenho desenvolvido sistemas para os clientes, utilizando React, Nextjs, Redux, API Gateways, Java, PHP, GO, m??todos ??geis, entre outras ferramentas, ideias e bibliotecas. Al??m disso, usamos monitores de sistema como New Relic e Splunk para saber como estava a integridade de nosso sistema e as depend??ncias de nossos microsservi??os.
                
Meu foco tamb??m foi dar a melhor experi??ncia ao cliente final. Sempre pensando em projetar sistema, unidade, integrado, E2E e muitos outros testes, processo de build, componentes reutiliz??veis, escalabilidade e o melhor desempenho em cada render.
                
J?? trabalhei na constru????o de microsservi??os internos com NodeJS usando Typescript, Kafka, Amazon RDS, Amazon DynamoDB e outras tecnologias.`,
        position: 'Engenheiro de Software S??nior / L??der T??cnico',
        site: 'pagseguro.com.br',
      },
      {
        startDate: '12.2015',
        endDate: '03.2017',
        title: 'Netbiis',
        description: `Desenvolvimento do sistema de gest??o da Engel & V??lkers com AngularJS. Tive contato direto com parceiros de diversas nacionalidades, ingl??s forte para me comunicar.

Em outros projetos para grandes jogadores como a TIM (companhia telef??nica), usei bastante o Angular 2 e o Ionic 2.`,
        position: 'Engenheiro Frontend Pleno',
        site: 'netbiis.com',
      },
      {
        startDate: '04.2014',
        endDate: '12.2015',
        title: 'RMC Brothers',
        description: `Desenvolvimento e manuten????o de diversos sites, sistemas e aplicativos a partir do zero. Muitos projetos com AngularJS e outras estruturas Javascript como jQuery, Underscore, Breeze, LinqJS e outras bibliotecas.

No backend, participei de v??rios projetos .NET e PHP (WordPress).`,
        position: 'Engenheiro Fullstack Pleno',
        site: 'rmcbrothers.com.br',
      },
      {
        startDate: '07.2013',
        endDate: '04.2014',
        title: 'Plaay',
        description: `Fui o primeiro funcion??rio dessa startup e da equipe de engenharia. Criei uma plataforma de web music com ??nfase nas redes sociais, permitindo que os usu??rios se sigam e vejam as m??sicas da linha do tempo de seus amigos.

Tenho feito manuten????o de web services em PHP (CakePHP), incluindo alguns crawlers para obter dados de outros dom??nios. Forte uso de APIs de m??dia social, como Facebook, Twitter, Google+ e YouTube. Toda a aplica????o frontend foi desenvolvida usando Backbone, Underscore e outras bibliotecas.`,
        position: 'Engenheiro Fullstack Junior',
      },
      {
        startDate: '07.2012',
        endDate: '07.2013',
        title: 'Foster WPP',
        description: `Est??gio em desenvolvimento de Front e Backend. Trabalhei com HTML5, CSS3, Javascript, jQuery e ASP.NET C #. J?? fiz muitos newsletters, posts em blogs e templates para grandes jogadores, como Danone, Goodyear, Bayer, AcerlorMittal, AC Camargo Cancer Center, Marfrig e outros.`,
        position: 'Engenheiro Estagi??rio',
        site: 'foster.com.br',
      },
    ],
    educations: [
      {
        title: 'Jogos Digitais',
        institution: 'FIAP',
        startDate: '2016',
        endDate: '2017',
      },
      {
        title: 'Ci??ncia da Computa????o',
        institution: 'Uninove',
        startDate: '2012',
        endDate: '2015',
      },
    ],
    awards: [
      {
        startDate: '10.2017',
        title: 'Segundo Lugar - BGJAM - Brasil Game Show (BGS)',
        description:
          'A Globo (globo.com) criou este desafio no maior evento de games da Am??rica Latina. Eu e minha equipe desenvolvemos do zero um novo jogo para melhorar o jogo "Cartola FC" em 48 horas.',
        photo: 'bgjam-bgs-2017.png',
        photoAlt:
          'Todos os participantes da BGJam na frente do est??dio da Globo',
      },
      {
        startDate: '11.2016',
        title: 'Primeiro Lugar - UOL Host Hackathon',
        description:
          'Criamos uma solu????o de mercado para B2B2C, reunindo fornecedores, microempres??rios e clientes. Criei todo o front end (com dados falsos e utilizando requisi????es de API de produtos) em menos de 24 horas.',
        photo: 'hackathon-uol-host-2016.png',
        photoAlt:
          'Gustavo e os outros vencedores na frente da fachada do Hackathon UOL Host',
      },
    ],
    metatags: {
      title: 'A jornada de um engenheiro de software - Gustavo Sales',
      description:
        'Estou 10 anos na estrada, ?? muita historia, muitos projetos e muitas pessoas. Aqui eu quero compartilhar com um pouco mais de detalhes a minha jornada desde 2012.',
    },
  },
  blog: {
    title: 'Blog',
    description:
      'A escrita ?? uma das maneiras mais legais de se expressar, e n??o seria diferente para falar sobre carreira e tecnologia e de quebra alguns posts sobre minha vida.',
    metatags: {
      title: 'Artigos e posts - Blog - Gustavo Sales',
      description:
        'A escrita ?? uma das maneiras mais legais de se expressar, este ?? o meu blog pessoal, um lugar onde escrevo artigos t??cnicos e posts sobre carreira e minha vida.',
    },
    postedAt: 'Postado em',
  },
};
