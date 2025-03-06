import { motion } from "framer-motion";

const SocialLinks = () => {

  const socialMediaLinks = [
    { name: "whatsapp", url: "https://wa.me/5493487532846" },
    { name: "instagram", url: "https://instagram.com/melniebrown" },
    { name: "linkedin", url: "https://linkedin.com/in/brown-melanie" },
    { name: "github", url: "https://github.com/brownmelanie/" }
  ];

  return (
    <ul className="lg:text-black pl-10 pt-20 text-xl font-light bg-[#FF4900] space-y-4">
      {socialMediaLinks.map((item, index) => (
        <li key={index} className="relative cursor-pointer block ">
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block"
        >
          <motion.span 
            className="relative inline-block bg-[#FF4900]"
            initial="initial"
            whileHover="hover"
          >
            {item.name}
            <motion.div
              className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.span>
        </a>
      </li>
    ))}
  </ul>
);
};

export default SocialLinks;