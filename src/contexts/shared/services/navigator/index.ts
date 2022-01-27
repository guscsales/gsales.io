type NavigatorItem = {
  key: string;
  url: string;
  target?: string;
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
    key: 'blog',
    url: '/blog',
  },
  {
    key: 'wall',
    url: '/wall',
  },
  {
    key: 'channel',
    url: 'https://canal.gsales.io',
    target: '_blank',
  },
];

export default navigator;
