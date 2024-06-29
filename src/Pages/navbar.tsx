// "use client"
import React from "react";
import Image from "next/image";
import logoTorsi from '@/images/logotorsiev-stroked.png'
import {useState, useEffect} from "react"
import Link from "next/link";
import { Button } from "@mui/material";
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
        <div className="navbar bg-transparent fixed">
            <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white text-primary-foreground shadow-lg text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="container flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <Image className="w-32" src={logoTorsi} alt="logo" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className={`flex flex-col gap-6 text-lg font-medium md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
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
          <div className="flex items-center gap-4 md:hidden">
            <Button size="small" className="rounded-full text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} onScroll={() => setIsScrolled}>
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
          <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
      </header>
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