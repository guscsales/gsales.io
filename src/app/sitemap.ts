import { MetadataRoute } from 'next';

const URL = 'https://gsales.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/journey', '/projects', '/wall'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
