import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-16 bg-verdeBosque text-blancoPuro">
      <div className="container mx-auto text-center">
        <div className="max-w-xl mx-auto p-8 bg-blancoPuro dark:bg-azulOscuro rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-azulOscuro dark:text-blancoPuro">
            ¡Ponte en Contacto Conmigo!
          </h2>
          <p className="text-lg mb-8 text-azulOscuro dark:text-grisClaro">
            Estoy disponible para ayudarte con cualquier duda o para comenzar tu
            entrenamiento personalizado.
          </p>
          <div className="text-left">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-azulOscuro dark:text-blancoPuro">
                TELÉFONO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                📞 687 854 801
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-azulOscuro dark:text-blancoPuro">
                CORREO ELECTRÓNICO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                ✉️{" "}
                <a href="mailto:alvaromar988@gmail.com" className="underline">
                  alvaromar988@gmail.com
                </a>
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20entrenamiento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-blancoPuro py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 mt-8"
          >
            Contáctame por WhatsApp
          </a>

          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="text-verdeBosque bg-blancoPuro p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-verdeBosque bg-blancoPuro p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-verdeBosque bg-blancoPuro p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-verdeBosque bg-blancoPuro p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/34687854801"
              target="_blank"
              rel="noopener noreferrer"
              className="text-verdeBosque bg-blancoPuro p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
