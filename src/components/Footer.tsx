import React from "react";
import Logo from "../assets/images/Logo-stream-management.png"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-16">
        
        {/* Logo à gauche */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Stream Management" className="w-24 mb-2" />
          <p className="text-sm font-semibold text-[#2B579A]">Stream Management</p>
        </div>

        {/* Contact au centre */}
        <div className="text-center text-[#2B579A] md:text-left mt-4 md:mt-0">
          <h3 className="font-bold text-lg">Contactez-nous :</h3>
          <p>12 rue Vivienne 75002 Paris</p>
          <p>Tél: 06 16 40 59 16</p>
          <p>contact@stream-management.fr</p>
        </div>

        <div className="text-center md:text-right mt-4 md:mt-0 text-[#2B579A]">
          <p className="font-bold">
            <a href="#" className="hover:underline">Mentions Légales</a> - 
            <a href="#" className="hover:underline"> Politique d’utilisation des données personnelles</a>
          </p>
          <p className="text-sm mt-1">© 2019 Stream Management - Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
