"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Head from 'next/head';
import Link from 'next/link';



export default function Home() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <div>

    <div className="containernavbar" id="navbar">
      <Head>
    
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="shadow warna font-bold flex italic text-2xl "> <p className="text-center">BMT</p><span className="hijauMuda">Bandung Membrane team</span></h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="warna font-bold">
                  <Link href="#Home"onClick={() => setNavbar(!navbar)}>
                    <p>HOME</p>
                  </Link>
                </li>
                <li className="warna font-bold">
                  <Link href="#galery" onClick={() => setNavbar(!navbar)} >
                  <p>DESIGN</p>
                  </Link>
                </li>
                <li className="warna  font-bold">
                  <Link href="#tentangkami"onClick={() => setNavbar(!navbar)}>
                  <p>TENTANG KAMI</p>
                  </Link>
                </li>
                <li className="warna  font-bold">
                  <Link href="#hubungikami"onClick={() => setNavbar(!navbar)}>
                  <p>HUBUNGI KAMI</p>
                  </Link>
                </li>

                 <div class="dropdown">
    <button class="dropbtn font-bold">PRODUK</button>
    <div class="dropdown-content">
    <li className="warna  font-bold">
                  <Link href="#Kanopi"onClick={() => setNavbar(!navbar)}>
                  <p>CANOPY</p>
                  </Link>
                </li>
                <li className="warna  font-bold">
                  <Link href="#Membrane"onClick={() => setNavbar(!navbar)}>
                  <p>TENDA MEMBRANE</p>
                  </Link>
                </li>
    </div>
  </div> 
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>

  );
}
