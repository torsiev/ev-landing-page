import React from "react";
import Image from "next/image";
import CS1 from "../images/CS-1.png"
// import stroom from "../images/stroom.png"
import konversi from "../images/konversi.png"
import str2 from "../../images/Str-2-min.png"

export default function Hero() {
    return (
      <div className="hero min-h-screen">
        <Image className="h-screen" src={str2} alt="background" />
        
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Torsi EV</h1>
            <p className="mb-5 text-white">
            Kami berusaha memberikan pelayanan terbaik. Bergabung dengan kami dan nikmati pengalaman yang berbeda.
            </p>
            <button className="btn bg-sky-400 border-transparent text-white">Get Started</button>
          </div>
        </div>
      </div>
    )
}