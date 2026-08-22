import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Contact Type',
      type: 'string',
      options: {
        list: [
          { title: 'Phone', value: 'phone' },
          { title: 'Email', value: 'email' },
          { title: 'WeChat', value: 'wechat' },
          { title: 'QQ', value: 'qq' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Address', value: 'address' },
          { title: 'Business Hours', value: 'hours' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      type: 'type',
      label: 'label',
      value: 'value',
      active: 'active',
    },
    prepare(selection) {
      const { type, label, value, active } = selection
      return {
        title: `${label} (${type})`,
        subtitle: `${value} • ${active ? 'Active' : 'Inactive'}`,
      }
    },
  },
})
