import { GlobalConfig } from "payload";

export const Bio: GlobalConfig = {
    slug: "bio",
    fields: [
        {
            name: "bioText",
            type: "textarea"
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
        }
    ]
}