import { getPayload } from "payload";
import config from "@payload-config";
import PayloadImage from "../components/payloadImage";

export const dynamic = 'force-dynamic';

export default async function About() {

  const payload = await getPayload({ config });
  const bio = await payload.findGlobal({
    slug: "bio",
    depth: 1
  });

  console.log(bio.pic);

  return (
    <div className="max-w-150">
      <PayloadImage pic={bio.pic} className="w-20 ml-8 float-right"></PayloadImage>
      <p className="text-justify">{bio.bioText || "Yes"}</p>
    </div>
  );
}