import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="app-container">
      <Navbar />
      <div className="mt-2 mb-16">{children}</div>
      <Footer />
    </main>
  );
}
