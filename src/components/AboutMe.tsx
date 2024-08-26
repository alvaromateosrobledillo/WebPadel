import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const personalImageAlt = "Álvaro Mateos Robledillo";

const AboutMe: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-16 px-4 sm:px-8 bg-azulOscuro text-blancoPuro"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Descripción Personal */}
        <motion.div
          className="text-center md:text-left max-w-lg md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-title font-bold mb-6">Sobre mí</h2>
          <p className="mb-4 leading-relaxed text-lg">
            Me llamo Álvaro Mateos, y soy un apasionado deportista de 25 años.
            He dedicado gran parte de mi vida al deporte, enfocándome en{" "}
            <strong className="text-verdeBosque">
              el desarrollo de habilidades físicas y mentales a través del
              entrenamiento constante y la disciplina.
            </strong>
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            A lo largo de mi carrera, he competido en varias disciplinas,
            siempre buscando mejorar mi rendimiento y{" "}
            <strong className="text-verdeBosque">
              superarme a mí mismo cada día.
            </strong>
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            Más allá de las competiciones, estoy comprometido con{" "}
            <strong className="text-verdeBosque">
              inspirar a otros a alcanzar sus metas deportivas
            </strong>
            , compartiendo mi conocimiento y experiencias a través de
            entrenamientos y talleres.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            En mi tiempo libre, me gusta mantenerme activo, explorar nuevas
            actividades deportivas y{" "}
            <strong className="text-verdeBosque">
              contribuir a la comunidad deportiva.
            </strong>
          </p>
        </motion.div>

        {/* Imagen Personal */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            width="200"
            height="200"
            src="/jugando.jpg"
            alt={personalImageAlt}
            className="object-cover w-64 h-full p-1 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-verdeBosque ring-2 ring-verdeBosque shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-0"
          />
        </motion.div>
      </div>

      {/* Sección de Redes Sociales */}
      <motion.div
        className="flex justify-center mt-12 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a
          href="https://twitter.com/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://linkedin.com/in/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default AboutMe;
