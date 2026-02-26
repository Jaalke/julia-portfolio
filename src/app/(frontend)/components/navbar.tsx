import Link from "next/link";

export default function Footer() {

    const linkCss = "pl-2 pr-2 border-s-1 transition-all duration-200 ease-in hover:bg-black hover:text-white hover:pl-5 hover:pr-5";

    return (
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
    )
}