import Link from "next/link";

export default function Footer() {
    return (
        <div className="mb-18 text-l text-justify">
            <Link href="/works"> Works</Link> |
            <Link href="/exhibitions"> Exhibitions</Link> |
            <Link href="/about"> About</Link> |
            <Link href="/contact"> Contact</Link>
        </div>
    )
}