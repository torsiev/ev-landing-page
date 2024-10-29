import React from "react";
import Image from "next/image";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";

export default function Contact() {
  return (
    <div className="container mx-auto max-w-screen-lg my-auto px-4 mb-5">
      <div className="flex flex-row gap-10 justify-center mb-5 items-center">
        <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
        <h1 className="text-2xl md:text-3xl mt-5 font-bold text-sky-500 text-center">
          Contact
        </h1>
        <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
      </div>

      {/* Wrapper untuk kartu Alamat, Telepon, dan Email */}
      <div className="flex flex-col lg:flex-row lg:gap-5 justify-center items-center">
        
        {/* Kartu Alamat */}
        <div className="card bg-white w-[100%] lg:w-[30%] shadow-xl text-black mb-5 items-start hover:bg-slate-50">
          <a href="https://maps.app.goo.gl/o5rGZGF2Pwg75DuR6">
          <figure className="p-5">
            <div className="flex flex-row items-start">
              <button className="btn btn-circle mr-5 bg-sky-500 border-none text-white hover:bg-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </button>
              <div className="flex flex-col">
                <div className="font-bold">Alamat</div>
                <div className="text-slate-500">Jl. Telekomunikasi No. 1</div>
              </div>
            </div>
          </figure>
          </a>
        </div>

        {/* Kartu Telepon */}
        <div className="card bg-white w-[100%] lg:w-[30%] shadow-xl text-black mb-5 items-start hover:bg-slate-50">
          <figure className="p-5">
            <div className="flex flex-row items-start">
              <button className="btn btn-circle mr-5 bg-sky-500 border-none text-white hover:bg-sky-500 hover:border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </button>
              <div className="flex flex-col">
                <div className="font-bold">Telepon</div>
                <div className="text-slate-500">+62 234 5678 9876</div>
              </div>
            </div>
          </figure>
        </div>

        {/* Kartu Email */}
        <div className="card bg-white w-[100%] lg:w-[30%] shadow-xl text-black mb-5 items-start hover:bg-slate-50">
          <figure className="p-5">
            <div className="flex flex-row items-start">
              <button className="btn btn-circle mr-5 bg-sky-500 border-none text-white hover:bg-sky-500 hover:border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </button>
              <div className="flex flex-col">
                <div className="font-bold">Email</div>
                <div className="text-slate-500">info@example.com</div>
              </div>
            </div>
          </figure>
        </div>
        
      </div>
    </div>
  );
}
