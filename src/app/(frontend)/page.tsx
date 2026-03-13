import { getPayload } from "payload";
import config from "@payload-config";

export default async function Home() {

  const payload = await getPayload({ config });
  const bio = await payload.findGlobal({
    slug: "bio",
    depth: 1
  });

  return (
  <></>);
}
