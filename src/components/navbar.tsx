// "use client"
import React from "react";
import Image from "next/image";
// import logoTorsi from '@/images/logotorsiev-stroked.png'
import logoTorsi from '@/images/logotorsiev.png'
import {useState, useEffect} from "react"
import Link from "next/link";
import { Button } from "@mui/material";
import servicePage from "@/Pages/Services";
// import { ClassNames } from "@emotion/react";

export default function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div>
            <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white text-black shadow-lg" : "navbar-layer bg-white bg-opacity-50 text-black"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="#" className="flex items-start gap-2 text-lg font-semibold" prefetch={false}>
            <Image className="w-32" src={logoTorsi} alt="logo" />
            <span className="sr-only">Torsi EV</span>
          </Link>
          <nav className={`flex flex-col gap-0 text-lg font-medium md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <Link href="#" className="font-bold" prefetch={false}>
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground" prefetch={false}>
              About
            </Link>
            <Link href="/about" className="text-muted-foreground" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <Button size="small" className="rounded-full text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} onScroll={() => setIsScrolled}>
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
          <div className="navbar-center">
            <nav className="hidden gap-0 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link href="#" className="font-bold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Contact
              </Link>
              
            </nav>
            
          </div>
          <button className="btn bg-sky-500 border-none text-white hover:bg-sky-600 hover:border-none">Get Started</button>
          
          
        </div>
        
      </header>
      <section>
        
      </section>
        </div>
    )
}

function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
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
  )
}