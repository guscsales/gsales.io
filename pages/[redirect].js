const RedirectUrlsMapper = {
    ['node']: 'https://youtu.be/q0DQEKDEFZk'
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