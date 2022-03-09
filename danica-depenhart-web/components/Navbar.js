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
            <button
              className="p-3 text-[#30110d]"
              onClick={() => setActive(!active)}
            >
              <AiOutlineMenu size={28} />
            </button>
          </div>
          <div className="md:visible invisible mt-3 md:text-center">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 font-playfair_display text-[#30110d] font-bold items-center justify-center text-2xl hover:text-[#722620]">
                danica
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3  font-playfair text-[#30110d] font-bold items-center justify-center text-2xl hover:text-[#722620]">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 rounded text-[#30110d] font-bold items-center justify-center text-2xl  hover:text-[#722620]">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 rounded text-[#30110d] font-bold items-center justify-center text-2xl  hover:text-[#722620]">
                instagram
              </a>
            </Link>
          </div>
        </div>

        <div className={`${active ? "h-full" : "h-0"} nav-overlay`}>
          <div className="absolute bottom-[9px] mx-auto left-0 right-0 text-center">
            <button className="p-3" onClick={() => setActive(!active)}>
              <AiOutlineClose size={28} color={"white"} />
            </button>
          </div>

          <div className="nav-overlay-content flex flex-col">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f2bc94] font-bold items-center justify-center text-2xl">
                danica
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f2bc94] font-bold items-center justify-center text-2xl">
                about
              </a>
            </Link>
            <Link href="/publications">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f2bc94] font-bold items-center justify-center text-2xl">
                publications
              </a>
            </Link>
            <Link href="https://www.instagram.com/motherweather">
              <a className="lg:w-auto w-full px-3 py-2 rounded text-[#f2bc94] font-bold items-center justify-center text-2xl">
                instagram
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
