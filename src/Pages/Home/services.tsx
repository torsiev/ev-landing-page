import React from "react";
import Image from "next/image";
import charging from "@/images/charging.png";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";
import ice from "@/images/Str-4.png";
import stroom from "@/images/Str-1.png";
import arrow from "@/images/arrow-button.svg";

export default function Services() {
  return (
    <div className="container mx-auto max-w-screen-lg my-auto px-4">
      <div className="mt-5 flex flex-row gap-10 justify-center mb-5 items-center">
        <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
        <h1 className="text-2xl md:text-3xl mt-5 font-bold text-sky-500 text-center">
          Services
        </h1>
        <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
      </div>

      <div className="flex flex-col lg:flex-row gap-5 place-items-center">

        <div className="card bg-white w-full shadow-xl text-black">
          <figure className="px-5 pt-5">
            <Image className="rounded" src={charging} alt="charging" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Charging Station</h2>
            <p className="text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-none ">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-white w-full shadow-xl text-black">
          <figure className="px-5 pt-5">
            <Image className="rounded" src={ice} alt="ice" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ICE to EV Conversion</h2>
            <p className="text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white w-full shadow-xl text-black">
          <figure className="px-5 pt-5">
            <Image className="rounded" src={stroom} alt="ice" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">STROOM! - Electric Vehicle</h2>
            <p className="text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="card-actions justify-end">
              <button className="group btn bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                Read More
                {/* <Image className="" src={arrow} alt="arrow" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
