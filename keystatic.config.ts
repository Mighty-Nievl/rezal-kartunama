import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'Mighty-Nievl',
      name: 'rezal-kartunama',
    },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      labelField: 'title',
      path: 'src/content/blog/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: {
              isRequired: true,
            },
          },
        }),
        description: fields.text({
          label: 'Description',
          validation: {
            isRequired: true,
          },
        }),
        pubDate: fields.date({
          label: 'Publication Date',
          validation: {
            isRequired: true,
          },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        categories: fields.array(fields.text({ label: 'Category' }), {
          label: 'Categories',
          itemLabel: (props) => props.value,
        }),
        cover: fields.image({
          label: 'Cover Image',
          directory: 'public/blog-covers',
          publicPath: '/blog-covers',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: false,
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'Rezal Helwin Bramantara',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            heading: [2, 3, 4, 5, 6],
          },
        }),
      },
    }),
  },
});
