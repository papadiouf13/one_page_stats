// src/components/Statistics.tsx
import React from 'react'

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-blue-800 opacity-70">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl text-white font-bold mb-2">Plus de 25 ans d'expérience</h2>
        <p className="text-white mb-8">
          Nous aidons les entreprises à innover, se transformer et atteindre leurs objectifs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-4xl font-bold text-purple-800">1106</h3>
            <p>Projets complétés</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800">1432</h3>
            <p>Clients satisfaits</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800">267</h3>
            <p>Récompenses reçues</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800">100%</h3>
            <p>Taux de réussite</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
