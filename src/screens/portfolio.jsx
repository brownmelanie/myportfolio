import logo from "../assets/melanieportfolio.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import NavbarNormal from "../components/navbarweb";
import PortfolioGrid from "../components/portfolioGrid";
import Footer from "../components/footer";

const Portfolio = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["80%", "-80%"]);

  return (
    <div ref={containerRef}>
        <NavbarNormal/>
      <div className="relative">
        <img
          src="/bg.gif"
          alt="Background animation"
          className="absolute top-0 left-0 w-full h-full object-cover grayscale z-10"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        <div className="flex flex-col h-screen justify-between pt-36 pb-16 px-7 lg:flex-row lg:pt-28">
          <div className="z-10 lg:w-1/2 lg:border-r lg:border-white lg:pl-5 lg:pr-20">
            <img
              src={logo}
              alt="Melanie's portfolio"
              className="w-[80vw] md:w-[60vw] md:pt-10"
            />
          </div>
          <div className="z-10 font-primary lg:w-1/2 lg:h-[70vh] lg:flex lg:flex-col lg:justify-between lg:px-20 xl:h-[75vh]">
            <h3 className="text-[#FF4900] tracking-tighter pb-10 text-xl md:text-2xl lg:pb-0 lg:text-xl xl:pt-8">
              [ About me
            </h3>
            <p className="text-white font-light tracking-tighter text-sm md:text-xl lg:text-sm">
              With a passion for seamless digital experiences, I blend clean code with intuitive design. 
              From dynamic front-end development in React, Tailwind & Framer Motion to custom solutions in 
              Shopify, WordPress & Wix, I create tailored web experiences that are both visually striking 
              and highly functional.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={projectsRef}
        className="h-[150px] bg-[#FF4900] relative overflow-hidden"
      >
        <motion.div
          style={{ x: textX }}
          className="
            absolute
            top-2/3 transform -translate-y-1/2
            flex whitespace-nowrap
            left-[20%]
            lg:left-[40%]
          "
        >
          <p className="font-primary text-6xl text-white font-bold tracking-[-0.07em] px-4 lg:text-8xl lg:pb-8">
            featured projects
          </p>
        </motion.div>
      </div>

      <div className="min-h-screen">
        <PortfolioGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
