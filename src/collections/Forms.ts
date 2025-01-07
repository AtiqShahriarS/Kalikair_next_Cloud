import { CollectionConfig } from "payload";

export const Forms: CollectionConfig = {
    slug: "forms",
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true,
        },
        {
            name: "desc",
            label: "Description",
            type: "textarea",
        },
        {
            name: 'attachment',
            label: 'Attachment',
            type: 'upload',
            relationTo: 'media',
        }
    ],
    };