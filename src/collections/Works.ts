import type { CollectionConfig } from 'payload'

export const Works: CollectionConfig = {
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
                rows: 15
            }
        },
        {
            name: "date",
            type: "date",
            required: true,
            admin: {
                date: {
                    pickerAppearance: "monthOnly",
                    displayFormat: "MMM yyyy",
                    maxDate: new Date()
                }
            }
        },
        {
            name: "image",
            type: "upload",
            required: true,
            relationTo: "media",
        }
    ]
}
