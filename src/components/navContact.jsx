import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import navlogo from "../assets/navbar-logo.svg";
import burguerlogo from "../assets/burguer-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import whatsappIcon from "../assets/WhatsappLogo.svg"
import linkedinIcon from "../assets/LinkedinLogo.svg"
import instagramIcon from "../assets/InstagramLogo.svg"

const NavbarContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "home", href: "/" },
    { title: "portfolio", href: "portfolio" },
    { title: "contact", href: "/contact" },
    { title: "about me", href: "/about-me" },
  ];

  const socialLinks = [
    { href: "https://wa.me/5493487532846", img: whatsappIcon, alt: "WhatsApp" },
    { href: "https://www.linkedin.com/in/brown-melanie", img: linkedinIcon, alt: "LinkedIn" },
    { href: "https://www.instagram.com/melniebrown", img: instagramIcon, alt: "Instagram" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
    open: {
      opacity: 1,
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const closeButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <nav className="fixed bg-background-black/55 backdrop-blur-xs top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-[90vw] mx-auto border-b border-solid py-1 border-white">
        <div className="z-50">
          <a href="/">
            <img
              src={navlogo}
              alt="Melanie Brown's Logo"
              className="h-14 w-14 transition-all duration-300"
            />
          </a>
          
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="font-primary font-light tracking-[-0.08em] text-base hover:text-black transition-colors duration-300 text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={toggleMenu} className="z-50 p-2 lg:hidden">
          <img src={burguerlogo} alt="Menu" className="h-6 w-6" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-0 right-0 h-screen w-[80vw] bg-white z-50 pt-24 lg:hidden"
              >
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-6"
                  variants={closeButtonVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={closeIcon}
                    alt="Cerrar menú"
                    className="h-12 w-12"
                  />
                </motion.button>

                <ul className="flex flex-col items-left gap-5 pl-14">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.title}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <a
                        href={item.href}
                        className="text-black font-primary font-light tracking-[-0.08em] text-xl hover:text-[#FF4900] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex justify-left gap-4 pl-13 mt-[52vh]">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                      <img src={link.img} alt={link.alt} className="w-7 h-7 transition-transform duration-300 hover:scale-110" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavbarContact;