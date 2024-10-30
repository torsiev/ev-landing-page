import React from "react";
import Image from "next/image";
import logoTorsi from "@/images/logotorsiev.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-lg font-normal"
            : "navbar-layer bg-none text-white font-normal"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center">
            <div className="flex flex-row place-items-start">
              <Button
                size="small"
                className="rounded-full text-black md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onScroll={() => setIsScrolled}
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </div>
            <Link
              href="#"
              className="flex items-start gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <Image className="w-32 md:w-40" src={logoTorsi} alt="logo" />
              <span className="sr-only">Torsi EV</span>
            </Link>
          </div>
          <nav
            className={`flex flex-col gap-0 text-lg font-medium md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="text-lg hover:text-sky-500" prefetch={false}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground text-lg hover:text-sky-500"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground text-lg"
              prefetch={false}
            >
              Services
            </Link>
            <Link href="#" className="text-muted-foreground text-lg" prefetch={false}>
              Contact
            </Link>
          </nav>

          {/* Tampilan large */}
          <div className="navbar-center">
            <nav className="hidden text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-16">
              <Link href="/" className=" text-lg hover:text-sky-500" prefetch={false}>
                HOME
              </Link>
              <Link href="#" className="text-muted-foreground text-lg hover:text-sky-500" prefetch={false}>
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground text-lg hover:text-sky-500"
                prefetch={false}
              >
                SERVICES
              </Link>
              <Link href="#" className="text-muted-foreground text-lg hover:text-sky-500" prefetch={false}>
                CONTACT
              </Link>
            </nav>
          </div>
          {/* <button className="btn bg-transparent border-white border-[3px] text-white font-bold hover:bg-white hover:border-transparent hover:text-black hover:font-bold">
            Get Started
          </button> */}
        </div>
      </header>
      <section></section>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
