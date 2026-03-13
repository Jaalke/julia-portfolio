import { GlobalConfig } from "payload";

export const Bio: GlobalConfig = {
    slug: "bio",
    fields: [
        {
            name: "name",
            type: "text",
            defaultValue: "Firstname Lastname"
        },
        {
            name: "bioText",
            type: "textarea",
            admin: {
                rows: 25
            }
        },
        {
            name: "pic",
            type: "upload",
            relationTo: "media",
        }
    ]
}

export const Contact: GlobalConfig = {
    slug: "contact",
    fields: [
        {
            name: "email",
            type: "text"
        },
        {
            name: "phone",
            type: "text"
        },
        {
            name: "instagram",
            type: "text"
        }
    ]
}