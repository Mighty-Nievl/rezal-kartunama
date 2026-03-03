import type { APIRoute } from 'astro';
import { searchPosts, getPostsByTag } from '../../lib/blog';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q') || '';
  const tag = url.searchParams.get('tag') || '';

  let results;

  if (tag && !query) {
    results = await getPostsByTag(tag);
  } else if (query && !tag) {
    results = await searchPosts(query);
  } else if (query && tag) {
    const searched = await searchPosts(query);
    results = searched.filter((post) => post.data.tags.includes(tag));
  } else {
    results = [];
  }

  return new Response(
    JSON.stringify(results.map((post) => ({
      slug: post.slug,
      data: {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate.toISOString(),
        tags: post.data.tags,
        readingTime: post.data.readingTime,
      },
    }))),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
