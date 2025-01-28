// src/components/Case-studies.tsx
import React from 'react'

const CaseStudies: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Études de cas</h2>
        <p className="text-gray-600 mb-8">
          Découvrez nos projets récents et l’impact réel pour nos clients.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Transformation digitale pour une PME</h3>
            <p className="text-gray-700">
              Amélioration du chiffre d’affaires de 40% en 6 mois.
            </p>
          </div>
          <div className="border p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Campagne marketing internationale</h3>
            <p className="text-gray-700">
              Acquisition de plus de 10 000 leads qualifiés.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
