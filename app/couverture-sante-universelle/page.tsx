import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function CouvertureSanteUniverselle() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'Couverture Santé Universelle' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#00b7ff] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Couverture Santé Universelle</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              "Chacun ce qu'il peut, chacun ce dont il a besoin" - La vision d'une santé accessible à tous les Congolais
            </p>
          </div>
        </div>
      </div>

      {/* Définition CSU */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Qu'est-ce que la CSU ?</h2>
              <p className="text-xl text-gray-700 mb-6">
                La <strong>Couverture Santé Universelle (CSU)</strong> garantit que tous les individus et 
                communautés reçoivent les services de santé dont ils ont besoin, 
                sans subir de difficultés financières.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#035fa9] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Accès équitable</strong> aux services de santé essentiels</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#035fa9] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Protection financière</strong> contre les coûts de santé</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#035fa9] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Qualité des soins</strong> selon les standards internationaux</p>
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

      {/* Le Principe Fondamental */}
      <div className="bg-[#e6f1f8] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Le Principe Fondamental</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center">
              <blockquote className="text-4xl font-bold text-[#035fa9] mb-6 italic">
                "Chacun ce qu'il peut, chacun ce dont il a besoin"
              </blockquote>
              <p className="text-xl text-gray-700 mb-8">
                Ce principe de solidarité guide la transformation du système de santé congolais, 
                où chaque citoyen contribue selon ses capacités et reçoit des soins selon ses besoins, 
                sans discrimination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-[#e5004c] mb-2">Chacun ce qu'il peut</h4>
                  <p className="text-gray-600">Contribution solidaire via taxes, redevances et cotisations</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-[#00a19a] mb-2">Chacun ce dont il a besoin</h4>
                  <p className="text-gray-600">Accès aux soins essentiels sans barrière financière</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pourquoi la CSU en RDC ? */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Pourquoi la CSU en RDC ?</h2>
            <p className="text-xl text-gray-700">
              La République Démocratique du Congo fait face à des défis sanitaires majeurs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#f9e5ea] rounded-lg">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-[#e5004c] mb-3">Charge Financière</h3>
              <div className="text-3xl font-bold text-[#e5004c] mb-2">43,1%</div>
              <p className="text-gray-600 text-sm">Des dépenses de santé supportées par les ménages</p>
            </div>
            
            <div className="text-center p-6 bg-[#fff5e5] rounded-lg">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-[#f9b233] mb-3">Population</h3>
              <div className="text-3xl font-bold text-[#f9b233] mb-2">85M+</div>
              <p className="text-gray-600 text-sm">Habitants à couvrir d'ici 2034</p>
            </div>
            
            <div className="text-center p-6 bg-[#e5f7f7] rounded-lg">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-[#00a19a] mb-3">Territoire</h3>
              <div className="text-3xl font-bold text-[#00a19a] mb-2">2,3M</div>
              <p className="text-gray-600 text-sm">km² à couvrir sur 26 provinces</p>
            </div>
            
            <div className="text-center p-6 bg-[#e6f1f8] rounded-lg">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Urgence</h3>
              <div className="text-3xl font-bold text-[#035fa9] mb-2">2030</div>
              <p className="text-gray-600 text-sm">Objectif de Développement Durable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Le Rôle du FPS */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Le Rôle du FPS dans la CSU</h2>
            <p className="text-xl text-gray-700">
              Architecte et financeur de la transformation du système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobilisation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-[#035fa9] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-4 text-center">Mobilisation de Ressources</h3>
              <p className="text-gray-700 text-center mb-4">
                6 mécanismes innovants de financement pour assurer un flux prévisible de ressources
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#035fa9]">7,2M USD</div>
                <div className="text-sm text-gray-600">Déjà mobilisés</div>
              </div>
            </div>
            
            {/* Distribution */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#e5004c] mb-4 text-center">Distribution Équitable</h3>
              <p className="text-gray-700 text-center mb-4">
                Allocation des ressources selon les besoins prioritaires et géographiques
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#e5004c]">333 ESS</div>
                <div className="text-sm text-gray-600">Établissements soutenus</div>
              </div>
            </div>
            
            {/* Innovation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#00a19a] mb-4 text-center">Innovation Sanitaire</h3>
              <p className="text-gray-700 text-center mb-4">
                Services novateurs comme les ambulances gratuites et collecte de sang
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00a19a]">1 491</div>
                <div className="text-sm text-gray-600">Patients transportés</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation 2034 */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">La Transformation CSU 2034</h2>
            <p className="text-xl">
              Une vision claire pour réduire drastiquement la charge financière des ménages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Situation Actuelle */}
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Situation Actuelle</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Ménages</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[86%] h-4 bg-[#e5004c] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#f9b233]">43,1%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Reste du Monde</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[76%] h-4 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="font-bold text-white">37,9%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">État</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[31%] h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="font-bold text-white">15,5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision 2034 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Vision 2034</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Partenaires PTF</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[84%] h-4 bg-orange-400 rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#f9b233]">42%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">État</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[68%] h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#00b7ff]">34%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Ménages</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-white/20 rounded-full mr-3">
                      <div className="w-[48%] h-4 bg-[#00a19a] rounded-full"></div>
                    </div>
                    <span className="font-bold text-[#00a19a]">24%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white/10 p-6 rounded-lg inline-block">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">-19,1%</div>
              <div className="text-white">Réduction de la charge financière des ménages</div>
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
                pour la réalisation de la Couverture Santé Universelle constitue le socle 
                de cette transformation historique.
              </p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg">
                  Cet engagement présidentiel se traduit par une mobilisation sans précédent 
                  de ressources nationales et un cadre légal innovant pour financer durablement 
                  la santé de tous les Congolais.
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