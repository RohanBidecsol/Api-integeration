"use client";

import Footer from "./components/footer";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Footer/>
    </div>
  );
}
