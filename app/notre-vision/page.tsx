import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function NotreVision() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'Notre Vision' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#00b7ff] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Notre Vision</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              "Chacun ce qu'il peut, chacun ce dont il a besoin" - La Couverture Santé Universelle en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Section Vision Principale */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Réaliser la CSU en RDC</h2>
              <p className="text-xl text-gray-700 mb-6">
                Notre vision consiste à réaliser la <strong>Couverture Santé Universelle</strong> en République Démocratique du Congo, 
                garantissant l'accès aux soins de santé essentiels pour tous les Congolais, 
                sans distinction de classe sociale, de région ou de capacité financière.
              </p>
              <div className="bg-[#e6f1f8] p-6 rounded-lg border-l-4 border-[#035fa9]">
                <p className="text-lg font-semibold text-[#035fa9] italic">
                  "Chacun ce qu'il peut, chacun ce dont il a besoin"
                </p>
                <p className="text-gray-600 mt-2">
                  Principe fondamental de solidarité qui guide notre action vers une santé accessible à tous
                </p>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#035fa9]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Objectifs Chiffrés */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Transformation d'ici 2034</h2>
            <p className="text-xl text-gray-700">
              Réduire drastiquement la charge financière des ménages congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Situation actuelle */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#e5004c] mb-6 text-center">Situation Actuelle</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ménages</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[86%] h-4 bg-[#e5004c] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#e5004c]">43,1%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reste du Monde</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[76%] h-4 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">37,9%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">État</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[31%] h-4 bg-[#035fa9] rounded-full"></div>
                    </div>
                    <span className="font-bold">15,5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entreprises</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[6%] h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">3,2%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision 2034 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#00a19a] mb-6 text-center">Vision 2034</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Partenaires PTF</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[84%] h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">42%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">État</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[68%] h-4 bg-[#035fa9] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#00a19a]">34%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ménages</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[48%] h-4 bg-[#00a19a] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#00a19a]">24%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CSU & TPS</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-[24%] h-4 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Impact de la transformation */}
          <div className="bg-[#035fa9] p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Impact de la Transformation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#f9b233]">-19,1%</div>
                <div className="text-sm">Réduction charge ménages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00b7ff]">+18,5%</div>
                <div className="text-sm">Augmentation État</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00a19a]">85M+</div>
                <div className="text-sm">Congolais bénéficiaires</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Piliers de la Vision */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Les 4 Piliers de Notre Vision</h2>
            <p className="text-xl text-gray-700">
              Les fondements sur lesquels repose la réalisation de la CSU en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#035fa9] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-4">Accessibilité</h3>
              <p className="text-gray-700">
                Soins de santé accessibles géographiquement et financièrement pour tous les Congolais
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#e5004c] mb-4">Qualité</h3>
              <p className="text-gray-700">
                Services de santé de qualité répondant aux normes internationales et aux besoins locaux
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Équité</h3>
              <p className="text-gray-700">
                Réduction des inégalités d'accès aux soins entre régions et classes sociales
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Durabilité</h3>
              <p className="text-gray-700">
                Financement pérenne et gouvernance responsable pour un impact à long terme
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Présidentiel */}
      <div className="bg-[#e5004c] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Engagement Présidentiel</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl mb-8 italic">
                "Un pays, un cap, une santé pour tous"
              </p>
              <p className="text-xl mb-6">
                L'engagement du Président <strong>Félix Antoine Tshisekedi Tshilombo</strong> 
                pour la réalisation de la Couverture Santé Universelle constitue le fondement 
                de notre vision et guide toutes nos actions.
              </p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg">
                  Cette vision présidentielle se traduit par une mobilisation sans précédent 
                  de ressources innovantes et un engagement politique fort pour transformer 
                  le système de santé congolais.
                </p>
              </div>
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