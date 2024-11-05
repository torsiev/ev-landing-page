import Image from "next/image";
import React, { useEffect } from "react";
import Script from "next/script";
import pict1 from "@/images/partner1.png";
import pict2 from "@/images/partner2.png";
import pict3 from "@/images/partner3.png";
import pict4 from "@/images/partner4.png";
import pict5 from "@/images/partner5.png";
import pict6 from "@/images/partner6.png";
import pict7 from "@/images/partner7.png";
import pict8 from "@/images/partner8.png";
import pict9 from "@/images/partner9.png";

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

      <div className="w-full">
        <div className="justify-items-center text-center mb-5">
          <div className="text-black font-bold text-4xl mb-6">
            Collaboration in Action
          </div>

          <div className="flex flex-col gap-3">
            
            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative group">
                  <Image src={pict1} className="size-auto" alt="pict1" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, exercitationem.</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict2} className="size-auto" alt="pict2" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 2</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict3} className="size-auto" alt="pict3" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 3</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative group">
                  <Image src={pict4} className="size-auto" alt="pict1" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 1</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict5} className="size-auto" alt="pict2" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 2</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict6} className="size-auto" alt="pict3" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative group">
                  <Image src={pict7} className="size-auto" alt="pict1" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 1</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict8} className="size-auto" alt="pict2" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 2</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image src={pict9} className="size-auto" alt="pict3" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-center">Deskripsi Gambar 3</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
