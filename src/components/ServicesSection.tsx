import React from "react";
import {
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: FaMapMarkerAlt,
    title: "CLASES A DOMICILIO",
    description:
      "Voy a donde estés, ya sea en tu urbanización, club o cualquier ubicación donde prefieras entrenar.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "ENTRENAMIENTO PERSONALIZADO",
    description:
      "Clases individuales o en grupo diseñadas para principiantes o jugadores que buscan perfeccionar su técnica.",
  },
  {
    icon: FaGlobe,
    title: "SERVICIOS PARA EXTRANJEROS",
    description:
      "Clases disponibles en inglés y español, perfectas para turistas o expatriados que quieren aprender a jugar.",
  },
  {
    icon: FaCalendarAlt,
    title: "FLEXIBILIDAD HORARIA",
    description:
      "Consulta mi disponibilidad y reserva el horario que mejor se ajuste a tu rutina. ¡Entrena cuando te convenga!",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="relative py-20 bg-cover bg-azulOscuro ">
      {/* Overlay para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-blancoPuro mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SERVICIOS DE ENTRENAMIENTO DE PÁDEL
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <service.icon className="text-4xl text-azulOscuro group-hover:text-verdeBosque" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-azulOscuro">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-azulOscuro">
            <span className="text-verdeBosque">¿QUIERES MEJORAR</span> TU
            TÉCNICA EN EL PÁDEL?
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">
            Solicita una consulta conmigo y descubre cómo{" "}
            <span className="font-semibold text-verdeBosque">PERFECCIONAR</span>{" "}
            tu juego.
          </p>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            SOLICITA UNA CONSULTA
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
