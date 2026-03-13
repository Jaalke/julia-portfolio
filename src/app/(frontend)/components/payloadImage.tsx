import { Media } from "../../../payload-types";

interface PayloadImageProps {
    pic: number | Media | null | undefined,
    size?: number,
    className?: string
}

export default function PayloadImage(props: PayloadImageProps) {
    if (typeof props.pic !== "string" && typeof props.pic !== "number" && props?.pic?.url) {
        return (<img
        className={props?.className}
        src={props.pic.url}
        alt="Media"/>);
    } else {
        return (null);
    }
}