"use client";

import { Work } from "@/payload-types";
import PayloadImage from "./payloadImage";
import { format } from "date-fns";
import { Dialog } from "@base-ui/react";
import { X } from "lucide-react";

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
            <PayloadImage pic={props.work.image} className="h-64 w-200 object-none"/>
            </Dialog.Trigger>
        </div>
        <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 min-h-dvh backdrop-blur-sm bg-black/10 transition-all duration-75 data-ending-style:opacity-0 data-starting-style:opacity-0"/>
                <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
                    {/* <Dialog.Close className="mb-2 hover:cursor-pointer"><X color="red" size="42"/></Dialog.Close> */}
                    <div className="grid grid-cols-7 bg-gray-50 p-6 outline-1 outline-gray-200">
                        <div className="col-span-2">
                            <Dialog.Title className="italic font-serif text-3xl">
                                {props.work.name}
                            </Dialog.Title>
                            <Dialog.Description className="pt-1 font-sans font-extralight text-xl">
                                {format(props.work.date, "LLLL yyyy")}
                            </Dialog.Description>
                            <Dialog.Description className="pt-1 font-sans font-extralight text-black/60">
                                {props.work.material}, {props.work.dimensions}
                            </Dialog.Description>
                            <Dialog.Description className="py-5 font-sans font-extralight">
                                {props.work.description}
                            </Dialog.Description>
                        </div>
                        <PayloadImage pic={props.work.image} className="pl-8 col-span-5 max-h-[90vh]" size={800}/>
                    </div>
                </Dialog.Popup>
        </Dialog.Portal>
    </Dialog.Root>);
}