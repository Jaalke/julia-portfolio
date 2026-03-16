import { getPayload } from "payload";
import config from "@payload-config";

export const dynamic = 'force-dynamic';

export default async function Footer() {

  const payload = await getPayload({ config });
  const bio = await payload.findGlobal({
    slug: "bio",
    depth: 1
  });

    return (
        <div className="mt-30 mb-50 opacity-35 font-light text-s">
            <p>&copy; {bio.name}</p>
            <p>Webpage by <a href="https://github.com/Jaalke">Jan Franciszek Adamski</a></p>
            <p>2026</p>
        </div>
    )
}