// src/components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-800 opacity-80 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enrichissez votre écosystème digital et accélérez votre business
          </h1>
          <p className="text-white mb-6">
          Faites le choix d’un acteur de confiance pour déployer, enrichir et maintenir des solutions collaboratives et digitales (ECM/CCM/Office 365) de dernière génération au sein de votre entreprise.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Voir nos offres
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Exemple d'image */}
          {/* <img src="/assets/hero-image.jpg" alt="Hero" className="w-full h-auto rounded" /> */}
          <div className="h-64 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500">[Image Hero]</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
