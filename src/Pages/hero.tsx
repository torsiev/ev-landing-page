import React from "react";
import Image from "next/image";
import CS1 from "../images/CS-1.jpg"
// import stroom from "../images/stroom.jpg"
import konversi from "../images/konversi.jpg"
import str1 from "../images/Str-1.jpg"

export default function Hero() {
    return (
      <div className="hero min-h-screen bg-gradient-to-r from-ored to-lred text-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="carousel w-full lg:w-1/2 rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
              <Image className="w-800 h-400" src={ str1 } alt="Slide 1" />
              <div className="flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <Image className="w-800 h-400" src={CS1} alt="slide 2"></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <Image className="w-800 h-400" src={konversi} alt="slide 3"></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left lg:w-1/2 text-white">
            <h1 className="text-5xl font-bold">Welcome to Torsi EV</h1>
            <p className="py-6">We provide the best services to make your life better. Join us and start your journey with us today.</p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    )
}