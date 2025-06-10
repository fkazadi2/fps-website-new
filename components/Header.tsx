'use client';

import { ChevronDownIcon, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  // Fermer le menu quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="w-full sticky top-0 z-50">
      {/* Header principal bleu */}
      <div className="bg-[#035fa9]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo et nom */}
            <Link href="/" className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              <Image 
                src="/Logo_01.png" 
                alt="Logo FPS" 
                width={60}
                height={60}
                className="lg:w-20 lg:h-20 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-sm md:text-base lg:text-xl leading-tight tracking-[-0.02em]">
                  Fonds de promotion<br />
                    pour la Santé
                  </h1>
                </div>
            </Link>

            {/* Navigation principale - Desktop */}
            <nav className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-1 ring-3 ring-inset ring-white text-white px-4 py-2 rounded text-sm font-bold hover:bg-white hover:text-[#035fa9] transition-colors">
                  <span>Découvrez le FPS</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
              
              <div className="relative">
                <button 
                  type="button"
                  onClick={() => toggleDropdown('presse')}
                  className="flex items-center space-x-1 ring-3 ring-inset ring-white text-white px-4 py-2 rounded text-sm font-bold hover:bg-white hover:text-[#035fa9] transition-colors"
                >
                  <span>Centre de presse</span>
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'presse' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Sous-menu Centre de presse */}
                {activeDropdown === 'presse' && (
                  <div className="absolute top-full left-0 w-[550px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Image à la une */}
                      <div className="relative h-64 bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] rounded-l-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gray-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-2">Centre de presse</h3>
                          <p className="text-sm opacity-90">Suivez nos activités et actualités</p>
                        </div>
                      </div>
                      
                      {/* Contenu du menu */}
                      <div className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Informations</h4>
                            <ul className="space-y-2">
                              <li><Link href="/actualites" className="text-gray-700 hover:text-[#035fa9] text-sm">Actualités</Link></li>
                              <li><Link href="/evenements" className="text-gray-700 hover:text-[#035fa9] text-sm">Événements</Link></li>
                              <li><Link href="/a-venir" className="text-gray-700 hover:text-[#035fa9] text-sm">À venir</Link></li>
                              <li><Link href="/annonces" className="text-gray-700 hover:text-[#035fa9] text-sm">Annonces</Link></li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Ressources</h4>
                            <ul className="space-y-2">
                              <li><Link href="/photos-videos" className="text-gray-700 hover:text-[#035fa9] text-sm">Photos et vidéos</Link></li>
                              <li><Link href="/avant-apres" className="text-gray-700 hover:text-[#035fa9] text-sm">Avant/Après</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="bg-[#e1090e] text-white px-4 py-2 rounded text-sm font-bold hover:bg-red-700 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Navigation pour tablette */}
            <nav className="hidden md:flex lg:hidden items-center space-x-3">
              <button 
                type="button"
                onClick={() => toggleDropdown('presse')}
                className="flex items-center space-x-1 ring-2 ring-inset ring-white text-white px-3 py-2 rounded text-sm font-bold hover:bg-white hover:text-[#035fa9] transition-colors"
              >
                <span>Centre de presse</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === 'presse' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <Link href="/contact" className="bg-[#e1090e] text-white px-3 py-2 rounded text-sm font-bold hover:bg-red-700 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Bouton menu mobile */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link href="/actualites" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Actualités
            </Link>
            <Link href="/evenements" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Événements
            </Link>
            <Link href="/a-venir" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              À venir
            </Link>
            <Link href="/annonces" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Annonces
            </Link>
            <Link href="/photos-videos" className="block text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Photos et vidéos
            </Link>
            <Link href="/contact" className="block bg-[#e1090e] text-white px-4 py-2 rounded font-bold text-center" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Barre de navigation secondaire blanche avec stroke bleu ciel - Hidden sur mobile et tablette */}
      <div className="hidden lg:block bg-white border-b-2 border-[#00b7ff] shadow-md">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-end space-x-8 h-12">
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown('mission')}
                className="flex items-center space-x-1 text-black text-base font-bold transition-colors"
              >
                <span>Notre Raison d'Être</span>
                <ChevronDownIcon className={`h-4 w-4 stroke-[3.5px] transition-transform duration-200 ${
                  activeDropdown === 'mission' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Notre Raison d'Être */}
              {activeDropdown === 'mission' && (
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Image à la une */}
                    <div className="relative h-64 bg-gradient-to-br from-[#035fa9] to-[#00b7ff] rounded-l-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Notre engagement pour la CSU</h3>
                        <p className="text-sm opacity-90">Une santé pour tous les Congolais</p>
                      </div>
                    </div>
                    
                    {/* Contenu du menu */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Vision & Mission</h4>
                          <ul className="space-y-2">
                            <li><Link href="/notre-vision" className="text-gray-700 hover:text-[#035fa9] text-sm">Notre vision</Link></li>
                            <li><Link href="/notre-mission" className="text-gray-700 hover:text-[#035fa9] text-sm">Notre mission</Link></li>
                            <li><Link href="/notre-raison-detre" className="text-gray-700 hover:text-[#035fa9] text-sm">À propos du FPS</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">La CSU en RDC</h4>
                          <ul className="space-y-2">
                            <li><Link href="/couverture-sante-universelle" className="text-gray-700 hover:text-[#035fa9] text-sm">Couverture Santé Universelle</Link></li>
                            <li><Link href="/etat-des-lieux" className="text-gray-700 hover:text-[#035fa9] text-sm">État des lieux</Link></li>
                            <li><Link href="/cadre-legal" className="text-gray-700 hover:text-[#035fa9] text-sm">Cadre légal</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <span className="text-[#00b7ff] font-bold text-xl">|</span>
            
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown('action')}
                className="flex items-center space-x-1 text-black text-base font-bold transition-colors"
              >
                <span>Agir pour la santé</span>
                <ChevronDownIcon className={`h-4 w-4 stroke-[3.5px] transition-transform duration-200 ${
                  activeDropdown === 'action' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Agir pour la santé */}
              {activeDropdown === 'action' && (
                <div className="absolute top-full left-0 w-[700px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-3 gap-0">
                    {/* Image à la une */}
                    <div className="relative h-80 bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] rounded-l-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Nos interventions</h3>
                        <p className="text-sm opacity-90">5 domaines d'action pour la santé</p>
                      </div>
                    </div>
                    
                    {/* Première colonne */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Transport & Urgences</h4>
                          <ul className="space-y-2">
                            <li><Link href="/service-ambulance" className="text-gray-700 hover:text-[#035fa9] text-sm">Service d'ambulance</Link></li>
                            <li><Link href="/transport-patients" className="text-gray-700 hover:text-[#035fa9] text-sm">Transport de patients</Link></li>
                            <li><Link href="/urgences-medicales" className="text-gray-700 hover:text-[#035fa9] text-sm">Urgences médicales</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Médicaments</h4>
                          <ul className="space-y-2">
                            <li><Link href="/approvisionnement" className="text-gray-700 hover:text-[#035fa9] text-sm">Approvisionnement</Link></li>
                            <li><Link href="/medicaments-essentiels" className="text-gray-700 hover:text-[#035fa9] text-sm">Médicaments essentiels</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième colonne */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Infrastructures</h4>
                          <ul className="space-y-2">
                            <li><Link href="/agir-pour-la-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Vue d'ensemble</Link></li>
                            <li><Link href="/equipements-medicaux" className="text-gray-700 hover:text-[#035fa9] text-sm">Équipements médicaux</Link></li>
                            <li><Link href="/equipements-medicaux" className="text-gray-700 hover:text-[#035fa9] text-sm">Modernisation</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Spécialisations</h4>
                          <ul className="space-y-2">
                            <li><Link href="/agir-pour-la-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Médecine traditionnelle</Link></li>
                            <li><Link href="/collecte-sang" className="text-gray-700 hover:text-[#035fa9] text-sm">Collecte de sang</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <span className="text-[#00b7ff] font-bold text-xl">|</span>
            
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown('impact')}
                className="flex items-center space-x-1 text-black text-base font-bold transition-colors"
              >
                <span>Impact & Réalisations</span>
                <ChevronDownIcon className={`h-4 w-4 stroke-[3.5px] transition-transform duration-200 ${
                  activeDropdown === 'impact' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Impact & Réalisations */}
              {activeDropdown === 'impact' && (
                <div className="absolute top-full left-0 w-[650px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Image à la une */}
                    <div className="relative h-72 bg-gradient-to-br from-[#00a19a] to-[#26d0ce] rounded-l-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Nos réalisations</h3>
                        <p className="text-sm opacity-90">333 ESS • 7,2M USD • 1 491 transferts</p>
                      </div>
                    </div>
                    
                    {/* Contenu du menu */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Réalisations</h4>
                          <ul className="space-y-2">
                            <li><Link href="/impact-realisations" className="text-gray-700 hover:text-[#035fa9] text-sm">Bilan à mi-parcours</Link></li>
                            <li><Link href="/impact-chiffres" className="text-gray-700 hover:text-[#035fa9] text-sm">Impact en chiffres</Link></li>
                            <li><Link href="/impact-realisations" className="text-gray-700 hover:text-[#035fa9] text-sm">Carte d'impact national</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Témoignages</h4>
                          <ul className="space-y-2">
                            <li><Link href="/impact-realisations" className="text-gray-700 hover:text-[#035fa9] text-sm">Voix des bénéficiaires</Link></li>
                            <li><Link href="/impact-realisations" className="text-gray-700 hover:text-[#035fa9] text-sm">Professionnels de santé</Link></li>
                            <li><Link href="/impact-realisations" className="text-gray-700 hover:text-[#035fa9] text-sm">Transformation</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Communication</h4>
                          <ul className="space-y-2">
                            <li><Link href="/photos-videos" className="text-gray-700 hover:text-[#035fa9] text-sm">Photos et vidéos</Link></li>
                            <li><Link href="/avant-apres" className="text-gray-700 hover:text-[#035fa9] text-sm">Avant/Après</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <span className="text-[#00b7ff] font-bold text-xl">|</span>
            
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown('financing')}
                className="flex items-center space-x-1 text-black text-base font-bold transition-colors"
              >
                <span>Financement de la santé</span>
                <ChevronDownIcon className={`h-4 w-4 stroke-[3.5px] transition-transform duration-200 ${
                  activeDropdown === 'financing' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Financement */}
              {activeDropdown === 'financing' && (
                <div className="absolute top-full right-0 w-[600px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Image à la une */}
                    <div className="relative h-64 bg-gradient-to-br from-[#f9b233] to-[#ffc107] rounded-l-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Financer la santé</h3>
                        <p className="text-sm opacity-90">Sources innovantes et durables</p>
                      </div>
                    </div>
                    
                    {/* Contenu du menu */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Financements</h4>
                          <ul className="space-y-2">
                            <li><Link href="/sources-financement" className="text-gray-700 hover:text-[#035fa9] text-sm">Sources de financement</Link></li>
                            <li><Link href="/financement-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Mécanismes innovants</Link></li>
                            <li><Link href="/financement-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Taxes de promotion</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Services</h4>
                          <ul className="space-y-2">
                            <li><Link href="/financement-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Déposer une requête</Link></li>
                            <li><Link href="/financement-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Fonds d'aide</Link></li>
                            <li><Link href="/financement-sante" className="text-gray-700 hover:text-[#035fa9] text-sm">Prix FPS</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <span className="text-[#00b7ff] font-bold text-xl">|</span>
            
            <div className="relative">
              <button 
                type="button"
                onClick={() => toggleDropdown('research')}
                className="flex items-center space-x-1 text-black text-base font-bold transition-colors"
              >
                <span>Recherche et rapports</span>
                <ChevronDownIcon className={`h-4 w-4 stroke-[3.5px] transition-transform duration-200 ${
                  activeDropdown === 'research' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Recherche */}
              {activeDropdown === 'research' && (
                <div className="absolute top-full right-0 w-[550px] bg-white shadow-xl border border-gray-200 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Image à la une */}
                    <div className="relative h-64 bg-gradient-to-br from-[#6f42c1] to-[#8969d3] rounded-l-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Recherche & Données</h3>
                        <p className="text-sm opacity-90">Publications et analyses</p>
                      </div>
                    </div>
                    
                    {/* Contenu du menu */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Publications</h4>
                          <ul className="space-y-2">
                            <li><Link href="/recherche-rapports" className="text-gray-700 hover:text-[#035fa9] text-sm">Études et recherches</Link></li>
                            <li><Link href="/recherche-rapports" className="text-gray-700 hover:text-[#035fa9] text-sm">Rapports d'activité</Link></li>
                            <li><Link href="/recherche-rapports" className="text-gray-700 hover:text-[#035fa9] text-sm">Bilans annuels</Link></li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Données</h4>
                          <ul className="space-y-2">
                            <li><Link href="/recherche-rapports" className="text-gray-700 hover:text-[#035fa9] text-sm">Statistiques sanitaires</Link></li>
                            <li><Link href="/recherche-rapports" className="text-gray-700 hover:text-[#035fa9] text-sm">Perspectives</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Icône de recherche */}
            <button className="text-black hover:text-[#00b7ff] transition-colors ml-4">
              <svg className="h-5 w-5 stroke-[2.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 