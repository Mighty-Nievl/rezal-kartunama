import { getCollection } from 'astro:content';
import { readingTime } from 'reading-time-estimator';

export async function getBlogPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });

  posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      readingTime: Math.ceil(readingTime(post.body).minutes),
    },
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getCollection('blog');
  return posts.find((post) => post.slug === slug);
}

export async function getPostsByTag(tag: string) {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getAllTags() {
  const posts = await getBlogPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export async function getTagsWithCount() {
  const posts = await getBlogPosts();
  const tagCount = new Map<string, number>();
  
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

export async function getRelatedPosts(currentPost: any, limit = 3) {
  const posts = await getBlogPosts();
  const related = posts.filter(
    (post) =>
      post.slug !== currentPost.slug &&
      post.data.tags.some((tag) => currentPost.data.tags.includes(tag))
  );
  return related.slice(0, limit);
}

export async function getPaginatedPosts(page: number, limit = 5) {
  const posts = await getBlogPosts();
  const totalPages = Math.ceil(posts.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    currentPage: page,
    totalPages,
    hasPrev: page > 1,
    hasNext: page < totalPages,
  };
}

export async function searchPosts(query: string) {
  const posts = await getBlogPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter((post) => {
    const titleMatch = post.data.title.toLowerCase().includes(lowercaseQuery);
    const descMatch = post.data.description.toLowerCase().includes(lowercaseQuery);
    const tagMatch = post.data.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery));
    const contentMatch = post.body.toLowerCase().includes(lowercaseQuery);
    
    return titleMatch || descMatch || tagMatch || contentMatch;
  });
}
