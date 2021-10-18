export type StorageSettings = {
  key: string;
  data: any;
};

function save({ key, data }: StorageSettings) {
  localStorage.setItem(key, JSON.stringify(data));
}

function read(key: string) {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

const Storage = {
  save,
  read,
};

export default Storage;
