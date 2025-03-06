import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";

const PortfolioGrid = () => {
    const navigate = useNavigate();
    const projects = [
        { 
            id: 1, 
            title: "CHOCÖLATTTEAR", 
            subtitle: "Portfolio",
            image: portfolio1, 
            link: "/portfolio" 
        },
        { 
            id: 2, 
            title: "Modo Berlin", 
            subtitle: "E-Commerce",
            image: portfolio2, 
            link: "/portfolio" 
        },
        { 
            id: 3, 
            title: "Guzman Nacich SAIC", 
            subtitle: "Business Landing",
            image: portfolio3, 
            link: "/portfolio" 
        },
        { 
            id: 4, 
            title: "CIMA Integral", 
            subtitle: "Blog & Business Multipage",
            image: portfolio4, 
            link: "/portfolio" 
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center shadow-xl z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {projects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className="relative group cursor-pointer"
                        onClick={() => navigate(project.link)}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto object-cover"
                        />
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center 
                                    bg-black/50 lg:bg-black/50 lg:opacity-0
                                    transition-opacity group-hover:opacity-100"
                        >
                            <div className="flex flex-col items-center font-primary tracking-tighter">
                                <h3 className="text-white font-primary text-xl tracking-tighter">{project.title}</h3>
                                <p className="text-white/80 font-light text-sm uppercase">
                                    {project.subtitle}
                                </p>
                            </div>
                            
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGrid;
