import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/sections/Hero";
import Partner from "@/sections/Partner";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
      <Services />
      <Partner />
      <Contact />
    </DefaultLayout>
  );
}
