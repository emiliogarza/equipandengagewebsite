import { defineType, defineField } from 'sanity';

export const pageIntro = defineType({
    name: 'pageIntro',
    type: 'document',
    title: 'Page Intro Text',
    fields: [
        defineField({
            title: 'Eyebrow',
            name: 'eyebrow',
            type: 'string'
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Sub Title',
            name: 'subTitle',
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
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
});