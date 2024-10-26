import React from "react";
import Image from "next/image";
import konversi from "@/images/konversi.png";
// import left from "@/images/line-left.png"
// import right from "@/images/line-right.png"
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";

export default function About() {
  return (
    <div className="container mx-auto max-w-screen-lg my-auto px-4">
      <div className="mt-5 flex flex-row md:gap-10 justify-center mb-5 items-center">
        <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
        <h1 className="text-2xl md:text-3xl mt-5 font-bold text-sky-500 text-center">
          About
        </h1>
        <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-32">
        <Image
          className="max-w-full rounded-md lg:max-w-md lg:rounded-md object-contain aspect-auto "
          src={konversi}
          alt="konversi"
        />
        <div className="text-black text-justify">
          <p>
            Torsi EV berperan dalam mendukung terciptanya ekosistem Electric
            Vehicle, dengan melakukan kegiatan yang berkaitan tidak terbatas
            pada konversi, produksi, redesain, serta pembuatan perangkat
            pendukung lainnya seperti charging station dan pembangunan aplikasi
            pendukung. Kegiatan tersebut diwujudkan melalui penelitian,
            diseminasi hasil penelitian kegiatan pengabdian kepada masyarakat
            dan pengajaran, publikasi serta pendaftaran Hak Atas Kekayaan
            Intelektual.
          </p>
          <p className="mt-5">
            Kegiatan tersebut diwujudkan melalui penelitian, diseminasi hasil
            penelitian kegiatan pengabdian kepada masyarakat dan pengajaran,
            publikasi serta pendaftaran Hak Atas Kekayaan Intelektual.
          </p>
        </div>
      </div>
      <div>
        <button className="btn btn-sm w-32 h-10 mt-5 bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-none">
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
