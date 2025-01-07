import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
    slug: 'news',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true 
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
        }
    ]
}