import React from "react";
import Image from "next/image";
import Link from "next/link";
import volta from "@/images/volta-light.png"
import dms   from "@/images/dms.png" 
import telyu from "@/images/telyu.png"
import abe   from "@/images/ABELogoWebsiteTransparent.png"
import left from "@/images/left-1.svg"
import right from "@/images/right-1.svg"

export default function Partner() {
    return (
        <section className="mt-5">
            <div className="grid items-center py-4 justify-center text-center">
            <div className="flex flex-row md:gap-10 justify-center mb-5 items-center">
            <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
                <h1 className="text-2xl md:text-3xl mt-5 font-bold text-sky-500 text-center">Partnership</h1>
            <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
            </div>
                <div className="flex flex-row items-center justify-center gap-5 py-5 bg-white w-screen">
                    <Link href="https://telkomuniversity.ac.id" target="_blank">
                        <Image className="w-48 md:w-72" src={telyu} alt="logotelyu"/>
                    </Link>
                    <Link href="https://voltaindonesia.com" target="_blank">
                        <Image className="w-48 md:w-72" src={volta} alt="logovolta"/>
                    </Link>
                    <Link href="https://digitalmultisinergy.co.id/" target="_blank">
                        <Image className="w-48 md:w-72" src={dms} alt="logodms"/>
                    </Link>
                    <Link href="https://alphabetaengineering.id/" target="_blank">
                        <Image className="w-48 md:w-72" src={abe} alt="logoabe"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}