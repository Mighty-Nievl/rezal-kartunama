import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Rezal Helwin Bramantara | Blog',
    description: 'Thoughts, tutorials, and insights about web development',
    site: 'https://rezal.online',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
    })),
    customData: `<language>id-id</language>`,
  });
}
