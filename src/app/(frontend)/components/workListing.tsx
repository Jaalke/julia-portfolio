"use client";

import { Work } from "@/payload-types";
import PayloadImage from "./payloadImage";
import { format } from "date-fns";
import { Dialog } from "@base-ui/react";

interface WorkProps {
    work: Work
}

export default function WorkListing(props: WorkProps)  {
    return (
    <Dialog.Root>
        <div>
            <div className="mt-10 mb-2 flex flex-row text-xl">
                <h2 className="italic font-serif">{props.work.name}</h2>
                <p className="pl-3 font-sans font-extralight">{format(props.work.date, "LLLL, yyyy")}</p>
            </div>
            <Dialog.Trigger className="hover:cursor-pointer">
                <PayloadImage pic={props.work.image} size={800}/>
            </Dialog.Trigger>
        </div>
        <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 min-h-dvh backdrop-blur-sm bg-black/10 transition-all duration-75 data-ending-style:opacity-0 data-starting-style:opacity-0"/>
            <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
                <Dialog.Title>{props.work.name}</Dialog.Title>
                <Dialog.Description>Description</Dialog.Description>
                <Dialog.Close>X</Dialog.Close>
            </Dialog.Popup>
        </Dialog.Portal>
    </Dialog.Root>);
}