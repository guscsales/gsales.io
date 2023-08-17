export const mainNavigatorItems = {
  pages: [
    {
      id: 'home',
      href: '/',
      state: 'idle',
      label: 'Home',
    },
    {
      id: 'journey',
      href: '/journey',
      state: 'idle',
      label: 'Journey',
    },
    {
      id: 'projects',
      href: '/projects',
      state: 'idle',
      label: 'Projects',
    },
    {
      id: 'wall',
      href: '/wall',
      state: 'idle',
      label: 'Wall',
    },
    {
      href: '/blog',
      state: 'disabled',
      label: 'Blog',
      soon: true,
    },
  ],
  interactions: [
    {
      id: 'message-4-u',
      label: 'Message 4 U',
      state: 'disabled',
    },
  ],
  themes: [
    {
      id: 'light',
      label: 'Light',
    },
    {
      id: 'dark',
      label: 'Dark',
    },
    {
      id: 'system',
      label: 'System',
    },
  ],
};
