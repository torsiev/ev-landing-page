// import Image from "next/image";

import Hero from "@/Pages/hero";
import Navbar from "@/Pages/navbar";
import Partner from "@/Pages/partner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Navbar />
      <Hero />
      <Partner />
    </main>
  );
}
