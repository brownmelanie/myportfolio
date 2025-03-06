import React from "react";
import { motion, useScroll, useTransform  } from "framer-motion";

import imgTitle from "../assets/contactTitleMobile.svg"
import SocialLinks from "../components/socialLinks"
import NavbarContact from "../components/navContact";
import Form from "../components/form";
import Footer from "../components/footer";

import imgRueda from "../assets/decor-home-2.svg";

const Contact = () => {

    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <div className="flex flex-col bg-[#111111] text-white font-primary overflow-hidden">
            <NavbarContact/>
            <div className="lg:flex lg:flex-row relative">
                <div className="min-h-screen flex flex-col justify-center lg:w-2/3 lg:pr-30">
                    <img src={imgTitle} alt="Contact" className="w-[85vw] pt-28 pb-20 xl:w-[50vw]"/>
                    <Form/>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:min-h-screen lg:w-1/3 lg:bg-[#FF4900] lg:pt-40 lg:px-10 relative overflow-hidden">
                    <h2 className="lg:text-black lg:font-semibold lg:text-5xl lg:tracking-[-0.1em] lg:bg-[#FF4900] xl:pl-5 xl:text-6xl xl:pt-5">social media</h2>
                    <SocialLinks/>
                    <motion.img
                        src={imgRueda}
                        alt="Rotating image"
                        className="w-34 h-34 absolute bottom-10 xl:w-40 xl:h-40"
                        style={{ 
                            rotate,
                            right: '-12px'
                        }}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact