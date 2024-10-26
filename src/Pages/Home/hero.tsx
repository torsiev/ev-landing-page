import React from "react";
import Image from "next/image";
import CS1 from "../images/CS-1.png"
// import stroom from "../images/stroom.png"
import konversi from "../images/konversi.png"
import str2 from "../../images/Str-2-min.png"

export default function Hero() {
    return (
      <div className="hero min-h-screen">
        <Image className="h-screen w-full object-cover" src={str2} alt="background" />
        
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center p-4 md:p-8">
          <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
            <h1 className="mb-3 text-2xl md:text-4xl font-bold text-white">Welcome to Torsi EV</h1>
            <p className="mb-4 text-sm md:text-lg lg:text-xl text-white">
            Kami berusaha memberikan pelayanan terbaik. Bergabung dengan kami dan nikmati pengalaman yang berbeda.
            </p>
            <button className="btn bg-sky-600 border-none text-white px-10 md:px-20 hover:bg-sky-700 hover:border-none">Get Started</button>
          </div>
        </div>
      </div>
    )
}