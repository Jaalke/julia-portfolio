import { getPayload } from "payload";
import config from "@payload-config";
import { Mail, Phone, Camera } from "lucide-react";

export default async function Contact() {

  const payload = await getPayload({ config });
  const contact = await payload.findGlobal({
    slug: "contact",
    depth: 1
  });

  return ( 
  <div className="grid grid-cols-1 gap-3">
    {contact?.email && (<div className="flex flex-cols-2 gap-12"><Mail/>{contact.email}</div>)}
    {contact?.phone && (<div className="flex flex-cols-2 gap-12"><Phone/>{contact.phone}</div>)}
    {contact?.instagram && (<div className="flex flex-cols-2 gap-12"><Camera/>{contact.instagram}</div>)}
  </div>);
}