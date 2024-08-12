import React from "react";
import Image from "next/image";
import CS1 from "../images/CS-1.jpg"
// import stroom from "../images/stroom.jpg"
import konversi from "../images/konversi.jpg"
import str2 from "../../images/Str-2.jpg"

export default function Hero() {
    return (
      <div className="hero min-h-screen">
        <Image className="h-screen" src={str2} alt="background" />
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Torsi EV</h1>
            <p className="mb-5 text-white">
            We provide the best services to make your life better.  Join us and start your journey with us today. We provide the best services to make your life better.  Join us and start your journey with us today.
            </p>
            <button className="btn bg-sky-400 border-transparent text-white">Get Started</button>
          </div>
        </div>
      </div>
    )
}