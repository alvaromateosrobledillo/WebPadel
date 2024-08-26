import React from "react";
import { FaUser, FaUsers, FaUserFriends, FaPeopleArrows } from "react-icons/fa";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
}) => (
  <motion.div
    className="p-6 bg-white dark:bg-azulOscuro rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-verdeBosque"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
  >
    <div className="flex items-center justify-center mb-4 text-azulOscuro dark:text-blancoPuro">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
    <p className="text-4xl font-extrabold text-center mb-4 text-verdeBosque">
      {price}
    </p>
    <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
      {description}
    </p>
    <ul className="space-y-2 mb-6">
      {features.map((feature: string, index: number) => (
        <li
          key={index}
          className="flex items-center justify-center text-azulOscuro dark:text-blancoPuro"
        >
          <span className="mr-2 text-verdeBosque">&#10003;</span>
          {feature}
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      className="bg-verdeBosque text-white py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-azulOscuro hover:shadow-lg mx-auto block"
    >
      Reservar
    </motion.button>
  </motion.div>
);

const services = [
  {
    title: "Entrenamiento Individual",
    price: "10€/hora",
    description: "Entrenamiento personal enfocado en tus metas.",
    features: [
      "Sesiones personalizadas",
      "Entrenamiento a tu ritmo",
      "Atención 100% individual",
    ],
    icon: <FaUser className="text-4xl text-verdeBosque" />,
  },
  {
    title: "Entrenamiento en Parejas",
    price: "15€/hora",
    description: "Entrena con un compañero y mantente motivado.",
    features: [
      "Ejercicios en equipo",
      "Motivación mutua",
      "Descuentos para parejas",
    ],
    icon: <FaUsers className="text-4xl text-verdeBosque" />,
  },
  {
    title: "Entrenamiento para 3",
    price: "20€/hora",
    description: "Entrena en un grupo pequeño y disfruta de la compañía.",
    features: [
      "Rutinas grupales",
      "Diversión asegurada",
      "Atención personalizada",
    ],
    icon: <FaUserFriends className="text-4xl text-verdeBosque" />,
  },
  {
    title: "Entrenamiento en Grupo (4 personas)",
    price: "25€/hora",
    description: "Disfruta de un entrenamiento dinámico en grupo.",
    features: [
      "Dinámica de grupo",
      "Entrenamiento efectivo",
      "Diversión y competitividad",
    ],
    icon: <FaPeopleArrows className="text-4xl text-verdeBosque" />,
  },
];

const PricingPage: React.FC = () => {
  return (
    <section
      id="reserva"
      className=" py-16 bg-gradient-to-br from-grisClaro via-blancoPuro to-verdeBosque dark:from-azulOscuro dark:via-azulOscuro dark:to-grisClaro"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-azulOscuro dark:text-blancoPuro"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tarifas de Entrenamiento
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
