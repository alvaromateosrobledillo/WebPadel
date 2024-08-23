import React from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      id="inicio"
      className={`relative h-screen overflow-hidden ${className}`}
    >
      {/* Video de fondo */}
      <video
        id="backgroundVideo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        {/* Definición de fuentes según la resolución */}
        <source
          src="/public/very-sm.mp4"
          type="video/mp4"
          media="(max-width: 480px)"
        />
        <source
          src="/public/sm.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source
          src="/public/md.mp4"
          type="video/mp4"
          media="(max-width: 1024px)"
        />
        <source
          src="/public/lg.mov"
          type="video/quicktime"
          media="(min-width: 1025px)"
        />
        {/* Fallback para navegadores que no soportan el elemento <video> */}
        Tu navegador no soporta el video en HTML5.
      </video>

      {/* Capa de gradiente parallax encima del video */}
      <div
        id="foregroundLayer"
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-5"
      />

      {/* Contenido */}
      <div
        id="heroContent"
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10 transition-transform duration-300"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-lg bg-black bg-opacity-60 backdrop-blur-lg shadow-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide font-title">
            <span className="text-azulOscuro">CLASES DE PÁDEL</span> EN MADRID
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-grisClaro font-sans">
            Mejora tu juego con entrenadores expertos y una metodología
            comprobada.
          </p>
          <p className="text-base md:text-xl mb-8 text-grisClaro font-sans">
            Clases particulares, en grupo, y entrenamientos para todas las
            edades y niveles.
          </p>
          <a
            href="#reserva"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-blancoPuro py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Reserva tu Clase
          </a>
        </div>
      </div>

      {/* Indicador de desplazamiento solo en móvil */}
      <div className="absolute inset-x-0 bottom-10 text-white flex justify-center items-center z-10 md:hidden">
        <a href="#servicios" className="flex flex-col items-center">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v8m4 4H8"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm font-semibold tracking-wide">
            Desplazar
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
