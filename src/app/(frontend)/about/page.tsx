import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";
import { Media } from "../../../collections/Media";

export default async function About() {

  const payload = await getPayload({ config });
  const bio = await payload.findGlobal({
    slug: "bio",
    depth: 1
  });

  console.log(bio.pic);

  return (
    <div className="flex">
      <p className="w-120 text-justify">
        {bio.bioText || "Yes"}
      </p>
      <p className="ml-20">
        {typeof bio.pic !== "string" && typeof bio.pic !== "number" && bio?.pic?.url ? 
        <Image
          src={bio.pic.url}
          alt="Media"
          width="100"
          height="100"
        /> : null} 
      </p>
    </div>
  );
}