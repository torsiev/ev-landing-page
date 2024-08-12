import React from "react";
import Image from "next/image";
import Link from "next/link";
import volta from "@/images/volta-light.png"
import dms   from "@/images/dms.png" 
import telyu from "@/images/telyu.png"
import abe   from "@/images/ABELogoWebsiteTransparent.png"

export default function Partner() {
    return (
        <section className="min-w-screen py-6 md:py-24 lg:py-24">
            <div className="container grid items-center py-4 justify-center text-center">
                <div className="space-y-3 justify-center">
                    <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h2>
                </div>
                <div className="grid w-full grid-cols-4 items-center justify-center gap-7 py-9">
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