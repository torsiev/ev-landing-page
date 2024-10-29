import React from "react";
import Image from "next/image";
import str2 from "@/images/Str-2-min.png"

export default function Hero() {
    return (
      <div className="hero min-h-screen">
        <Image className="h-screen w-full object-cover" src={str2} alt="background" />
        
        <div className="hero-overlay bg-sky-700 bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center p-4 md:p-8">
          <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
            <h1 className="mb-3 text-2xl md:text-4xl font-bold text-white">Welcome to Torsi EV</h1>
            <p className="mb-4 text-sm md:text-lg lg:text-xl text-white">
            Kami berusaha memberikan pelayanan terbaik. Bergabung dengan kami dan nikmati pengalaman yang berbeda.
            </p>
            <button className="btn w-32 h-10 bg-sky-500 border-none text-white hover:bg-sky-600 hover:border-none">Get Started</button>
          </div>
        </div>
      </div>
    )
}