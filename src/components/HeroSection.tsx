import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" // Ajusta la opacidad del video
        autoPlay
        loop
        muted
      >
        <source
          src="/very-sm.mp4"
          type="video/mp4"
          media="(max-width: 480px)"
        />
        <source src="/sm.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/md.mp4" type="video/mp4" media="(max-width: 1024px)" />
        <source
          src="/lg.mov"
          type="video/quicktime"
          media="(min-width: 1025px)"
        />
        Tu navegador no soporta el video en HTML5.
      </video>
      {/* Gradiente para oscurecer el video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />{" "}
      {/* Opacidad incrementada */}
      {/* Contenido del Hero */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-verdeBosque">CLASES DE PÁDEL</span> EN MADRID
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Mejora tu juego con entrenadores expertos y una metodología
          comprobada.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Clases particulares, en grupo, y entrenamientos para todas las edades
          y niveles.
        </motion.p>

        <motion.a
          href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-blancoPuro py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Ponte en Contacto Conmigo
        </motion.a>
      </div>
      {/* Indicador de desplazamiento */}
      <div className="absolute bottom-6 inset-x-0 text-center text-white flex justify-center items-center z-30">
        <a href="#servicios" className="flex flex-col items-center">
          <div className="animate-bounce text-3xl sm:text-4xl">↓</div>
          <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide">
            Desplázate hacia abajo
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
