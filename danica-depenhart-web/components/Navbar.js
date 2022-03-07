import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="flex flex-row md:static md:items-center overflow-hidden">
        <div className="h-[64px] w-full md:w-1/2 md:mx-auto">
          <div
            className={`${active ? "invisible" : "visible"} md:hidden w-20 p-2`}
          >
            <button
              className="p-3 border-2 border-black"
              onClick={() => setActive(!active)}
            >
              M
            </button>
          </div>
          <div className="md:visible invisible md:text-center">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-lg hover:text-white">
                danica depenhart
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-lg hover:text-white">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-lg  hover:text-white">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-lg  hover:text-white">
                instagram
              </a>
            </Link>
          </div>
        </div>

        <div className={`${active ? "h-full" : "h-0"} nav-overlay`}>
          <div className="absolute top-[9px] right-[14px]">
            <button
              className="p-3 border-2 border-white text-white"
              onClick={() => setActive(!active)}
            >
              M
            </button>
          </div>

          <div className="nav-overlay-content flex flex-col">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center text-2xl hover:text-white">
                danica depenhart
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center text-2xl hover:text-white">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center text-2xl  hover:text-white">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center text-2xl  hover:text-white">
                instagram
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
