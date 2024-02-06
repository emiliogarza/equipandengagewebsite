import { defineType, defineField } from 'sanity';


export const contentListItem = defineType({
    title: "Content List Item",
    name: "contentListItem",
    type: "object",
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Text',
            name: 'text',
            type: 'string'
        }),
        defineField({
            title: 'Link',
            name: 'link',
            type: 'cmsLink'
        })
    ]
});