function Index() {
  return null;
}

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/admin/login',
    permanent: true,
  },
});

export default Index;
