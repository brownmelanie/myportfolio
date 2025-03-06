import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PortfolioGrid from "../components/previewPortfolio";
import Main from "../components/main";

import imgRueda from "../assets/decor-home-2.svg";

export default function Home() {
  return (
    <>
        <main className="relative">
            <Navbar/>
            <Main/>
            <Section2/>
            <PortfolioGrid/>
        </main>
    <Footer/>
    </>
  );
}

const Section2 = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540]);

  return (
    <div className="sticky top-0 min-h-screen bg-white flex flex-col items-center justify-center text-black shadow-xl z-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-10 flex flex-col items-center justify-center lg:items-start lg:flex-row lg:px-20 xl:gap-18">
        <h2 className="font-primary text-3xl text-[#FF4900] font-[600] tracking-[-0.08em] leading-8 mb-18 md:text-5xl md:leading-11 lg:text-4xl lg:leading-9 xl:pr-5 xl:text-5xl xl:leading-11">in the making of digital experiences for the new generation.</h2>
        <div className="font-primary uppercase tracking-[-0.08em] font-[300] leading-4 pt-10 md:text-lg md:leading-5 lg:w-3/4 lg:pt-0 lg:text-2xl lg:leading-6">
            <p className="pb-5">A digital developer and designer dedicated to crafting immersive web experiences — meant to engage and inspire.</p>
            <p>My work blends design and technology, driven by a passion for creating seamless and memorable digital interactions.</p>
        </div>
      </div>
      <motion.img
        src={imgRueda}
        alt="Rotating image"
        className="w-24 h-24 absolute right-[-25px] bottom-10 md:w-30 md:h-30 lg:w-40 lg:h-40"
        style={{ rotate }}
      />
      <div className="flex items-center justify-center">
          <p className="absolute bottom-0 font-primary uppercase font-light tracking-[-0.08em] pb-5">Some Works ▼</p>
      </div>
    </div>
  )
};
