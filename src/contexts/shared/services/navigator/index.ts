type NavigatorItem = {
  key: string;
  url: string;
};

const navigator: NavigatorItem[] = [
  {
    key: 'home',
    url: '/',
  },
  {
    key: 'journey',
    url: '/journey',
  },
  {
    key: 'wall',
    url: '/wall',
  },
];

export default navigator;
