// src/components/Solution.tsx
import React from 'react'

const Solution: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Notre Solution Tout-en-Un</h2>
        <p className="text-gray-700 mb-6">
          De l’audit initial à la mise en place de campagnes,
          nous offrons une solution complète pour votre entreprise.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Diagnostic et audit de votre situation</li>
          <li>Définition d’une stratégie personnalisée</li>
          <li>Conception, design et déploiement</li>
          <li>Suivi et optimisation continue</li>
        </ul>
      </div>
    </section>
  )
}

export default Solution
