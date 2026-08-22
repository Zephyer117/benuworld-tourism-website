import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Inbound Tourism', value: 'Inbound Tourism' },
          { title: 'Outbound Tourism', value: 'Outbound Tourism' },
          { title: 'Foreign Investment', value: 'Foreign Investment' },
          { title: 'Teaching Curriculum', value: 'Teaching Curriculum' },
          { title: 'Company News', value: 'Company News' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
          { title: 'Scheduled', value: 'scheduled' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Featured Image URL',
      type: 'string',
      description: 'Media library path or external image URL',
    }),
    defineField({
      name: 'gallery',
      title: 'Post-only photos',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'These images appear only on this post, not on the Gallery or other pages.',
    }),
    defineField({
      name: 'body',
      title: 'Body (plain text)',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'image',
      section: 'section',
      status: 'status',
    },
    prepare(selection) {
      const { title, author, media, section, status } = selection
      return {
        title,
        subtitle: `${section} • ${status} • ${author || 'Unknown'}`,
        media,
      }
    },
  },
})
