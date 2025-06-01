import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function NotreMission() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'Notre Mission' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Notre Mission</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Bras financier du MSPHPS et maçon de la Couverture Santé Universelle
            </p>
          </div>
        </div>
      </div>

      {/* Mission Principale */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Rôle Stratégique</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Le Fonds de Promotion de la Santé agit comme le <strong>bras financier du Ministère de la Santé Publique, 
              Hygiène et Prévention Sociale (MSPHPS)</strong> et comme <strong>architecte de la Couverture Santé Universelle</strong> 
              en République Démocratique du Congo.
            </p>
          </div>
        </div>
      </div>

      {/* 6 Missions Principales */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Nos 6 Missions Principales</h2>
            <p className="text-xl text-gray-700">
              Six domaines d'intervention stratégiques pour transformer le système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#035fa9] to-[#0066cc] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#035fa9]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 1</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#035fa9] mb-4">Infrastructures sanitaires</h3>
                <p className="text-gray-700 mb-4">
                  Financement des projets d'infrastructure, équipements médicaux et modernisation 
                  des établissements de santé à travers tout le territoire national.
                </p>
                <div className="border-l-4 border-[#035fa9] pl-4">
                  <p className="text-sm font-semibold text-[#035fa9]">Réalisations :</p>
                  <p className="text-sm text-gray-600">1,8M USD d'équipements médicaux livrés</p>
                </div>
              </div>
            </div>

            {/* Mission 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#e5004c]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 2</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#e5004c] mb-4">Médicaments & pharmacie</h3>
                <p className="text-gray-700 mb-4">
                  Promotion de la production locale, médecine traditionnelle et approvisionnement 
                  en médicaments essentiels pour les établissements de santé.
                </p>
                <div className="border-l-4 border-[#e5004c] pl-4">
                  <p className="text-sm font-semibold text-[#e5004c]">Réalisations :</p>
                  <p className="text-sm text-gray-600">7,2M USD engagés pour 333 ESS</p>
                </div>
              </div>
            </div>

            {/* Mission 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#f9b233] to-[#ffc107] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9b233]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 3</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#f9b233] mb-4">Gouvernance en santé</h3>
                <p className="text-gray-700 mb-4">
                  Planification stratégique, normalisation des pratiques, recherche appliquée 
                  et développement des ressources humaines en santé.
                </p>
                <div className="border-l-4 border-[#f9b233] pl-4">
                  <p className="text-sm font-semibold text-[#f9b233]">Réalisations :</p>
                  <p className="text-sm text-gray-600">Formation et renforcement capacités</p>
                </div>
              </div>
            </div>

            {/* Mission 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#00a19a] to-[#26d0ce] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00a19a]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 4</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00a19a] mb-4">Financements innovants</h3>
                <p className="text-gray-700 mb-4">
                  Collecte et gestion des ressources via redevances minières, taxes de promotion 
                  (2% CIF) et droits d'accises sur produits nocifs.
                </p>
                <div className="border-l-4 border-[#00a19a] pl-4">
                  <p className="text-sm font-semibold text-[#00a19a]">Sources :</p>
                  <p className="text-sm text-gray-600">6 mécanismes de financement</p>
                </div>
              </div>
            </div>

            {/* Mission 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#8A9BAD] to-[#a8b8c8] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A9BAD]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 5</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8A9BAD] mb-4">Subventionnement ESS</h3>
                <p className="text-gray-700 mb-4">
                  Réduction des coûts et amélioration de la qualité des soins dans les 
                  établissements de santé par un soutien financier direct.
                </p>
                <div className="border-l-4 border-[#8A9BAD] pl-4">
                  <p className="text-sm font-semibold text-[#8A9BAD]">Réalisations :</p>
                  <p className="text-sm text-gray-600">403 000 USD injectés dans 229 ESS</p>
                </div>
              </div>
            </div>

            {/* Mission 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#6f42c1] to-[#8969d3] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#6f42c1]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mission 6</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#6f42c1] mb-4">Collecte de sang</h3>
                <p className="text-gray-700 mb-4">
                  Formation des prestataires, sécurité transfusionnelle et organisation 
                  de campagnes mobiles de collecte de sang de qualité.
                </p>
                <div className="border-l-4 border-[#6f42c1] pl-4">
                  <p className="text-sm font-semibold text-[#6f42c1]">Réalisations :</p>
                  <p className="text-sm text-gray-600">139 cadres formés • 155 campagnes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Global */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Impact Global de Nos Missions</h2>
            <p className="text-xl max-w-4xl mx-auto">
              Ensemble, ces six missions contribuent à la transformation du système de santé 
              et à la réalisation progressive de la CSU en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">333</div>
              <div className="text-lg">Établissements de santé soutenus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00b7ff] mb-2">7,2M USD</div>
              <div className="text-lg">Engagés en médicaments essentiels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">1 491</div>
              <div className="text-lg">Patients transportés en ambulance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Approche Méthodologique */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Approche</h2>
            <p className="text-xl text-gray-700">
              Une méthodologie rigoureuse pour maximiser l'impact de nos interventions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#035fa9] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#035fa9] mb-2">Diagnostic et Planification</h3>
                    <p className="text-gray-700">Évaluation des besoins et identification des priorités sanitaires</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#e5004c] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#e5004c] mb-2">Mobilisation de Ressources</h3>
                    <p className="text-gray-700">Collecte via mécanismes innovants et partenariats stratégiques</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#f9b233] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#f9b233] mb-2">Mise en Œuvre</h3>
                    <p className="text-gray-700">Déploiement coordonné des interventions selon les standards qualité</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00a19a] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#00a19a] mb-2">Suivi et Évaluation</h3>
                    <p className="text-gray-700">Monitoring continu et ajustements pour optimiser l'impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#035fa9]/20 to-transparent rounded-lg"></div>
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