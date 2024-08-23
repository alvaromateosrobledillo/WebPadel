import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
//nuevo

const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-16 bg-grisClaro dark:bg-azulOscuro">
      <div className="container mx-auto text-center">
        <div className="max-w-xl mx-auto p-8 bg-white dark:bg-azulOscuro rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-verdeBosque dark:text-blancoPuro">
            ¡Ponte en Contacto Conmigo!
          </h2>
          <p className="text-lg mb-8 text-azulOscuro dark:text-blancoPuro">
            Estoy disponible para ayudarte con cualquier duda o para comenzar tu
            entrenamiento personalizado.
          </p>
          <div className="text-left text-azulOscuro dark:text-blancoPuro">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-verdeBosque">
                TELÉFONO
              </h3>
              <p className="text-lg">📞 123 456 789</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-verdeBosque">
                CORREO ELECTRÓNICO
              </h3>
              <p className="text-lg">✉️ contacto@tudominio.com</p>
            </div>
          </div>
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20entrenamiento." // Reemplaza con tu número de WhatsApp real
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-verdeBosque text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-azulOscuro shadow-md hover:shadow-lg"
          >
            Contáctame por WhatsApp
          </a>

          {/* Redes Sociales */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="text-azulOscuro dark:text-blancoPuro bg-white dark:bg-verdeBosque p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-azulOscuro dark:text-blancoPuro bg-white dark:bg-verdeBosque p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-azulOscuro dark:text-blancoPuro bg-white dark:bg-verdeBosque p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-azulOscuro dark:text-blancoPuro bg-white dark:bg-verdeBosque p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp real
              target="_blank"
              rel="noopener noreferrer"
              className="text-azulOscuro dark:text-blancoPuro bg-white dark:bg-verdeBosque p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
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
