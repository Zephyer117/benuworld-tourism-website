import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'inquiry',
  title: 'Inquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      status: 'status',
    },
    prepare({ name, email, status }) {
      return {
        title: name || 'No name',
        subtitle: `${email || 'No email'} · ${status || 'new'}`,
      }
    },
  },
})
