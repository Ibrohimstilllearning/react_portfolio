import React from 'react'
// membuat fungsi scroll
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        //membuat scroll?
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className="navbar py-7 items-center flex justify-between">
        <div className="logo">
            <h1 className="font-bold text-3xl bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
        </div>
        <ul className={`menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0  md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-bl-2xl rounded-br-2xl ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li>
                <a href="#" className='text-lg font-medium'>Beranda</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium'>Tentang</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium'>Proyek</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium'>Kontak</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar