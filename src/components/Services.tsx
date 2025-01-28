// src/components/Services.tsx
import React from 'react'

const Services: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Nos Services</h2>
        <p className="text-gray-600 mb-8">
          Découvrez notre gamme de services pour booster votre activité.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Génération de leads</h3>
            <p className="text-gray-700">
              Stratégies efficaces pour développer votre portefeuille client.
            </p>
          </div>
          <div className="border p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Publicité en ligne</h3>
            <p className="text-gray-700">
              Campagnes Google Ads, Facebook, LinkedIn, etc.
            </p>
          </div>
          <div className="border p-6 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Marketing sur les réseaux sociaux</h3>
            <p className="text-gray-700">
              Animation, modération et création de contenus engageants.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
