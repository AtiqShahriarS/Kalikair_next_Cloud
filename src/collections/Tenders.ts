import { CollectionConfig } from "payload";

export const Tenders: CollectionConfig = {
    slug: "tenders",
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
            name: 'tenderImages',
            label: 'Tender Images',
            type: 'upload',
            relationTo: 'media',
            hasMany: true,
        }
    ],
    };