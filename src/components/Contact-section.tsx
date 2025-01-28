// src/components/Contact-section.tsx
import React from 'react'

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Coordonnées */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="font-semibold mb-1">Royaume-Uni</h3>
              <p>1010 Avenue de la Lune, New York, NY 10018 U.S.</p>
              <p>+1 (212) 345-7890</p>
              <p>business@exemple.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Allemagne</h3>
              <p>1010 Avenue de la Lune, Berlin, DE 12345</p>
              <p>+49 30 123456</p>
              <p>business@exemple.de</p>
            </div>
          </div>

          {/* Formulaire */}
          <form className="md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Votre téléphone"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
