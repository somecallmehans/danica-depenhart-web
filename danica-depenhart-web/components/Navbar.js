import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg--500 p-6">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-black font-bold uppercase tracking-wide">
              Danica Depenhart
            </span>
          </a>
        </Link>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="flex flex-row justify-center items-center">
            <Link href="/publications">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-gray-400 hover:text-white">
                Publications
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-gray-400 hover:text-white">
                About
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
