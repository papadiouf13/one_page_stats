// src/components/Header.tsx
import React from 'react'
import image from '../assets/images/Logo-stream-management.png'
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 py-2 flex items-center justify-between">
        <div>
          <img src={image} alt="" />
        </div>

        {/* Menu de navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">Accueil</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">À propos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
