import React, { useState } from 'react';
import image from '../assets/images/Logo-stream-management.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between flex-wrap">
        <div>
          <img src={image} alt="Stream Management Logo" className="logo" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
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
