const RedirectUrlsMapper = {
    ['node']: 'https://www.youtube.com/watch?v=q0DQEKDEFZk&list=PLFRnIPKyoBHhlXP2RQsJHuicj4e6sM0ys&index=2&ab_channel=GusQuemFala'
}

function Redirect () {
    return null;
}

export const getServerSideProps = async (context) => {
    const { params, res } =  context;
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
}

export default Redirect