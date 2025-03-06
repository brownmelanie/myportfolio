import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [cursorColor, setCursorColor] = useState("#FF4900");

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Obtener el color de fondo en la posición del cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;
        
        // Convertir RGB a HEX para comparación
        const rgbToHex = (rgb) => {
          const match = rgb.match(/\d+/g);
          if (!match) return "#FFFFFF"; // Color por defecto si no hay coincidencias
          return `#${match.map((x) => parseInt(x).toString(16).padStart(2, "0")).join("")}`;
        };

        const bgColorHex = rgbToHex(bgColor);

        // Si el fondo es similar a #FF4900, cambiar cursor a negro
        setCursorColor(bgColorHex.toUpperCase() === "#FF4900" ? "#000000" : "#FF4900");
      }
    };

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (!isDesktop) return null; // 🔥 No muestra el cursor en móviles

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-1000"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        backgroundColor: cursorColor, // 🔥 Cambia el color dinámicamente
      }}
    />
  );
};

export default CustomCursor;
