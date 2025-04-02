import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Clients from "@/components/client/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/assets/whatsapp3.png";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div>
      <>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Process />
        <Clients />
        <Contact />
        <Footer />
        <div className="fixed bottom-10 right-8 z-50">
          <Link href="https://wa.me/" target="_blank">
            <Image src={Whatsapp} alt="whatsapp" width={60} />
          </Link>
        </div>
      </>
    </div>
  );
}
