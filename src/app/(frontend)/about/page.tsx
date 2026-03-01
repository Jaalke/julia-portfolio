import { getPayload } from "payload";
import config from "@payload-config";
import PayloadImage from "../components/payloadImage";

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
        <PayloadImage pic={bio.pic} size={130}></PayloadImage>
      </p>
    </div>
  );
}