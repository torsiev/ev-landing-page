import React from "react";
import Image from "next/image";
import str2 from "@/images/Str-2-min.png";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <Image
        className="h-screen w-full object-cover"
        src={str2}
        alt="background"
      />
      <div className="hero-overlay bg-slate-800 bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center p-4 md:p-8">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          <h1 className="mb-3 text-2xl md:text-5xl font-bold text-white">
            Welcome to Torsi EV
          </h1>
          <p className="mb-4 text-sm md:text-base lg:text-lg  text-white">
            Kami berusaha memberikan pelayanan terbaik. <br />
            Bergabung dengan kami dan nikmati pengalaman yang berbeda.
          </p>
          <button className="btn rounded-md pl-9 pr-9 h-15 bg-transparent border-white border-[3px] text-white hover:bg-white hover:text-sky-500 hover:border-none">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
