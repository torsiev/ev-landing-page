import React from "react";
import Image from "next/image";
import logoTorsi from "@/images/logotorsiev.png";
import logoTorsiWhite from "@/images/Asset 3.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className="navbar lg:pr-24 lg:pl-24">
          <div className="flex-1 flex lg:justify-between">
            {/* Logo Torsi dan Hamburger */}
            <div className="navbar-start flex items-center">
              {/* Menu Dropdown untuk Mobile */}
              <div className="lg:hidden mr-2 hover:bg-transparent">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white text-black rounded-sm z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                      >
                        HOME
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                      >
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                      >
                        SERVICES
                      </a>
                      <ul className="p-2">
                        <li>
                          <a
                            href="/services#charging"
                            className="text-black  hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                          >
                            Charging Station
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services#conversion"
                            className="text-black  hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                          >
                            ICE to EV Conversion
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services#stroom"
                            className="text-black  hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                          >
                            Stroom!
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="/partnership"
                        className="hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                      >
                        PARTNER
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Logo */}
              <a
                href="/"
                className="btn btn-ghost text-xl hover:bg-transparent"
              >
                {isScrolled ? (
                  <Image src={logoTorsi} alt="Logo" className="w-32 md:w-40" />
                ) : (
                  <Image
                    src={logoTorsiWhite}
                    alt="Logo"
                    className="w-32 md:w-40"
                  />
                )}
              </a>
            </div>

            {/* Menu Desktop */}
            <div className="navbar-center hidden lg:flex active:bg-transparent">
              <ul className="menu menu-horizontal">
                <li>
                  <a
                    href="/"
                    className="text-[17px] hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-[17px] hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <div className="dropdown dropdown-hover dropdown-bottom text-[17px] hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent">
                    <a href="/services" className="flex items-center">
                      SERVICES
                    </a>
                    <ul className="dropdown-content menu w-64 p-2 bg-white rounded-sm shadow">
                      <li>
                        <a
                          href="/services#charging"
                          className="text-black  hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                        >
                          Charging Station
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services#conversion"
                          className="text-black hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                        >
                          ICE to EV Conversion
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services#stroom"
                          className="text-black hover:text-sky-500 hover:bg-slate-50 tracking-wider active:bg-transparent !bg-transparent"
                        >
                          Stroom!
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="/partnership"
                    className="text-[17px] hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                  >
                    PARTNER
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-[17px] hover:text-sky-500 hover:bg-transparent active:bg-transparent !bg-transparent"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
