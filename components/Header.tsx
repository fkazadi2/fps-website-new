'use client';

import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

export default function Header() {

  return (
    <header className="w-full">
      {/* Ligne jaune supérieure */}
      <div className="w-full h-1 bg-[#F7B500]"></div>
      
      {/* Header principal blanc */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-30">
            {/* Logo et nom */}
            <div className="flex items-center space-x-3">
              <Image 
                src="/fps-logo.jpg" 
                alt="Logo FPS" 
                width={120}
                height={120}
                className="object-contain"
              />
                              <div>
                  <h1 className="text-blue-600 font-bold text-2xl leading-none tracking-[-0.02em]">
                    Fonds de Promotion<br />
                    pour la Santé
                  </h1>
                </div>
            </div>

            {/* Navigation principale */}
            <nav className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-4 py-2 rounded border border-blue-300 hover:bg-blue-200 transition-colors font-bold tracking-[-0.02em]"
                >
                  <span>Découvrez le FPS</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
              
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded border border-blue-300 hover:bg-blue-200 transition-colors font-bold tracking-[-0.02em]">
                Centre de presse
              </button>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-bold tracking-[-0.02em]">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Barre de navigation secondaire bleue */}
      <div className="bg-blue-600">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-end space-x-8 h-12">
            <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors font-bold tracking-[-0.02em]">
              Qui sommes-nous?
            </a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors font-bold tracking-[-0.02em]">
              Ce que nous faisons
            </a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors font-bold tracking-[-0.02em]">
              Recherche et rapports
            </a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors font-bold tracking-[-0.02em]">
              Récits et temps forts
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 