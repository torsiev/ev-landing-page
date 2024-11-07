import Image from "next/image";
import konversi from "@/images/konversi.png";
import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({ duration: 1100 });
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onLoad={() => {
          if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ duration: 1100 });
          }
        }}
      />

      <div className="flex flex-col bg-sky-500">
        <div className="flex flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" className="flex w-full">
            <Image
              className="object-cover max-h-screen"
              src={konversi}
              alt="konversi"
            />
          </div>
          <div className="text-white text-justify bg-sky-500 p-10 md:p-20 lg:w-4/5">
            <div data-aos="fade-right">
              <div className="flex flex-row items-center lg:items-start">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  About Us
                  <div className="w-35 mt-1 h-1 bg-white" />
                </h1>
              </div>
              <p className="mt-5">
                Torsi EV berperan dalam mendukung terciptanya ekosistem Electric
                Vehicle, dengan melakukan kegiatan yang berkaitan tidak terbatas
                pada konversi, produksi, redesain, serta pembuatan perangkat
                pendukung lainnya seperti charging station dan pembangunan
                aplikasi pendukung. Kegiatan tersebut diwujudkan melalui
                penelitian, diseminasi hasil penelitian kegiatan pengabdian
                kepada masyarakat dan pengajaran, publikasi serta pendaftaran
                Hak Atas Kekayaan Intelektual. <br /> <br />
                Kegiatan tersebut diwujudkan melalui penelitian, diseminasi
                hasil penelitian kegiatan pengabdian kepada masyarakat dan
                pengajaran, publikasi serta pendaftaran Hak Atas Kekayaan
                Intelektual.
              </p>
              <Link href="/about">
                <button className="items-center btn btn-sm w-32 h-10 mt-5 bg-transparent border-2 border-white text-white hover:bg-sky-600 hover:text-white hover:border-none">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
