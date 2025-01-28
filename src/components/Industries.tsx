// src/components/Industries.tsx
import React from 'react'

const Industries: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Industries et Secteurs</h2>
        <p className="text-gray-600 mb-8">
          Nous accompagnons des clients issus de divers secteurs.
        </p>
        <ul className="flex flex-wrap gap-4">
          <li className="bg-white p-4 shadow rounded">Finance et Banque</li>
          <li className="bg-white p-4 shadow rounded">Services aux entreprises</li>
          <li className="bg-white p-4 shadow rounded">Produits de consommation</li>
          <li className="bg-white p-4 shadow rounded">Aéronautique et voyages</li>
          <li className="bg-white p-4 shadow rounded">Éducation et formations</li>
        </ul>
      </div>
    </section>
  )
}

export default Industries
