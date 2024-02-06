import { defineType, defineField } from 'sanity';

export const page = defineType({
    title: 'Marketing Page',
    name: 'page',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        defineField({
            name: 'pageContent',
            type: 'array',
            title: 'Content Blocks',
            of: [
              {
                type: 'reference',
                to: [
                    { type: 'pageIntro' },
                    { type: 'textContent' }
                ],
              },
            ]
        })
    ]
});