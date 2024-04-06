import { defineType, defineField } from 'sanity';

export const styledImageSection = defineType({
    name: 'styledImageSection',
    type: 'document',
    title: 'Styled Image Section with Text',
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
            title: 'Styled Image',
            name: 'image',
            type: 'cmsImage'
        }),
        defineField({
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            title: 'Buttons',
            name: 'buttons',
            type: 'array',
            of: [{
                type: 'cmsButton'
            }]
        })
    ]
});