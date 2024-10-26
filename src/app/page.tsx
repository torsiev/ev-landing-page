'use client'

// import Image from "next/image";

import Hero from "@/Pages/Home/hero";
import Navbar from "@/components/navbar";
import Partner from "@/Pages/Home/partner";
import About from "@/Pages/Home/about";
import Services from "@/Pages/Home/services";
import Contact from "@/Pages/Home/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-whSky overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partner />
      <Contact />
    </main>
  );
}
