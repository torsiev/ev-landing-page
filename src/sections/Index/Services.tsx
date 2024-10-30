import React, { useEffect } from "react";
import Image from "next/image";
import charging from "@/images/charging.png";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";
import ice from "@/images/Str-4.png";
import stroom from "@/images/Str-1.png";
import Head from "next/head";

declare global {
  interface Window {
    AOS: any;
  }
}

export default function Services() {
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

      <div className="container mx-auto max-w-screen-xl my-auto px-4 md:mt-0">
        <div
          className="mt-5 flex flex-row gap-10 justify-center mb-5 items-center"
          data-aos="zoom-in"
        >
          <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
          <h1 className="text-3xl md:text-4xl mt-5 font-bold text-sky-500 text-center">
            Services
          </h1>
          <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
        </div>

        <div className="flex flex-col lg:flex-row gap-9 place-items-center mt-12">
          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={charging} alt="charging" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Charging Station</h2>
              <p className="text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="card-actions justify-end">
                <button className="group btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={ice} alt="ice" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ICE to EV Conversion</h2>
              <p className="text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="1600"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={stroom} alt="ice" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">STROOM! - Electric Vehicle</h2>
              <p className="text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="card-actions justify-end">
                <button className="group btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
