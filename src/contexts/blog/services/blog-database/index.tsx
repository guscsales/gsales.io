import Normalizer from '@contexts/shared/services/normalizer';
import { Client as NotionClient } from '@notionhq/client';

const notion = new NotionClient({ auth: process.env.NOTION_SECRET_KEY });

interface IBlogPost {
  id: string;
  title: string;
  slugs: { [key in string]: string };
  createdAt: string;
  description: string;
}

async function getPosts(locale: string): Promise<IBlogPost[]> {
  const databaseId = process.env.NOTION_POSTS_DATABASE_ID.toString();

  const { results } = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'language',
          select: {
            equals: locale,
          },
        },
      ],
    },
  });

  if (!results) {
    return [];
  }

  const posts = Normalizer.objectKeys(results);

  return posts.map(
    ({ id, createdTime, properties: { title, description, slugs } }) => ({
      id,
      title: title.title[0].plainText,
      slugs: JSON.parse(slugs.richText[0].plainText),
      description: description.richText[0].plainText,
      createdAt: createdTime,
    })
  );
}

const BlogDatabase = {
  getPosts,
};

export default BlogDatabase;
