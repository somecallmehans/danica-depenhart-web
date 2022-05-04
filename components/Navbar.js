import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="flex flex-row md:static md:items-center w-full overflow-hidden">
        <div className="h-[64px] w-full md:w-1/2 md:m-auto">
          <div
            className={`${
              active ? "invisible" : "visible"
            } md:hidden w-20 p-2 float-right`}
          >
            <button className="p-3" onClick={() => setActive(!active)}>
              <AiOutlineMenu size={28} color={"black"} />
            </button>
          </div>
          <div className="md:visible invisible mt-3 md:text-center">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 font-playfair_display text-black font-bold items-center justify-center text-2xl hover:text-[#586f7c]">
                danica
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3  font-playfair text-black font-bold items-center justify-center text-2xl hover:text-[#586f7c]">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-2xl  hover:text-[#586f7c]">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 rounded text-black font-bold items-center justify-center text-2xl  hover:text-[#586f7c]">
                instagram
              </a>
            </Link>
          </div>
        </div>

        <div className={`${active ? "h-full" : "h-0"} nav-overlay`}>
          <div className="absolute bottom-[9px] mx-auto left-0 right-0 text-center">
            <button className="p-3" onClick={() => setActive(!active)}>
              <AiOutlineClose size={28} color={"#f5f5f5"} />
            </button>
          </div>

          <div className="nav-overlay-content flex flex-col">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f5f5f5] font-bold items-center justify-center text-2xl">
                danica
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f5f5f5] font-bold items-center justify-center text-2xl">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f5f5f5] font-bold items-center justify-center text-2xl">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f5f5f5] font-bold items-center justify-center text-2xl">
                instagram
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
