import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

export default function Layout({ children }) {
  return (
    <main>
      <div
        className="flex flex-col h-screen justify-between"
        style={{
          backgroundImage: "url(" + "/background.jpg" + ")",
          backgroundPosition: "50% 18%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  );
}
