import type { CollectionConfig } from 'payload'

export const Updates: CollectionConfig = {
    slug: 'updates',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true
        },
        {
            name: 'desc',
            label: 'Description',
            type: 'textarea',
        }
    ]
}