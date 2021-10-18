import navigator from '@contexts/shared/services/navigator';

const SITE_DOMAIN = 'https://gsales.io';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${navigator
          .map(
            ({ url }) => `<url>
            <loc>${SITE_DOMAIN}${url}</loc>
          </url>
          <url>
                <loc>${SITE_DOMAIN}/pt${url}</loc>
            </url>
          `
          )
          .join('')}
     </urlset>
   `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  console.log(sitemap);

  res.setHeader('Content-Type', 'text/xml');

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
