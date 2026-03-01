import { format } from "date-fns";
import { getPayload } from "payload";
import config from "@payload-config";
import PayloadImage from "../components/payloadImage";

export default async function Works() {

  const payload = await getPayload({ config });
  const works = await payload.find({
    collection: "works"
  });

  return (
  <div>
    {works.docs.map( (work, i) => {
      return (
      <div key={`${i}`}>
        <div className="mt-10 mb-2 flex flex-row text-xl">
          <h2 className="italic font-serif">{work.name}</h2>
          <p className="pl-3 font-sans font-extralight">{format(work.date, "LLLL, yyyy")}</p>
        </div>
        <PayloadImage pic={work.image} size={800}></PayloadImage>
      </div>
    );
    })}
  </div>
);
}