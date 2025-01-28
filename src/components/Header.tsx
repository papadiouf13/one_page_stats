// src/components/Header.tsx
import React from 'react';
import image from '../assets/images/Logo-stream-management.png';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 py-2 flex items-center justify-between">
        <div>
          <img src={image} alt="Stream Management Logo" className="logo" />
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#offres" className="text-gray-600 hover:text-gray-900">
                Nos offres
              </a>
            </li>
            <li>
              <a href="#clients" className="text-gray-600 hover:text-gray-900">
                Nos clients
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Nos services
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contactez-nous
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
