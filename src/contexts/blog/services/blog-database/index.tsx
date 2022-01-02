import Normalizer from '@contexts/shared/services/normalizer';
import { Client as NotionClient } from '@notionhq/client';
import NotionPageToHtml from 'notion-page-to-html';

const notion = new NotionClient({ auth: process.env.NOTION_SECRET_KEY });
const databaseId = process.env.NOTION_POSTS_DATABASE_ID.toString();

interface IBlogPost {
  id: string;
  title: string;
  slugs: { [key in string]: string };
  slug: string;
  createdAt: string;
  description: string;
  url: string;
}

export interface IBlogPostDetail extends IBlogPost {
  content: string;
}

type PostsFilter = {
  locale?: string;
  slug?: string;
};

async function getPosts({ locale, slug }: PostsFilter = {}): Promise<
  IBlogPost[]
> {
  const sorts: any = [
    {
      property: 'customDate',
      direction: 'descending',
    },
  ];

  let filter: any = {
    and: [
      {
        property: 'active',
        select: {
          equals: 'true',
        },
      },
    ],
  };

  if (locale) {
    filter = {
      and: [
        ...filter?.and,
        {
          property: 'language',
          select: {
            equals: locale,
          },
        },
      ],
    };
  }

  if (slug) {
    filter = {
      and: [
        ...filter?.and,
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          },
        },
      ],
    };
  }

  const { results } = await notion.databases.query({
    database_id: databaseId,
    filter,
    sorts,
  });

  if (!results) {
    return [];
  }

  const posts = Normalizer.objectKeys(results);

  return posts.map(
    ({
      id,
      createdTime,
      lastEditedTime,
      url,
      properties: { title, description, slugs, slug, customDate },
    }) => ({
      id,
      title: title.title[0].plainText,
      slugs: JSON.parse(slugs.richText[0].plainText),
      slug: slug.richText[0].plainText,
      description: description.richText[0].plainText,
      createdAt: customDate?.date?.start || createdTime,
      lastEditedTime,
      url,
    })
  );
}

async function getPostBySlug(slug: string): Promise<IBlogPostDetail> {
  const [post] = await getPosts({ slug });
  const { title, html } = await NotionPageToHtml.convert(post.url, {
    bodyContentOnly: true,
  });

  return { ...post, title, content: html };
}

const BlogDatabase = {
  getPosts,
  getPostBySlug,
};

export default BlogDatabase;
