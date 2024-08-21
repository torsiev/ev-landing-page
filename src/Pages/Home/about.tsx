import React from "react";
import Image from "next/image";
import konversi from "@/images/konversi.png"
import left from "@/images/line-left.png"
import right from "@/images/line-right.png"

export default function About() {
    return (
        <div className="container mx-auto w-screen my-auto mt-5">
            <div className="flex flex-row gap-10 justify-center">
                <Image className="h-min mt-3" src={left} alt="line-left" />
                <h1 className="text-5xl font-bold text-sky-500 text-center">About</h1>
                <Image className="h-min mt-3" src={right} alt="line-right" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse gap-32">
                <Image className="max-w-xl rounded" src={konversi} alt="konversi" />
                <div  className="text-black py-6 text-justify">
                  <p>Torsi EV berperan dalam mendukung terciptanya ekosistem Electric Vehicle, dengan melakukan kegiatan yang berkaitan tidak terbatas pada konversi, produksi, redesain, serta pembuatan perangkat pendukung lainnya seperti charging station dan pembangunan aplikasi pendukung. Kegiatan tersebut diwujudkan melalui penelitian, diseminasi hasil penelitian kegiatan pengabdian kepada masyarakat dan pengajaran, publikasi serta pendaftaran Hak Atas Kekayaan Intelektual.</p>
                  <p className="mt-5">Kegiatan tersebut diwujudkan melalui penelitian, diseminasi hasil penelitian kegiatan pengabdian kepada masyarakat dan pengajaran, publikasi serta pendaftaran Hak Atas Kekayaan Intelektual.</p>
                </div>
            </div>
        </div>

    )
}