import React from "react";
import Image from "next/image";
import stroom from "@/images/StroomEV.png";
import strItem1 from "@/images/str-items1.png";
import strItem2 from "@/images/str-items2.png";
import strItem3 from "@/images/str-items3.png";
import strItem4 from "@/images/str-items4.png";
import bglayer from "@/images/bg-layer.png"

interface StroomProps {
  id?: string;
}

const Stroom: React.FC<StroomProps> = ({ id }) => {
  return (
    <div id={id} className=" flex flex-col lg:flex-col justify-center">
    {/* <div className="absolute ">
      <Image
        src={bglayer}
        alt="Background Layer"
        layout=""
        className="-translate-x-[36rem] center"
      />
    </div> */}
    <div className="flex flex-col lg:flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-5 justify-center z-20">
        <div className="" data-aos="zoom-in">
          <Image className="w-56 mt-8 lg:mt-0" src={stroom} alt="konversi" />
        </div>

        <div className="flex flex-col justify-center text-black w-3/4 lg:w-1/2" data-aos="fade-right">
          <span className="font-bold text-3xl mb-3">STROOM! - Electric Vehicle</span>
          <p className="text-justify mb-10 lg:mb-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. 
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center relative overflow-x-hidden" data-aos="fade-down">
        <div className="max-w-screen-lg mb-10 lg:mb-5 ">
          <div className="carousel carousel-center h-80 rounded-lg overflow-x-auto gap-x-5">
            <div
              id="strItem1"
              className="carousel-item w-[90%] lg:w-[40%] ml-5 lg:ml-0"
            >
              <Image
                src={strItem1}
                className="object-contain drop-shadow-md"
                alt="Item 1"
              />
            </div>
            <div id="strItem2" className="carousel-item w-[90%] lg:w-[40%]">
              <Image
                src={strItem2}
                className="object-contain drop-shadow-md"
                alt="Item 2"
              />
            </div>
            <div id="strItem3" className="carousel-item w-[90%] lg:w-[40%]">
              <Image
                src={strItem3}
                className="object-contain drop-shadow-md"
                alt="Item 3"
              />
            </div>
            <div
              id="strItem4"
              className="carousel-item w-[90%] lg:w-[40%] mr-5 lg:mr-0"
            >
              <Image
                src={strItem4}
                className="object-contain drop-shadow-md"
                alt="Item 4"
              />
            </div>
          </div>

          {/* Tombol Navigasi Prev dan Next di Luar Carousel */}
          <div className="absolute inset-y-1/2 left-44 transform -translate-y-1/2 overflow-hidden lg:overflow-visible">
            <a
              href="#strItem1"
              className="btn btn-circle bg-transparent border-none shadow-none hover:bg-sky-200 text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m14 7l-5 5l5 5"
                ></path>
              </svg>
            </a>
          </div>
          <div className="absolute inset-y-1/2 right-44 transform -translate-y-1/2 overflow-hidden lg:overflow-visible">
            <a
              href="#strItem4"
              className="btn btn-circle bg-transparent border-none shadow-none hover:bg-sky-200 text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10 17l5-5l-5-5"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stroom;