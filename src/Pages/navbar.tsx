import React from "react";
import Image from "next/image";
import logoTorsi from '@/images/logotorsiev-stroked.png'

export default function Navbar(){
    return (
        <div className="navbar bg-transparent fixed">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="#"><Image className="mx-auto w-32" src={ logoTorsi } alt="logo"/></a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li><a>Partner</a></li>
                <li><a>Products</a></li>
                <li><button className="bg-primary text-white">Login</button></li>
            </ul>
            </div>
        </div>
    )
}