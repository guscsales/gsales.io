import BlogDatabase from '@contexts/blog/services/blog-database';
import navigator from '@contexts/shared/services/navigator';
import { format } from 'date-fns';

const SITE_DOMAIN = 'https://gsales.io';

function generateSiteMap({ posts }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${navigator
          .filter(({ url }) => !url.includes('canal.gsales.io'))
          .map(
            ({ url }) => `<url>
            <loc>${SITE_DOMAIN}${url}</loc>
            <lastmod>2022-09-07</lastmod>
          </url>
          <url>
                <loc>${SITE_DOMAIN}/pt${url}</loc>
                <lastmod>2022-09-07</lastmod>
            </url>
          `
          )
          .join('')}
          ${posts
            .map(
              ({ slug, lastEditedTime }) => `<url>
              <loc>${SITE_DOMAIN}${`/pt/blog/${slug}`}</loc>
              <lastmod>${format(
                new Date(lastEditedTime),
                'yyyy-MM-dd'
              )}</lastmod>
            </url>
            `
            )
            .join('')}
     </urlset>
   `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const posts = await BlogDatabase.getPosts({ locale: 'pt' });
  const sitemap = generateSiteMap({ posts });

  res.setHeader('Content-Type', 'text/xml');

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
