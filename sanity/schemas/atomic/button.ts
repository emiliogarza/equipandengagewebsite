import { defineType, defineField } from 'sanity';


export const cmsButton = defineType({
    title: "Button",
    name: "cmsButton",
    type: "object",
    fields: [
        defineField({
            title: 'Display Text',
            name: 'text',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'Link',
            name: 'link',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'Target',
            name: 'target',
            type: 'string',
            options: {
                list: [
                    {title: 'None', value: ''},
                    {title: 'New Window', value: '_blank'},
                    {title: 'Self', value: '_self'},
                    {title: 'Parent', value: '_parent'},
                    {title: 'Top', value: '_top'}
                ],
            }
        }),
        defineField({
            title: 'White Button?',
            name: 'inverted',
            type: 'boolean'
        })
    ]
});