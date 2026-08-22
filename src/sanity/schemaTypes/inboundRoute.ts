import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'inboundRoute',
  title: 'Inbound Route',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'days',
      title: 'Days',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      section: 'section',
      tag: 'tag',
    },
    prepare({ name, section, tag }) {
      return {
        title: name || 'Untitled',
        subtitle: `${section || 'No section'} · ${tag || 'No tag'}`,
      }
    },
  },
})
