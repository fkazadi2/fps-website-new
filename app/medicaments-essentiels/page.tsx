import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function MedicamentsEssentiels() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Médicaments essentiels' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Médicaments Essentiels</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Garantir l'accès universel aux médicaments de qualité dans toutes les ESS de la RDC
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Engagement</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le FPS assure l'approvisionnement continu en médicaments essentiels génériques (MEG) 
              dans 333 établissements de santé, éliminant les ruptures de stock depuis 18 mois
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">7,2M</div>
              <div className="text-lg mb-2">USD Investis</div>
              <div className="text-sm opacity-90">Dans l'approvisionnement MEG</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
              <div className="text-xs mt-2">95% budget utilisé</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">100%</div>
              <div className="text-lg mb-2">Disponibilité</div>
              <div className="text-sm opacity-90">MEG dans toutes les ESS</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs mt-2">Objectif atteint</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">0</div>
              <div className="text-lg mb-2">Ruptures</div>
              <div className="text-sm opacity-90">Depuis 18 mois</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs mt-2">Performance exceptionnelle</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">333</div>
              <div className="text-lg mb-2">ESS Desservies</div>
              <div className="text-sm opacity-90">Sur 26 provinces</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs mt-2">Couverture complète</div>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des MEG */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Liste Nationale des MEG</h2>
            <p className="text-xl text-gray-700">
              347 médicaments essentiels selon les standards OMS, adaptés au profil épidémiologique de la RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Catégories Principales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#f9b233] mb-6">Pathologies Infectieuses</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Antipaludéens</span>
                  <span className="text-[#f9b233] font-bold">23 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Antibiotiques</span>
                  <span className="text-[#f9b233] font-bold">45 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Antituberculeux</span>
                  <span className="text-[#f9b233] font-bold">12 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Antirétroviraux</span>
                  <span className="text-[#f9b233] font-bold">18 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Antiviraux</span>
                  <span className="text-[#f9b233] font-bold">8 références</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-3xl font-bold text-[#f9b233]">106</div>
                <div className="text-sm text-gray-600">Total références</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#00a19a] mb-6">Maladies Non Transmissibles</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Cardiovasculaires</span>
                  <span className="text-[#00a19a] font-bold">34 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Diabète</span>
                  <span className="text-[#00a19a] font-bold">15 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Neurologie</span>
                  <span className="text-[#00a19a] font-bold">28 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Oncologie</span>
                  <span className="text-[#00a19a] font-bold">22 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Psychiatrie</span>
                  <span className="text-[#00a19a] font-bold">19 références</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-3xl font-bold text-[#00a19a]">118</div>
                <div className="text-sm text-gray-600">Total références</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#e5004c] mb-6">Santé Maternelle & Infantile</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Obstétrique</span>
                  <span className="text-[#e5004c] font-bold">31 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Pédiatrie</span>
                  <span className="text-[#e5004c] font-bold">43 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Vaccins</span>
                  <span className="text-[#e5004c] font-bold">14 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Contraception</span>
                  <span className="text-[#e5004c] font-bold">12 références</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Urgences</span>
                  <span className="text-[#e5004c] font-bold">23 références</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-3xl font-bold text-[#e5004c]">123</div>
                <div className="text-sm text-gray-600">Total références</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chaîne d'approvisionnement */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Chaîne d'Approvisionnement</h2>
            <p className="text-xl text-gray-700">
              Système intégré du fournisseur à l'ESS avec traçabilité complète et contrôle qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Qualification</h3>
              <div className="bg-[#fff5e5] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Sélection fournisseurs certifiés OMS/WHO-GMP</p>
                <div className="text-xl font-bold text-[#f9b233]">6</div>
                <div className="text-xs text-gray-600">Fournisseurs qualifiés</div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Procurement</h3>
              <div className="bg-[#e5f7f7] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Appels d'offres internationaux transparents</p>
                <div className="text-xl font-bold text-[#00a19a]">4</div>
                <div className="text-xs text-gray-600">Appels d'offres/an</div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Stockage</h3>
              <div className="bg-[#f9e5ea] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Entrepôts régionaux climatisés</p>
                <div className="text-xl font-bold text-[#e5004c]">3</div>
                <div className="text-xs text-gray-600">Entrepôts régionaux</div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">4</div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Distribution</h3>
              <div className="bg-[#f3f0ff] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Livraisons programmées aux ESS</p>
                <div className="text-xl font-bold text-[#6f42c1]">12</div>
                <div className="text-xs text-gray-600">Livraisons/an/ESS</div>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">5</div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Monitoring</h3>
              <div className="bg-[#e5f1ff] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Suivi temps réel via LMIS</p>
                <div className="text-xl font-bold text-[#035fa9]">99,8%</div>
                <div className="text-xs text-gray-600">Disponibilité système</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure LMIS */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Système LMIS</h2>
            <p className="text-xl text-gray-700">
              Logistics Management Information System pour la gestion intelligente des stocks
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#f9b233] mb-6">Fonctionnalités Clés</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Gestion des stocks en temps réel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Prévision des besoins par IA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Alertes automatiques de rupture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Traçabilité lot par lot</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Rapports automatisés</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-3"></div>
                  <span>Interface mobile pour ESS</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Performance du Système</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Disponibilité système</span>
                    <span className="font-bold">99,8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '99.8%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>ESS connectées</span>
                    <span className="font-bold">333/333</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Utilisateurs actifs</span>
                    <span className="font-bold">1,247</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Temps de réponse</span>
                    <span className="font-bold">&lt; 2 sec</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrepôts Régionaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Infrastructure de Stockage</h2>
            <p className="text-xl text-gray-700">
              3 entrepôts régionaux stratégiques avec capacité totale de 4,500 m²
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Entrepôt Kinshasa */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Kinshasa</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">2,500 m²</div>
                  <div className="text-sm opacity-90">Surface de stockage</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">156</div>
                  <div className="text-sm opacity-90">ESS desservies</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">45%</div>
                  <div className="text-sm opacity-90">Volume national</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Zones couvertes:</h4>
                <div className="text-sm opacity-90">Kinshasa, Kongo Central, Bandundu, Équateur</div>
              </div>
            </div>

            {/* Entrepôt Lubumbashi */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Lubumbashi</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">1,200 m²</div>
                  <div className="text-sm opacity-90">Surface de stockage</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">89</div>
                  <div className="text-sm opacity-90">ESS desservies</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">32%</div>
                  <div className="text-sm opacity-90">Volume national</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Zones couvertes:</h4>
                <div className="text-sm opacity-90">Katanga, Kasaï Oriental, Kasaï Occidental</div>
              </div>
            </div>

            {/* Entrepôt Goma */}
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Goma</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">800 m²</div>
                  <div className="text-sm opacity-90">Surface de stockage</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">88</div>
                  <div className="text-sm opacity-90">ESS desservies</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">23%</div>
                  <div className="text-sm opacity-90">Volume national</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Zones couvertes:</h4>
                <div className="text-sm opacity-90">Nord-Kivu, Sud-Kivu, Maniema, Province Orientale</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contrôle Qualité */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Assurance Qualité</h2>
            <p className="text-xl">
              Protocoles stricts pour garantir l'efficacité et la sécurité des médicaments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pré-qualification</h3>
              <ul className="space-y-2 text-sm">
                <li>• Certification WHO-GMP</li>
                <li>• Audit des sites de production</li>
                <li>• Validation des dossiers AMM</li>
                <li>• Tests de stabilité</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-[#f9b233]">100%</div>
                <div className="text-xs">Fournisseurs certifiés</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Réception</h3>
              <ul className="space-y-2 text-sm">
                <li>• Contrôle visuel des lots</li>
                <li>• Vérification des certificats</li>
                <li>• Tests d'identification</li>
                <li>• Contrôle température</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-[#f9b233]">98%</div>
                <div className="text-xs">Lots conformes</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Stockage</h3>
              <ul className="space-y-2 text-sm">
                <li>• Conditions climatisées</li>
                <li>• Monitoring 24/7</li>
                <li>• Rotation FEFO</li>
                <li>• Traçabilité complète</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-[#f9b233]">99,5%</div>
                <div className="text-xs">Conditions optimales</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pharmacovigilance</h3>
              <ul className="space-y-2 text-sm">
                <li>• Surveillance post-commercialisation</li>
                <li>• Collecte d'effets indésirables</li>
                <li>• Enquêtes de sécurité</li>
                <li>• Retraits si nécessaire</li>
              </ul>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-[#f9b233]">24</div>
                <div className="text-xs">Rapports annuels</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact sur les Patients */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Impact Patient</h2>
            <p className="text-xl text-gray-700">
              Amélioration concrète de l'accès aux soins grâce à la disponibilité des MEG
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Avant l'intervention FPS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Disponibilité MEG</span>
                  <span className="font-bold">35%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Ruptures de stock</span>
                  <span className="font-bold">15-25/mois</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Coût moyen traitement</span>
                  <span className="font-bold">75 USD</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Satisfaction patients</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '42%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Avec l'intervention FPS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Disponibilité MEG</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Ruptures de stock</span>
                  <span className="font-bold">0/mois</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Coût moyen traitement</span>
                  <span className="font-bold">12 USD</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Satisfaction patients</span>
                  <span className="font-bold">96%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-[#f9b233] to-[#ffc107] text-white px-8 py-4 rounded-lg">
              <div className="text-3xl font-bold mb-2">4,2M</div>
              <div className="text-lg">Congolais bénéficiaires d'un accès amélioré aux MEG</div>
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