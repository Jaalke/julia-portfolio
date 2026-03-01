import type { CollectionConfig } from 'payload'

export const Exhibitions: CollectionConfig = {
    slug: "works",
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: "description",
            type: "textarea",
            required: true,
            admin: {
                rows: 20
            }
        },
        {
            name: "date",
            type: "date",
            required: true,
            admin: {
                date: {
                    pickerAppearance: "monthOnly",
                    displayFormat: "MMM yyyy"
                }
            }
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true
        }
    ]
}
