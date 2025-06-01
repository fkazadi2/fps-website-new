import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function MedecineTraditionnelle() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Médecine Traditionnelle' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#228B22] to-[#32CD32] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Médecine Traditionnelle</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Valorisation et intégration des savoirs ancestraux congolais dans le système de santé moderne
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">La Richesse des Savoirs Ancestraux</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              La République Démocratique du Congo possède l'une des pharmacopées traditionnelles les plus riches au monde. 
              Le FPS œuvre pour l'intégration harmonieuse de ces savoirs dans le système de santé moderne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f0f8f0] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#228B22] mb-4">11 000+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Espèces Végétales</div>
              <div className="text-sm text-gray-600">Identifiées en RDC</div>
            </div>
            
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">3 500</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Plantes Médicinales</div>
              <div className="text-sm text-gray-600">Usage thérapeutique reconnu</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">450</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Ethnies</div>
              <div className="text-sm text-gray-600">Savoirs traditionnels uniques</div>
            </div>
            
            <div className="text-center bg-[#f9e5ea] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-4">80%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Population Rurale</div>
              <div className="text-sm text-gray-600">Recours médecine traditionnelle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission du FPS */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Mission du FPS</h2>
              <p className="text-xl text-gray-700 mb-6">
                Promouvoir la <strong>recherche, validation scientifique et intégration</strong> de la médecine traditionnelle 
                congolaise dans l'offre de soins, tout en respectant les savoirs ancestraux et la propriété intellectuelle 
                des communautés.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#228B22] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Validation scientifique des remèdes traditionnels</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#228B22] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Formation et certification des tradipraticiens</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#228B22] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Développement de médicaments à base de plantes</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#228B22] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Protection des savoirs traditionnels</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#228B22]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Programme de Valorisation */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Programme de Valorisation</h2>
            <p className="text-xl text-gray-700">
              Une approche intégrée pour documenter, valider et intégrer les savoirs traditionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Phase 1 : Recensement</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Cartographie des savoirs</li>
                <li>• Documentation pratiques</li>
                <li>• Inventaire des plantes</li>
                <li>• Interviews tradipraticiens</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold">156</div>
                <div className="text-xs">Zones inventoriées</div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-[#228B22] to-[#32CD32] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Phase 2 : Recherche</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Analyses phytochimiques</li>
                <li>• Tests pharmacologiques</li>
                <li>• Études toxicologiques</li>
                <li>• Essais cliniques</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold">23</div>
                <div className="text-xs">Remèdes à l'étude</div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Phase 3 : Normalisation</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Standards de qualité</li>
                <li>• Protocoles fabrication</li>
                <li>• Certification produits</li>
                <li>• Formation praticiens</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold">8</div>
                <div className="text-xs">Standards développés</div>
              </div>
            </div>
            
            {/* Phase 4 */}
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Phase 4 : Intégration</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Collaboration ESS</li>
                <li>• Formation personnel</li>
                <li>• Approvisionnement</li>
                <li>• Suivi-évaluation</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold">12</div>
                <div className="text-xs">ESS pilotes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenaires de Recherche */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenaires de Recherche</h2>
            <p className="text-xl text-gray-700">
              Collaboration avec institutions académiques et centres de recherche
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#035fa9] mb-4">Universités Nationales</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">UNIKIN - Faculté de Pharmacie</span>
                </div>
                <div className="flex items-center p-3 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">UNILU - Centre Wallonie-Bruxelles</span>
                </div>
                <div className="flex items-center p-3 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">UNIKIS - Département Chimie</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Centres de Recherche</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-[#f0f8f0] rounded">
                  <div className="w-3 h-3 bg-[#228B22] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">CIRAD - Montpellier</span>
                </div>
                <div className="flex items-center p-3 bg-[#f0f8f0] rounded">
                  <div className="w-3 h-3 bg-[#228B22] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">IRD - Institut de Recherche</span>
                </div>
                <div className="flex items-center p-3 bg-[#f0f8f0] rounded">
                  <div className="w-3 h-3 bg-[#228B22] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">INERA - RDC</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Organisations</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-[#fff5e5] rounded">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">OMS - Médecine Traditionnelle</span>
                </div>
                <div className="flex items-center p-3 bg-[#fff5e5] rounded">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">PROMETRA International</span>
                </div>
                <div className="flex items-center p-3 bg-[#fff5e5] rounded">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span className="text-sm font-semibold">AMETRA RDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Réalisations */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Réalisations du Programme</h2>
            <p className="text-xl text-gray-700">
              Résultats concrets de la valorisation de la médecine traditionnelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Recherche et Documentation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">1 247</div>
                  <div className="text-sm opacity-90">Recettes documentées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">89</div>
                  <div className="text-sm opacity-90">Tradipraticiens interviewés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">23</div>
                  <div className="text-sm opacity-90">Remèdes validés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm opacity-90">Publications scientifiques</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#228B22] to-[#32CD32] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Formation et Certification</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">156</div>
                  <div className="text-sm opacity-90">Tradipraticiens formés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm opacity-90">Centres de formation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">34</div>
                  <div className="text-sm opacity-90">Certificats délivrés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">8</div>
                  <div className="text-sm opacity-90">Modules de formation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projets d'Avenir */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Projets d'Avenir</h2>
            <p className="text-xl">
              Vision 2030 pour la médecine traditionnelle en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Unité de Production</h3>
              <p className="text-white/90 mb-4">
                Création d'une unité moderne de production de médicaments traditionnels améliorés (MTA)
              </p>
              <div className="text-sm opacity-80">Objectif : 2026</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Jardin Botanique</h3>
              <p className="text-white/90 mb-4">
                Établissement d'un jardin botanique national pour la conservation des plantes médicinales
              </p>
              <div className="text-sm opacity-80">Objectif : 2027</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Pharmacopée Nationale</h3>
              <p className="text-white/90 mb-4">
                Publication de la première pharmacopée congolaise officielle
              </p>
              <div className="text-sm opacity-80">Objectif : 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#035fa9] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
} 