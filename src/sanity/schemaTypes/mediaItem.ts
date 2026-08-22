import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mediaItem',
  title: 'Media Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Document', value: 'document' },
        ],
      },
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
    }),
    defineField({
      name: 'routeId',
      title: 'Route ID',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'sanityAssetId',
      title: 'Sanity Asset ID',
      type: 'string',
    }),
    defineField({
      name: 'uploadedAt',
      title: 'Uploaded At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      url: 'url',
    },
    prepare({ name, type, url }) {
      return {
        title: name || 'Untitled',
        subtitle: `${type} · ${url || 'No URL'}`,
      }
    },
  },
})
