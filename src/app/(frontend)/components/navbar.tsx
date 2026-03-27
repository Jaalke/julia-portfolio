import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function Footer() {

    const payload = await getPayload({ config });
    const bio = await payload.findGlobal({
        slug: "bio",
        depth: 1
    });

    const linkCss = "pl-2 pr-2 border-s-1 transition-all duration-200 ease-in hover:bg-black hover:text-white hover:pl-5 hover:pr-5";

    return (
        <div>
            <h1 className="md:mb-18 md:mt-18 mb-10 mt-18 text-5xl font-serif">{bio.name}</h1>
            <div className="flex mb-18 text-l text-justify">
                <div className={linkCss}>
                    <Link href="/works">works</Link>
                </div>
                <div className={linkCss}>
                    <Link href="/exhibitions">exhibitions</Link>
                </div>
                <div className={linkCss}>
                    <Link href="/about">about</Link>
                </div>
                <div className={linkCss}>
                    <Link href="/contact">contact</Link>
                </div>
            </div>
        </div>
    )
}