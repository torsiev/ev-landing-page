import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import volta from "@/images/volta-light.png";
import dms from "@/images/dms.png";
import telyu from "@/images/telyu.png";
import abe from "@/images/ABELogoWebsiteTransparent.png";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";

declare global {
  interface Window {
    AOS: any;
  }
}

export default function Partner() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Tambahkan CSS dan JavaScript AOS dari CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
      </Head>

      <section className="mt-5">
        <div className="grid items-center py-4 justify-center text-center">
          <div
            className="flex flex-row md:gap-10 justify-center mb-5 items-center"
            data-aos="zoom-in"
          >
            <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
            <h1 className="text-3xl md:text-4xl mt-5 font-bold text-sky-500 text-center">
              Partnership
            </h1>
            <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
          </div>
          <div className="flex flex-col items-center lg:flex-row justify-center gap-5 py-5">
            <div className="" data-aos="zoom-in-up">
              <Link href="https://telkomuniversity.ac.id" target="_blank">
                <Image className="w-56" src={telyu} alt="logotelyu" />
              </Link>
            </div>
            <div className="" data-aos="zoom-in-up">
              <Link href="https://voltaindonesia.com" target="_blank">
                <Image className="w-56" src={volta} alt="logovolta" />
              </Link>
            </div>
            <div className="" data-aos="zoom-in-up">
              <Link href="https://digitalmultisinergy.co.id/" target="_blank">
                <Image className="w-56" src={dms} alt="logodms" />
              </Link>
            </div>
            <div className="" data-aos="zoom-in-up">
              <Link href="https://alphabetaengineering.id/" target="_blank">
                <Image className="w-56" src={abe} alt="logoabe" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
