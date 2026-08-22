import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'defaultLanguage',
      title: 'Default Language',
      type: 'string',
    }),
    defineField({
      name: 'inquiryEmail',
      title: 'Inquiry Email',
      type: 'string',
    }),
    defineField({
      name: 'notificationEmail',
      title: 'Notification Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      siteTitle: 'siteTitle',
      tagline: 'tagline',
    },
    prepare({ siteTitle, tagline }) {
      return {
        title: siteTitle || 'Site Settings',
        subtitle: tagline || 'No tagline',
      }
    },
  },
})
