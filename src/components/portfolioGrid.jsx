import { motion } from "framer-motion";
import arrow from "../assets/ArrowUp.svg"

const projects = [
  {
    title: "Chocölatttear",
    category: "Web design & development",
    year: "2025",
    video: "src/assets/videos/chocolattear-preview.mp4",
    link: "/work-in-progress"
  },
  {
    title: "Modo Berlin",
    category: "E-Commerce",
    year: "2025",
    video: "src/assets/videos/modoberlin-preview.mp4",
    link: "/work-in-progress"
  },
  {
    title: "Security Button",
    category: "App development",
    year: "2024",
    video: "src/assets/videos/securitybutton-preview.mp4",
    link: "/work-in-progress"
  },
  {
    title: "Natics",
    category: "E-Commerce",
    year: "2024",
    video: "src/assets/videos/natics-preview.mp4",
    link: "/work-in-progress"
  },
  {
    title: "Guzman Nacich SAIC",
    category: "Web design & development",
    year: "2024",
    video: "src/assets/videos/guzmannacich-preview.mp4",
    link: "/work-in-progress"
  },
  {
    title: "Cima Integral",
    category: "Web development",
    year: "2024",
    video: "src/assets/videos/cimaintegral-preview.mp4",
    link: "/work-in-progress"
  }
];

const PortfolioGrid = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#111111] lg:gap-0">
      {projects.map((project, index) => (
        <div
          key={index}
          className="
            flex flex-col
            text-white
            min-h-[50vh]
            overflow-hidden
            lg:flex-row
            lg:border-b-1 lg:border-white
          "
        >
          <div className="lg:w-1/3 pt-18 px-10 pb-8 flex flex-row justify-between items-center font-primary lg:border-r-1 lg:border-white lg:flex-col lg:items-start lg:py-20">
            <div>
              <p className="text-[#FF4900] text-sm tracking-tighter lg:text-base xl:text-lg">
                {project.category}
              </p>
              <p className="text-3xl font-semibold tracking-tighter lg:text-4xl xl:text-5xl">{project.title}</p>
            </div>

            <div className="flex items-center justify-between lg:w-full lg:pr-10">
              <p className="text-[10px] font-extralight uppercase text-[#B3B3B3] lg:text-sm xl:text-base">
                Year
                <br />
                <span className="tracking-tighter text-sm text-white lg:text-xl xl:text-2xl">{project.year}</span>
              </p>
              <motion.a
                href={project.link}
                
              >
                <img src={arrow} className="w-8 ml-3 xl:w-10"/>
              </motion.a>
            </div>
          </div>
          <div className="lg:w-2/3">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover px-10 pb-28 border-b-1 border-white lg:border-b-0 lg:p-20"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;