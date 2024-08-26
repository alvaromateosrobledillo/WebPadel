import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-16 bg-verdeBosque text-blancoPuro">
      <div className="container mx-auto text-center flex flex-col items-center">
        <motion.div
          className="max-w-2xl w-full p-8 bg-blancoPuro dark:bg-azulOscuro rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-azulOscuro dark:text-blancoPuro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¡Ponte en Contacto Conmigo!
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-azulOscuro dark:text-grisClaro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Estoy disponible para ayudarte con cualquier duda o para comenzar tu
            entrenamiento personalizado.
          </motion.p>
          <div className="space-y-6">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-azulOscuro dark:text-blancoPuro">
                TELÉFONO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                📞{" "}
                <a
                  href="tel:+34687854801"
                  className="underline hover:text-verdeBosque"
                >
                  687 854 801
                </a>
              </p>
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-azulOscuro dark:text-blancoPuro">
                CORREO ELECTRÓNICO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                ✉️{" "}
                <a
                  href="mailto:alvaromar988@gmail.com"
                  className="underline hover:text-verdeBosque"
                >
                  alvaromar988@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
          <motion.a
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20entrenamiento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-blancoPuro py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 mt-8 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Contáctame por WhatsApp
          </motion.a>

          <div className="mt-10 flex justify-center space-x-5">
            {[
              { href: "https://facebook.com/tu_perfil", icon: <FaFacebookF /> },
              { href: "https://twitter.com/tu_perfil", icon: <FaTwitter /> },
              {
                href: "https://linkedin.com/in/tu_perfil",
                icon: <FaLinkedinIn />,
              },
              {
                href: "https://instagram.com/tu_perfil",
                icon: <FaInstagram />,
              },
              { href: "https://wa.me/34687854801", icon: <FaWhatsapp /> },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-verdeBosque bg-azulOscuro p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.15 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
