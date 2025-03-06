import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import videoHome from "/homeVideo.mp4"

const About = () => {

    const items = [
        {
          title: "001. UI DESIGN",
          description: "I design visually engaging and intuitive interfaces that solve the client's initial challenges and lay the groundwork for a successful digital experience."
        },
        {
          title: "002. WIREFRAMING",
          description: "I carefully structure and plan the layout and flow of the interface—mapping out user journeys and information hierarchies—to ensure an intuitive and efficient navigation experience."
        },
        {
          title: "003. DEVELOPMENT",
          description: "I implement and develop interactive functionalities with clean, efficient code, ensuring a seamless and responsive user experience across all devices."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    return (
        <>
            <Navbar/>
            <div className="relative h-[300vh] w-screen bg-[#111111] text-white font-primary sm:h-[330vh] md:h-[400vh] lg:h-[200vh] xl:h-[200vh]">
                <div className="sticky top-0 min-h-screen flex flex-col justify-between pt-35 pb-10 z-10 lg:flex-row lg:items-end lg:pb-10">
                    <div className="px-5 sm:px-10 lg:pl-10 lg:pr-0 lg:w-1/2">
                        <p className=" text-[#FF4900] font-light tracking-tighter pl-1 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">I'm Melanie Brown</p>
                        <h1 className="tracking-[-0.1em] font-semibold text-5xl sm:text-6xl md:text-7xl xl:text-8xl">Web designer <span className="text-[#FF4900]">&</span> developer</h1>
                    </div>
                    <div className="tracking-tighter font-light px-5 sm:text-xl sm:px-10 lg:w-1/2 lg:px-14 lg:text-lg xl:text-xl">
                        <p>Merging design & code to craft engaging, high-performing websites—whether built from scratch or powered by CMS solutions.</p>
                    </div>
                </div>

                <div className="sticky top-0 min-h-screen bg-white text-black z-20 lg:flex xl:px-10">
                    <div className="flex flex-col justify-between min-h-screen pt-36 pb-20 px-5 sm:px-10 lg:w-1/2 lg:pt-32 lg:h-screen lg:pb-14 xl:pt-36">
                        <p className="font-light tracking-tighter sm:text-xl">With a passion for seamless digital experiences, I blend clean code with intuitive design. From dynamic front-end development in React, Tailwind & Framer Motion to custom solutions in Shopify, WordPress & Wix, I create tailored web experiences that are both visually striking and highly functional.</p>
                        <div className="flex justify-between">
                            <Link to="/portfolio">
                                <button className="border py-1 px-8 font-light text-sm sm:text-lg
                                transition-all duration-300 ease-in-out
                                hover:bg-black hover:text-white hover:border-black
                                active:scale-95
                                cursor-pointer">
                                    PORTFOLIO
                                </button>
                            </Link>
                            <a 
                                href="src/assets/BrownMelanie-CV.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                download
                                className="border py-1 px-6 font-light text-sm sm:text-lg
                                transition-all duration-300 ease-in-out
                                hover:bg-black hover:text-white hover:border-black
                                active:scale-95
                                cursor-pointer"
                            >
                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-38 px-5 sm:px-10 lg:w-1/2 lg:pt-30 lg:h-screen lg:pb-14">
                        <p className="text-[#FF4900] font-semibold text-3xl tracking-[-0.1em] sm:text-5xl sm:pb-10 lg:pb-5">how i get things done?</p>
                        <ul className="px-5 text-black font-light tracking-tighter pt-5 sm:pb-5">
                            {items.map((item, index) => (
                                <li key={index} className="border-b border-black pt-2 pb-2 tracking-tighter font-primary">
                                    <button 
                                        onClick={() => toggleItem(index)}
                                        className="w-full text-left focus:outline-none"
                                    >
                                        {item.title}
                                    </button>
            
                                    <AnimatePresence>
                                        {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-2 text-sm text-gray-700 overflow-hidden pl-3"
                                        >
                                            {item.description}
                                        </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                        <video
                            preload="auto"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="pt-10 pb-40 lg:pb-0 lg:pt-5" src={videoHome}/>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default About