const RedirectUrlsMapper = {
  node: 'https://www.youtube.com/watch?v=q0DQEKDEFZk&list=PLFRnIPKyoBHhlXP2RQsJHuicj4e6sM0ys&index=2&ab_channel=GusQuemFala',
  'curso-de-ingles': 'https://go.hotmart.com/S56903817H?dp=1',
  'ola-mundo':
    'https://www.youtube.com/watch?v=p8LtuO9XC7w&list=PLFRnIPKyoBHhlXP2RQsJHuicj4e6sM0ys&index=6&ab_channel=GusQuemFala',
  'instalar-node':
    'https://www.youtube.com/watch?v=zgDlT7bzUi4&list=PLFRnIPKyoBHhlXP2RQsJHuicj4e6sM0ys&index=3',
  'package-json-docs':
    'https://docs.npmjs.com/cli/v8/configuring-npm/package-json',
  'projetos-frontend':
    'https://www.figma.com/file/J3p5rmvQmacpyFyyogFspN/Gus-Quem-Fala---Ideias-de-Projetos-Frontend?node-id=1%3A9',
};

function Redirect() {
  return null;
}

export const getServerSideProps = async (context) => {
  const { params, res } = context;
  const externalUrl = RedirectUrlsMapper[params.redirect];

  if (!externalUrl) {
    res.end();
  }

  return {
    redirect: {
      destination: externalUrl,
      permanent: true,
    },
  };
};

export default Redirect;
