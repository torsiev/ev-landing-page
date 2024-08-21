import React from "react";
import Image from "next/image";
import charging from "@/images/charging.png"
import left from "@/images/line-left.png"
import right from "@/images/line-right.png"
import ice from "@/images/Str-4.png"
import stroom from "@/images/Str-1.png"

export default function Services() {
    return (
        <div className="container min-w-screen mt-10">
            <div className="flex flex-row gap-10 justify-center">
                <Image className="h-min mt-3" src={left} alt="line-left" />
                <h1 className="text-5xl font-bold text-sky-500 text-center">Services</h1>
                <Image className="h-min mt-3" src={right} alt="line-right" />
            </div>
            <div className="flex flex-row mt-10 gap-10 justify-center">
                <div className="card bg-white w-96 shadow-xl text-black">
                    <figure className="px-5 pt-5">
                        <Image className="rounded" src={charging} alt="charging" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Charging Station</h2>
                        <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-white border-sky-500 text-sky-500">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-white w-96 shadow-xl text-black">
                    <figure className="px-5 pt-5">
                        <Image className="rounded" src={ice} alt="ice" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ICE to EV Conversion</h2>
                        <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-white border-sky-500 text-sky-500">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-white w-96 shadow-xl text-black">
                    <figure className="px-5 pt-5">
                        <Image className="rounded" src={stroom} alt="ice" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">STROOM! - Electric Vehicle</h2>
                        <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-white border-sky-500 text-sky-500">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            


        </div>
    )
}