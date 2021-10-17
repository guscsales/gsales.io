import Database from '../database';

const CACHE_TABLE_NAME = 'cache';

export type CacheSettings = {
  name: string;
  data: any;
};

function save({ name, data }: CacheSettings) {
  Database.updateById({
    table: CACHE_TABLE_NAME,
    id: name,
    data: { value: JSON.stringify(data) },
  });
}

async function read(name: string) {
  const { value } = await Database.findById({
    table: CACHE_TABLE_NAME,
    id: name,
  });

  return JSON.parse(value);
}

const Cache = {
  save,
  read,
};

export default Cache;
