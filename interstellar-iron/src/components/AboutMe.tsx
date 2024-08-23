import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const personalImageAlt = "Álvaro Mateos Robledillo";

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 bg-grisClaro dark:bg-azulOscuro">
      <article className="flex flex-col items-center justify-center gap-8 text-azulOscuro dark:text-blancoPuro md:flex-row pb-16 md:pb-36">
        {/* Descripción Personal */}
        <div className="order-2 md:order-1 font-sans max-w-lg">
          <h2 className="text-2xl font-title font-bold mb-4 text-verdeBosque dark:text-verdeBosque">
            Sobre mí
          </h2>
          <p className="mb-4 leading-relaxed">
            Me llamo Álvaro Mateos, y soy un apasionado deportista de 25 años.
            He dedicado gran parte de mi vida al deporte, enfocándome en{" "}
            <strong className="text-verdeBosque font-normal font-mono">
              el desarrollo de habilidades físicas y mentales a través del
              entrenamiento constante y la disciplina.
            </strong>
          </p>
          <p className="mb-4 leading-relaxed">
            A lo largo de mi carrera, he competido en varias disciplinas,
            siempre buscando mejorar mi rendimiento y{" "}
            <strong className="text-verdeBosque font-normal font-mono">
              superarme a mí mismo cada día.
            </strong>
          </p>
          <p className="mb-4 leading-relaxed">
            Más allá de las competiciones, estoy comprometido con{" "}
            <strong className="text-verdeBosque font-normal font-mono">
              inspirar a otros a alcanzar sus metas deportivas
            </strong>
            , compartiendo mi conocimiento y experiencias a través de
            entrenamientos y talleres.
          </p>
          <p className="mb-4 leading-relaxed">
            En mi tiempo libre, me gusta mantenerme activo, explorar nuevas
            actividades deportivas y{" "}
            <strong className="text-verdeBosque font-normal font-mono">
              contribuir a la comunidad deportiva.
            </strong>
          </p>
        </div>

        {/* Imagen Personal */}
        <img
          width="200"
          height="200"
          src="/yo.jpeg" // Asegúrate de que la ruta de tu imagen sea correcta
          alt={personalImageAlt}
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-blancoPuro dark:bg-verdeBosque ring-2 ring-verdeBosque shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-0"
          style={{ objectPosition: "50% 50%" }}
        />
      </article>

      {/* Sección de Redes Sociales */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://twitter.com/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-azulOscuro dark:text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 dark:text-pink-400 hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://linkedin.com/in/tu_perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-azulOscuro dark:text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
