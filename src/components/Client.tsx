// src/components/Client.tsx
import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/images/logo/logo1.png";
import Image2 from "../assets/images/logo/logo2.png";
import Image3 from "../assets/images/logo/logo3.png";
import Image4 from "../assets/images/logo/logo4.png";
import Image5 from "../assets/images/logo/logo5.png";
import Image6 from "../assets/images/logo/logo6.png";
import Image7 from "../assets/images/logo/logo7.png";
import Image8 from "../assets/images/logo/logo8.png";
import Image9 from "../assets/images/logo/logo9.png";
import Image10 from "../assets/images/logo/logo10.png";
import Image11 from "../assets/images/logo/logo11.png";

const Client: React.FC = () => {
  const clients = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];

  return (
    <motion.section
      className="py-5 bg-white mt-12"
      id="clients"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#2d3748]">
          Nos Clients
        </h2>
        <h2 className="text-3xl font-bold text-[#2d3748]">
          Ils nous font confiance
        </h2>
      </div>

      <div className="overflow-hidden mt-10 relative">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-40 h-20"
            >
              <img
                src={client}
                alt={`Client ${index}`}
                className="client-logo"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Client;
