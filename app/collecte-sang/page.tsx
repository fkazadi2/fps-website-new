import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function CollecteSang() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Collecte de Sang' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Collecte de Sang</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              155 campagnes mobiles réalisées, 139 cadres formés et 168 850 USD investis pour sauver des vies
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble des réalisations */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f3e8ff] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#6f42c1] mb-2">155</div>
              <div className="text-gray-600">Campagnes mobiles</div>
              <div className="text-sm text-gray-500">De collecte réalisées</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">139</div>
              <div className="text-gray-600">Cadres formés</div>
              <div className="text-sm text-gray-500">En collecte de sang</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">168 850</div>
              <div className="text-gray-600">USD au CNTS</div>
              <div className="text-sm text-gray-500">Pour services sanguins</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">4 500</div>
              <div className="text-gray-600">Poches collectées</div>
              <div className="text-sm text-gray-500">Estimation annuelle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission vitale */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Une Mission Vitale</h2>
              <p className="text-xl text-gray-700 mb-6">
                Le FPS développe un réseau national de <strong>collecte de sang</strong> pour répondre 
                aux besoins transfusionnels urgents et planifiés dans tout le pays.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6f42c1] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Urgences :</strong> Accidents, hémorragies, complications obstétricales</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6f42c1] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Chirurgies :</strong> Interventions programmées nécessitant des transfusions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6f42c1] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Maladies :</strong> Anémie sévère, cancer, hémophilie</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#6f42c1]/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded">
                <p className="text-sm font-semibold text-center">
                  "Une poche de sang peut sauver jusqu'à 3 vies"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenariat CNTS */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenariat avec le CNTS</h2>
            <p className="text-xl text-gray-700">
              Une collaboration stratégique avec le Centre National de Transfusion Sanguine
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Investment FPS dans le CNTS</h3>
              <div className="space-y-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">168 850 USD</div>
                  <div className="text-sm opacity-90">Financement direct pour renforcer les services sanguins</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold">Utilisation des fonds :</h4>
                  <ul className="text-sm space-y-2 opacity-90">
                    <li>• Équipements de collecte mobile</li>
                    <li>• Réactifs et consommables</li>
                    <li>• Formation du personnel</li>
                    <li>• Campagnes de sensibilisation</li>
                    <li>• Transport et logistique</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Résultats du Partenariat</h3>
              
              <div className="space-y-4">
                <div className="bg-[#f3e8ff] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#6f42c1] mb-2">Couverture Élargie</h4>
                  <p className="text-gray-700 text-sm">
                    Extension des services de collecte dans 15 provinces avec des unités mobiles
                  </p>
                </div>
                
                <div className="bg-[#e6f1f8] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#035fa9] mb-2">Qualité Améliorée</h4>
                  <p className="text-gray-700 text-sm">
                    Mise aux normes des procédures de collecte, test et conservation
                  </p>
                </div>
                
                <div className="bg-[#e5f7f7] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#00a19a] mb-2">Accessibilité Accrue</h4>
                  <p className="text-gray-700 text-sm">
                    Réduction des délais d'approvisionnement en produits sanguins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campagnes mobiles */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">155 Campagnes Mobiles Réalisées</h2>
            <p className="text-xl text-gray-700">
              Aller vers les populations pour faciliter le don de sang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Types de campagnes */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#6f42c1] mb-4 text-center">Campagnes Universitaires</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-[#6f42c1]">45</div>
                <div className="text-sm text-gray-600">Campagnes réalisées</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Université de Kinshasa</li>
                <li>• Université Pédagogique Nationale</li>
                <li>• ISTA et instituts supérieurs</li>
                <li>• Écoles de formation médicale</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#e5004c] mb-4 text-center">Campagnes Communautaires</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-[#e5004c]">65</div>
                <div className="text-sm text-gray-600">Campagnes réalisées</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Marchés et centres commerciaux</li>
                <li>• Églises et mosquées</li>
                <li>• Quartiers résidentiels</li>
                <li>• Places publiques</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#f9b233] mb-4 text-center">Campagnes Professionnelles</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-[#f9b233]">45</div>
                <div className="text-sm text-gray-600">Campagnes réalisées</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Ministères et institutions</li>
                <li>• Entreprises privées</li>
                <li>• Forces armées et police</li>
                <li>• ONG et organisations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Formation des cadres */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">139 Cadres Formés</h2>
            <p className="text-xl">
              Renforcement des capacités pour une collecte de qualité et sécurisée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Profils Formés</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Médecins transfuseurs</span>
                    <span className="text-[#f9b233] font-bold">25</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Infirmiers spécialisés</span>
                    <span className="text-[#f9b233] font-bold">45</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Techniciens de laboratoire</span>
                    <span className="text-[#f9b233] font-bold">38</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Agents de collecte</span>
                    <span className="text-[#f9b233] font-bold">31</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Modules de Formation</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Sélection des donneurs</h4>
                  <p className="text-sm text-white/80">Critères d'éligibilité et questionnaire de santé</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Techniques de prélèvement</h4>
                  <p className="text-sm text-white/80">Procédures stériles et gestion des complications</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Contrôle qualité</h4>
                  <p className="text-sm text-white/80">Tests de dépistage et validation des produits</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Conservation et transport</h4>
                  <p className="text-sm text-white/80">Chaîne du froid et traçabilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact sauvetage */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Vies Sauvées</h2>
            <p className="text-xl text-gray-700">
              L'impact concret des initiatives de collecte de sang du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-[#f9e5ea] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-4">13 500</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Vies Potentiellement Sauvées</div>
              <div className="text-sm text-gray-600">Estimation basée sur 4 500 poches × 3 vies par poche</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">85%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Réduction des Ruptures</div>
              <div className="text-sm text-gray-600">Diminution des pénuries de sang dans les hôpitaux</div>
            </div>
            
            <div className="text-center bg-[#f3e8ff] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#6f42c1] mb-4">15</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Provinces Couvertes</div>
              <div className="text-sm text-gray-600">Expansion géographique des services</div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#035fa9] mb-6 text-center">Cas d'Urgence Traités</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#e5004c] mb-2">45%</div>
                <div className="text-sm text-gray-600">Hémorragies post-partum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f9b233] mb-2">25%</div>
                <div className="text-sm text-gray-600">Accidents de circulation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00a19a] mb-2">20%</div>
                <div className="text-sm text-gray-600">Chirurgies d'urgence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6f42c1] mb-2">10%</div>
                <div className="text-sm text-gray-600">Anémies sévères</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processus de collecte */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Processus de Collecte Sécurisé</h2>
            <p className="text-xl text-gray-700">
              De la sélection du donneur à la distribution : une chaîne qualité rigoureuse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#6f42c1] mb-3">Sélection</h3>
              <p className="text-gray-700 text-sm">Questionnaire de santé et examen médical préalable</p>
            </div>
            
            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#e5004c] mb-3">Prélèvement</h3>
              <p className="text-gray-700 text-sm">Collecte dans des conditions stériles par du personnel formé</p>
            </div>
            
            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#f9b233] mb-3">Tests</h3>
              <p className="text-gray-700 text-sm">Dépistage des maladies transmissibles et groupage</p>
            </div>
            
            {/* Étape 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#00a19a] mb-3">Conservation</h3>
              <p className="text-gray-700 text-sm">Stockage en respectant la chaîne du froid</p>
            </div>
            
            {/* Étape 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Distribution</h3>
              <p className="text-gray-700 text-sm">Livraison aux hôpitaux selon les besoins urgents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Témoignages</h2>
            <p className="text-xl text-gray-700">
              Histoires de vie sauvées grâce aux campagnes de collecte de sang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Lusambo Marie</h4>
                  <p className="text-sm text-gray-600">Gynécologue, Maternité de Binza (Kinshasa)</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Grâce aux campagnes de collecte du FPS-CNTS, nous avons pu sauver Mama Josephine qui 
                avait une hémorragie post-partum sévère. Avant, nous aurions perdu cette maman et son 
                bébé. Le sang était disponible en 20 minutes."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Étudiant Mukadi Jean</h4>
                  <p className="text-sm text-gray-600">Donneur régulier, Université de Kinshasa</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Je donne mon sang chaque trimestre lors des campagnes universitaires. C'est facile, 
                rapide et je sais que je sauve des vies. Le personnel est bien formé et professionnel. 
                Donner son sang, c'est donner de l'espoir."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perspectives */}
      <div className="bg-[#6f42c1] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Perspectives 2025</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Extension du programme avec 300 campagnes supplémentaires 
                et formation de 200 nouveaux cadres spécialisés
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">455</div>
                  <div className="text-sm">Campagnes mobiles totales</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">339</div>
                  <div className="text-sm">Cadres formés totaux</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">26</div>
                  <div className="text-sm">Provinces couvertes</div>
                </div>
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