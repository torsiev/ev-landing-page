import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Services from "@/sections/Index/Services";


declare global {
  interface Window {
    AOS: any;
  }
}

export default function Service() {
  return (
    <DefaultLayout>
     <p className="text-black">Hello World!</p>
    </DefaultLayout>
  );
}
