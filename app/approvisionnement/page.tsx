import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function Approvisionnement() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Approvisionnement' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Approvisionnement</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Chaîne d'approvisionnement optimisée pour garantir la disponibilité des médicaments essentiels
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques Clés */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">7,2M</div>
              <div className="text-gray-600">USD investis</div>
              <div className="text-sm text-gray-500">Médicaments 2018-2023</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">333</div>
              <div className="text-gray-600">ESS approvisionnées</div>
              <div className="text-sm text-gray-500">Réseau national</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">100%</div>
              <div className="text-gray-600">Disponibilité</div>
              <div className="text-sm text-gray-500">Médicaments essentiels</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">0</div>
              <div className="text-gray-600">Ruptures de stock</div>
              <div className="text-sm text-gray-500">Depuis 18 mois</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chaîne d'Approvisionnement */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Chaîne d'Approvisionnement</h2>
            <p className="text-xl text-gray-700">
              Circuit intégré de la commande à la distribution finale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Étape 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#e5004c] mb-3">Planification</h3>
              <p className="text-sm text-gray-600 mb-4">
                Analyse des besoins des ESS et prévisions de consommation
              </p>
              <ul className="text-xs space-y-1">
                <li>• Évaluation trimestrielle</li>
                <li>• Données épidémiologiques</li>
                <li>• Historique consommation</li>
              </ul>
            </div>
            
            {/* Étape 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#f9b233] mb-3">Procurement</h3>
              <p className="text-sm text-gray-600 mb-4">
                Appels d'offres et sélection des fournisseurs qualifiés
              </p>
              <ul className="text-xs space-y-1">
                <li>• Fournisseurs certifiés OMS</li>
                <li>• Contrôle qualité strict</li>
                <li>• Prix négociés</li>
              </ul>
            </div>
            
            {/* Étape 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#00a19a] mb-3">Stockage</h3>
              <p className="text-sm text-gray-600 mb-4">
                Entrepôts centraux avec conditions optimales de conservation
              </p>
              <ul className="text-xs space-y-1">
                <li>• 3 entrepôts régionaux</li>
                <li>• Chaîne du froid</li>
                <li>• Système FEFO</li>
              </ul>
            </div>
            
            {/* Étape 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#6f42c1] mb-3">Distribution</h3>
              <p className="text-sm text-gray-600 mb-4">
                Livraison programmée vers les ESS selon les besoins
              </p>
              <ul className="text-xs space-y-1">
                <li>• Livraisons mensuelles</li>
                <li>• Transport sécurisé</li>
                <li>• GPS tracking</li>
              </ul>
            </div>
            
            {/* Étape 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Monitoring</h3>
              <p className="text-sm text-gray-600 mb-4">
                Suivi en temps réel des stocks et consommations
              </p>
              <ul className="text-xs space-y-1">
                <li>• Système LMIS</li>
                <li>• Alertes automatiques</li>
                <li>• Rapports mensuels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Système LMIS */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Système LMIS</h2>
            <p className="text-xl">
              Logistics Management Information System pour une gestion optimisée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fonctionnalités */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Fonctionnalités Clés</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Gestion automatisée des stocks</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Suivi des dates de péremption</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Calcul automatique des besoins</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Alertes de rupture imminente</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Traçabilité complète des lots</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Rapports de consommation</span>
                </li>
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Performance Système</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>ESS connectées</span>
                  <span className="font-bold text-xl">333/333</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Disponibilité système</span>
                  <span className="font-bold text-xl">99,8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Temps de réponse</span>
                  <span className="font-bold text-xl">moins de 2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mises à jour</span>
                  <span className="font-bold text-xl">Temps réel</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Utilisateurs actifs</span>
                  <span className="font-bold text-xl">1,247</span>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Impact Mesurable</h3>
              <div className="space-y-4">
                <div className="text-center p-3 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-sm">Réduction gaspillages</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold mb-1">87%</div>
                  <div className="text-sm">Amélioration planification</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold mb-1">78%</div>
                  <div className="text-sm">Réduction coûts logistiques</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-lg">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm">Traçabilité des lots</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrepôts et Logistique */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Infrastructure Logistique</h2>
            <p className="text-xl text-gray-700">
              Réseau d'entrepôts modernes pour une distribution efficace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Entrepôt Kinshasa */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#e5004c] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Entrepôt Central Kinshasa</h3>
                <p className="opacity-90">Hub principal de distribution</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Capacité 5,000 m³</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-bold text-[#e5004c]">2,500 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Température</span>
                    <span className="font-bold text-[#e5004c]">15-25°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zones froides</span>
                    <span className="font-bold text-[#e5004c]">3 chambres</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Dessert 180 ESS de Kinshasa</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Système de surveillance 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Générateur de secours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Entrepôt Lubumbashi */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#00a19a] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Entrepôt Lubumbashi</h3>
                <p className="opacity-90">Hub régional Sud-Est</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Capacité 2,000 m³</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-bold text-[#00a19a]">1,200 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Température</span>
                    <span className="font-bold text-[#00a19a]">15-25°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zones froides</span>
                    <span className="font-bold text-[#00a19a]">2 chambres</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Dessert 89 ESS du Katanga</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Livraisons bi-mensuelles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Partenariat local UNiLU</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Entrepôt Goma */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#6f42c1] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Entrepôt Goma</h3>
                <p className="opacity-90">Hub régional Nord-Est</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Capacité 1,500 m³</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-bold text-[#6f42c1]">800 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Température</span>
                    <span className="font-bold text-[#6f42c1]">15-25°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zones froides</span>
                    <span className="font-bold text-[#6f42c1]">1 chambre</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Dessert 64 ESS du Nord-Kivu</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Coordination humanitaire</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Accès zones difficiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contrôle Qualité */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Contrôle Qualité</h2>
              <p className="text-xl text-gray-700 mb-6">
                Standards internationaux pour garantir l'efficacité et la sécurité
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#e5004c]">
                  <h4 className="font-bold text-[#e5004c] mb-2">Certification Fournisseurs</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fournisseurs pré-qualifiés OMS</li>
                    <li>• Audits annuels des sites de production</li>
                    <li>• Certificats GMP et ISO requis</li>
                    <li>• Inspection des lots à réception</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#f9b233]">
                  <h4 className="font-bold text-[#f9b233] mb-2">Tests de Conformité</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Tests de dissolution et dosage</li>
                    <li>• Vérification dates de péremption</li>
                    <li>• Contrôle de l'intégrité des emballages</li>
                    <li>• Analyse microbiologique</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#00a19a]">
                  <h4 className="font-bold text-[#00a19a] mb-2">Pharmacovigilance</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Système de signalement des effets indésirables</li>
                    <li>• Formation du personnel de terrain</li>
                    <li>• Investigations d'incidents qualité</li>
                    <li>• Retrait immédiat si nécessaire</li>
                  </ul>
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

      {/* Témoignages */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Témoignages Terrain</h2>
            <p className="text-xl">
              L'efficacité de l'approvisionnement vue par les professionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-white">Mama Ngozi Alice</h4>
                  <p className="text-white/80 text-sm">Pharmacienne ESS Matadi</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Depuis l'arrivée du système FPS, plus jamais de rupture ! Les médicaments arrivent 
                chaque mois à date fixe. Le système LMIS nous aide à bien gérer nos stocks. 
                Nos patients sont rassurés de toujours trouver leurs médicaments."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-white">Dr. Kalongo Emmanuel</h4>
                  <p className="text-white/80 text-sm">Médecin chef ESS Bukavu</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "La qualité des médicaments FPS est remarquable. Tous nos traitements sont efficaces. 
                La chaîne du froid est respectée pour les vaccins. C'est un changement radical 
                par rapport à avant où nous avions des médicaments de qualité douteuse."
              </p>
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