import { getPayload } from "payload";
import config from "@payload-config";
import WorkListing from "../components/workListing";

export const dynamic = 'force-dynamic';

export default async function Works() {

  const payload = await getPayload({ config });
  const works = await payload.find({
    collection: "works"
  });

  works.docs.sort( (a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  });

  return (
    <div>
      {works.docs.map( (work, i) => {
        return (
        <div key={`${i}`}>
          <WorkListing work={work}/>
        </div>
      );
      })}
    </div>
  );
}