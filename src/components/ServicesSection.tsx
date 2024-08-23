import React from "react";
import {
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa"; // Importación desde react-icons

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <FaMapMarkerAlt className="text-azulOscuro text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "CLASES A DOMICILIO",
      description:
        "Voy a donde estés, ya sea en tu urbanización, club o cualquier ubicación donde prefieras entrenar.",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-azulOscuro text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "ENTRENAMIENTO PERSONALIZADO",
      description:
        "Clases individuales o en grupo diseñadas para principiantes o jugadores que buscan perfeccionar su técnica.",
    },
    {
      icon: (
        <FaGlobe className="text-azulOscuro text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "SERVICIOS PARA EXTRANJEROS",
      description:
        "Clases disponibles en inglés y español, perfectas para turistas o expatriados que quieren aprender a jugar.",
    },
    {
      icon: (
        <FaCalendarAlt className="text-azulOscuro text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "FLEXIBILIDAD HORARIA",
      description:
        "Consulta mi disponibilidad y reserva el horario que mejor se ajuste a tu rutina. ¡Entrena cuando te convenga!",
    },
  ];

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/imagen_fondo.jpg')`, // Reemplaza con la ruta de tu imagen
        backgroundPosition: "center center", // Centra la imagen en ambas direcciones
        backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
        backgroundAttachment: "fixed", // Hace que la imagen se mantenga fija mientras se desplaza (efecto parallax)      }}
      }}
    >
      {/* Superposición de color para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Sección de Servicios */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          SERVICIOS DE ENTRENAMIENTO DE PÁDEL
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-azulOscuro group-hover:text-verdeBosque">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-gray-800">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de Llamada a la Acción */}
        <div className="fade-in max-w-xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-wide">
            <span className="text-blue-500">¿QUIERES MEJORAR</span> TU TÉCNICA
            EN EL PÁDEL?
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">
            Solicita una consulta gratuita con nuestro equipo de entrenadores y
            descubre cómo{" "}
            <span className="font-semibold text-blue-500">PERFECCIONAR</span> tu
            juego.
          </p>
          <a
            href="mailto:info@padelentrenador.com"
            className="mt-4 md:mt-8 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-cyan-600 shadow-md hover:shadow-lg"
          >
            SOLICITA UNA CONSULTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
