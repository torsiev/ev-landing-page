import React from "react";
import Image from "next/image";
import logoTorsi from '@/images/logotorsiev.png'

export default function Navbar(){
    return (
        <div className="navbar bg-transparent fixed">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="#"><Image className="mx-auto w-32" src={ logoTorsi } alt="logo"/></a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li>
                <details>
                    <summary>
                    Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                    </ul>
                </details>
                </li>
                <li><button className="bg-primary text-white">Login</button></li>
            </ul>
            </div>
        </div>
    )
}