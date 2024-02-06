import { defineType, defineField } from 'sanity';

export const textContent = defineType({
    name: 'textContent',
    type: 'document',
    title: 'Text Content Section with Background Color',
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
        }),
        defineField({
            title: 'Section Background Color',
            name: 'bgcolor',
            type: 'string',
            options: {
                list: [
                    {title: 'White', value: 'white'},
                    {title: 'Dark Blue', value: 'darkBlue'},
                    {title: 'Black', value: 'black'},
                ],
            }
        }),
        defineField({
            title: 'Content List',
            name: 'contentList',
            type: 'array',
            of: [{
                type: 'contentListItem'
            }]
        })
    ]
});