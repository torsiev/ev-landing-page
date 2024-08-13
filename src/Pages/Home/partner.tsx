import React from "react";
import Image from "next/image";
import Link from "next/link";
import volta from "@/images/volta-light.png"
import dms   from "@/images/dms.png" 
import telyu from "@/images/telyu.png"
import abe   from "@/images/ABELogoWebsiteTransparent.png"
import left from "../../images/line-left.png"
import right from "../../images/line-right.png"

export default function Partner() {
    return (
        <section className="py-6 md:py-24 lg:py-24">
            <div className="grid items-center py-4 justify-center text-center">
            <div className="flex flex-row gap-10 justify-center">
                <Image className="h-min mt-3" src={left} alt="line-left" />
                <h1 className="text-5xl font-bold text-sky-500 text-center">Partners</h1>
                <Image className="h-min mt-3" src={right} alt="line-right" />
            </div>
                <div className="grid grid-cols-4 items-center justify-center gap-7 py-9 bg-white">
                    <Link href="https://telkomuniversity.ac.id" target="_blank">
                        <Image className="w-72" src={telyu} alt="logoitelyu"/>
                    </Link>
                    <Link href="https://voltaindonesia.com" target="_blank">
                        <Image className="w-72" src={volta} alt="logovolta"/>
                    </Link>
                    <Link href="https://digitalmultisinergy.co.id/" target="_blank">
                        <Image className="w-72" src={dms} alt="logodms"/>
                    </Link>
                    <Link href="https://alphabetaengineering.id/" target="_blank">
                        <Image className="w-72" src={abe} alt="logoabe"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}