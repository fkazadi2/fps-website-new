import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function FinancementSante() {
  const breadcrumbItems = [
    { label: 'Financement de la santé' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#0066cc] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Financement de la Santé</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Modèle innovant de financement pour la couverture sanitaire universelle en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Contexte du Financement de la Santé */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Défis du Financement Sanitaire en RDC</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Avec 95 millions d'habitants et un budget santé représentant seulement 2,3% du PIB, 
              la RDC fait face à d'énormes défis de financement de la santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Situation Avant FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">2,3%</div>
                  <div className="text-sm opacity-90">du PIB alloué à la santé vs 15% recommandé OMS</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">67%</div>
                  <div className="text-sm opacity-90">de paiements directs des ménages</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">45%</div>
                  <div className="text-sm opacity-90">de la population sans accès aux soins</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">4,2M</div>
                  <div className="text-sm opacity-90">de personnes en situation d'urgence sanitaire</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Transformation avec FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">66,8M</div>
                  <div className="text-sm opacity-90">USD mobilisés en 2023 pour la santé</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">91%</div>
                  <div className="text-sm opacity-90">de couverture sanitaire dans les zones FPS</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">89%</div>
                  <div className="text-sm opacity-90">de taux de recouvrement des taxes santé</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">4,2M</div>
                  <div className="text-sm opacity-90">de bénéficiaires directs des programmes FPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Le Modèle FPS */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Le Modèle FPS de Financement</h2>
            <p className="text-xl text-gray-700">
              Innovation institutionnelle pour un financement durable de la couverture sanitaire universelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pilier 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#f9b233] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">💰</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f9b233]">Taxes Innovantes</h3>
                    <p className="text-gray-600">Mécanisme de financement dédié</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#fff5e5] p-4 rounded-lg">
                    <div className="text-xl font-bold text-[#f9b233] mb-1">42,6M USD</div>
                    <div className="text-sm text-gray-600">Collectés via taxes promotion santé</div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-3">Sources principales:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Taxes sur tabac et alcool</li>
                    <li>• Taxes sur boissons sucrées</li>
                    <li>• Contributions télécommunications</li>
                    <li>• Redevances secteur minier</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link href="/sources-financement" className="bg-[#f9b233] text-white px-4 py-2 rounded text-sm hover:bg-[#e09a1f] transition-colors">
                    Sources de financement
                  </Link>
                </div>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#00a19a] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00a19a]">Partenariats</h3>
                    <p className="text-gray-600">Cofinancement stratégique</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#e5f7f7] p-4 rounded-lg">
                    <div className="text-xl font-bold text-[#00a19a] mb-1">24,1M USD</div>
                    <div className="text-sm text-gray-600">Partenariats public-privé internationaux</div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-3">Partenaires clés:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Banque Mondiale (6,7M USD)</li>
                    <li>• OMS (3,2M USD)</li>
                    <li>• UNICEF (2,8M USD)</li>
                    <li>• Secteur privé (8,9M USD)</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link href="/sources-financement" className="bg-[#00a19a] text-white px-4 py-2 rounded text-sm hover:bg-[#008a83] transition-colors">
                    Voir partenariats
                  </Link>
                </div>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#6f42c1] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6f42c1]">CSU</h3>
                    <p className="text-gray-600">Couverture sanitaire universelle</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#f3f0ff] p-4 rounded-lg">
                    <div className="text-xl font-bold text-[#6f42c1] mb-1">91%</div>
                    <div className="text-sm text-gray-600">Couverture dans zones FPS vs 35% avant</div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-3">Composantes CSU:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accès équitable aux soins</li>
                    <li>• Protection financière</li>
                    <li>• Qualité des services</li>
                    <li>• Continuité des soins</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link href="/couverture-sante-universelle" className="bg-[#6f42c1] text-white px-4 py-2 rounded text-sm hover:bg-[#5a2d91] transition-colors">
                    CSU en détail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact du Financement */}
      <div className="bg-[#f9b233] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Impact du Financement FPS</h2>
            <p className="text-xl">
              Résultats tangibles de 5 années d'innovation en financement de la santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Accès aux Soins</h3>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">35% → 91%</div>
                  <div className="text-sm opacity-90">Couverture sanitaire</div>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">4,2M</div>
                  <div className="text-sm opacity-90">Bénéficiaires directs</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Protection Financière</h3>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">75 → 12 USD</div>
                  <div className="text-sm opacity-90">Coût moyen traitement</div>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">67% → 23%</div>
                  <div className="text-sm opacity-90">Paiements directs</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Qualité des Services</h3>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Disponibilité MEG</div>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">89%</div>
                  <div className="text-sm opacity-90">Équipements fonctionnels</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Efficience Économique</h3>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">1:4,8</div>
                  <div className="text-sm opacity-90">Retour sur investissement</div>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <div className="text-2xl font-bold mb-1">23,4M USD</div>
                  <div className="text-sm opacity-90">Économies générées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision 2030 */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Vision 2030</h2>
            <p className="text-xl text-gray-700">
              Objectifs ambitieux pour une couverture sanitaire universelle effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">150M</div>
              <div className="text-lg mb-2">USD Budget Cible</div>
              <div className="text-sm opacity-90">×2,2 budget actuel</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
              <div className="text-xs mt-2">45% progression</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">500</div>
              <div className="text-lg mb-2">ESS Cibles</div>
              <div className="text-sm opacity-90">vs 333 actuelles</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '67%'}}></div>
              </div>
              <div className="text-xs mt-2">67% progression</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">95%</div>
              <div className="text-lg mb-2">Couverture CSU</div>
              <div className="text-sm opacity-90">Objectif OMS</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '96%'}}></div>
              </div>
              <div className="text-xs mt-2">96% zones FPS</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">8M</div>
              <div className="text-lg mb-2">Bénéficiaires</div>
              <div className="text-sm opacity-90">vs 4,2M actuels</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '53%'}}></div>
              </div>
              <div className="text-xs mt-2">53% progression</div>
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