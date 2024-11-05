import Image from "next/image";
import konversi from "@/images/konversi.png";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Description() {
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

      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row-reverse max-w-screen-xl">
          <div data-aos="fade-left" className="flex w-full h-1/2 place-content-center mt-32">
            <Image
              className="object-cover rounded-md"
              src={konversi}
              alt="konversi"
            />
          </div>
          <div className="text-black text-justify p-10 md:p-20 lg:w-4/5">
            <div data-aos="fade-right">
              <div className="flex flex-row items-center lg:items-start">
                <h1 className="text-3xl md:text-4xl font-bold">
                  About Us
                  <div className="w-35 mt-1 h-1 bg-black" />
                </h1>
              </div>
              <p className="mt-5 text-black">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
