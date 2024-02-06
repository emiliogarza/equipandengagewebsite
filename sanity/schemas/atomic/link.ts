import { defineType, defineField } from 'sanity';


export const cmsLink = defineType({
    title: "Link",
    name: "cmsLink",
    type: "object",
    fields: [
        defineField({
            title: 'Display Text',
            name: 'text',
            type: 'string'
        }),
        defineField({
            title: 'Link',
            name: 'link',
            type: 'url'
        })
    ]
});