// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; 2025 Thallo - Tous droits réservés</p>
        <div className="flex items-center gap-4">
          <span className="text-sm">Suivez-nous :</span>
          <ul className="flex gap-2">
            <li>
              <a href="#" className="text-sm hover:underline">Twitter</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
