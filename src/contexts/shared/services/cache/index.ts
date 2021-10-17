import { promises as fs, existsSync } from 'fs';
import path from 'path';

const CACHE_FOLDER_NAME = '__generated__';

function getCacheFolderPath() {
  return path.resolve(CACHE_FOLDER_NAME);
}

async function createCacheFolder() {
  const cacheFolderSrc = getCacheFolderPath();

  const cacheFolderExists = existsSync(cacheFolderSrc);

  if (!cacheFolderExists) {
    await fs.mkdir(cacheFolderSrc);
  }
}

export type CacheSettings = {
  name: string;
  data: any;
};

function saveCacheAsync({ name, data }: CacheSettings) {
  createCacheFolder();
  fs.writeFile(`${getCacheFolderPath()}/${name}.json`, JSON.stringify(data));
}

async function readCache(name: string) {
  const data = await fs.readFile(`${getCacheFolderPath()}/${name}.json`, {
    encoding: 'utf-8',
  });

  return JSON.parse(data);
}

const Cache = {
  getCacheFolderPath,
  saveCacheAsync,
  readCache,
};

export default Cache;
