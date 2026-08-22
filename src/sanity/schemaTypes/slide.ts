import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'slide',
  title: 'Slideshow Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'imageUrl',
      title: 'Background Image URL',
      type: 'string',
      description: 'Optional external image URL, or a site path such as /uploads/hero.jpg',
    }),
    defineField({
      name: 'video',
      title: 'Background Video URL',
      type: 'string',
      description: 'YouTube, Vimeo, or uploaded video path',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      active: 'active',
      order: 'order',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, active, order, media } = selection
      return {
        title,
        subtitle: `${subtitle} • Order: ${order} • ${active ? 'Active' : 'Inactive'}`,
        media,
      }
    },
  },
})
