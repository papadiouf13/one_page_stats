// src/components/Reviews.tsx
import React from 'react'

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Avis de nos clients</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded shadow-sm">
            <p className="text-gray-700 mb-4">
              “L’équipe a su comprendre nos besoins et proposer des solutions innovantes.
              Nous recommandons vivement leurs services.”
            </p>
            <h4 className="font-semibold">Jean Dupont</h4>
            <span className="text-sm text-gray-500">CEO, Entreprise XYZ</span>
          </div>
          <div className="border p-6 rounded shadow-sm">
            <p className="text-gray-700 mb-4">
              “Une expertise pointue et un accompagnement sur mesure. Résultats au-delà de nos attentes !”
            </p>
            <h4 className="font-semibold">Marie Moreau</h4>
            <span className="text-sm text-gray-500">Directrice Marketing, ABC Corp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
