import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-azulOscuro text-blancoPuro py-8">
      <div className="container mx-auto text-center space-y-4">
        {/* Logo */}
        <img
          src="/logo.png" // Ruta a tu logo
          alt="Logo"
          className="mx-auto h-12"
        />

        {/* Navegación */}
        <nav className="flex justify-center space-x-6">
          <a href="/" className="hover:text-verdeBosque transition-colors">
            INICIO
          </a>
          <a
            href="#servicios"
            className="hover:text-verdeBosque transition-colors"
          >
            SERVICIOS
          </a>
          <a
            href="#reserva"
            className="hover:text-verdeBosque transition-colors"
          >
            RESERVA
          </a>
          <a
            href="#contacto"
            className="hover:text-verdeBosque transition-colors"
          >
            CONTACTO
          </a>
        </nav>

        {/* Información de contacto */}
        <div className="text-sm space-y-2">
          <p>
            <strong>Teléfono:</strong> +34 123 456 789 (WhatsApp)
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contacto@tudominio.com"
              className="hover:text-verdeBosque transition-colors"
            >
              contacto@tudominio.com
            </a>
          </p>
        </div>

        {/* Dirección */}
        <address className="not-italic text-sm space-y-2">
          <p>Ubicación: Calle Ejemplo, 123, 28001 Madrid, ES</p>
        </address>

        {/* Enlaces Legales */}
        <div className="text-sm space-y-2">
          <a
            href="/aviso-legal"
            className="hover:text-verdeBosque transition-colors"
          >
            Aviso Legal
          </a>{" "}
          -
          <a
            href="/politica-privacidad"
            className="hover:text-verdeBosque transition-colors"
          >
            Política de Privacidad
          </a>{" "}
          -
          <a
            href="/politica-cookies"
            className="hover:text-verdeBosque transition-colors"
          >
            Política de Cookies
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-xs">
          &copy; 2024 Tu Nombre o Empresa. Todos los derechos reservados.
        </p>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
