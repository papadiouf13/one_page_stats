import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image4.jpg";
import Image3 from "../assets/images/image5.jpg";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image2, Image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-auto min-h-[600px] w-full overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 mt-16">
      {/* Background sliding images */}
      <AnimatePresence mode="wait">
        {images.length > 0 && (
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="h-full w-full object-cover opacity-50"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center justify-start px-8 text-left">
        <div className="space-y-6">
          <motion.h1
            className="max-w-lg text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Enrichissez votre écosystème digital et accélérez votre business
          </motion.h1>

          <motion.p
            className="max-w-md text-lg text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faites le choix d’un acteur de confiance pour déployer, enrichir et
            maintenir des solutions collaboratives et digitales (ECM/CCM/Office
            365) de dernière génération au sein de votre entreprise.
          </motion.p>

          <motion.button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Voir nos offres
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
