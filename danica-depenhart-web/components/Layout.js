import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="background-img">
      <div className="app-container">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  );
}
