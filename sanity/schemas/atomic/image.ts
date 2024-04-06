import { defineType, defineField } from 'sanity';


export const cmsImage = defineType({
    title: "Image",
    name: "cmsImage",
    type: "object",
    fields: [
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              },
              {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              },
              {
                name: 'link',
                type: 'cmsLink',
                title: 'Optional Link',
              }
            ]
        })
    ]
});