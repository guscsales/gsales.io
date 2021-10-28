import camelcaseKeys from 'camelcase-keys';

function objectKeys(data: any) {
  return camelcaseKeys(data, { deep: true });
}

const Normalizer = {
  objectKeys,
};

export default Normalizer;
