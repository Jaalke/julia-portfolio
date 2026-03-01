import { Media } from "../../../payload-types";
import Image from "next/image";

interface PayloadImageProps {
    pic: number | Media | null | undefined,
    size?: number
}

export default function PayloadImage(props: PayloadImageProps) {
    if (typeof props.pic !== "string" && typeof props.pic !== "number" && props?.pic?.url) {
        return (<Image
        src={props.pic.url}
        alt="Media"
        width={props.size ?? "100"}
        height={props.size ?? "100"}
    />);} else {
        return (null);
    }
}