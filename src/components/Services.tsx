import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/images/IMG-CARD5.png";
import Image2 from "../assets/images/IMG-CARD2.jpg";
import Image3 from "../assets/images/IMG-CARD6.jpg";
import Image4 from "../assets/images/IMG-CARD7.jpg";

const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="services flex justify-center items-center py-10 bg-gray-100 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="container"
        id="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Nos Services</h2>
        <h2 className="section-title text-center text-gray-800">
          Stream Management met son expertise au service de vos projets
        </h2>
        <p className="section-subtitle text-center text-gray-600">
          En digitalisant votre environnement de travail et vos processus
          métiers, vous améliorez la productivité de vos équipes...
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
          <motion.div
            className="service-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="service-card-header"
              style={{ backgroundImage: `url(${Image1})` }}
            ></div>
            <div className="service-card-body">
              <h3>Audit stratégique et conseil en intégration</h3>
              <p>
                Nos consultants vous accompagnent en amont de vos projets à
                travers des ateliers stratégiques.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="service-card-header"
              style={{ backgroundImage: `url(${Image2})` }}
            ></div>
            <div className="service-card-body">
              <h3>Gestion de projets informatiques</h3>
              <p>
                Nous proposons un accompagnement global sur l’ensemble du cycle
                de vie de vos projets.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="service-card-header"
              style={{ backgroundImage: `url(${Image3})` }}
            ></div>
            <div className="service-card-body">
              <h3>Formations et conduite du changement</h3>
              <p>
                Nous menons des plans de transformation autour de la
                communication et formation.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="service-card-header"
              style={{ backgroundImage: `url(${Image4})` }}
            ></div>
            <div className="service-card-body">
              <h3>Délégation de compétences / régie</h3>
              <p>
                Nous renforçons vos équipes en proposant des profils techniques
                et métiers.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
