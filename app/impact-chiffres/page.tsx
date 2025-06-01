import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function ImpactChiffres() {
  const breadcrumbItems = [
    { label: 'Impact & Réalisations', href: '/impact-realisations' },
    { label: 'Impact en chiffres' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Impact en Chiffres</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Les résultats quantifiés de 5 années d'interventions du FPS en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Chiffres Clés Globaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Vue d'Ensemble</h2>
            <p className="text-xl text-gray-700">
              5 années d'impact transformateur sur le système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4">333</div>
              <div className="text-lg mb-2">ESS Soutenues</div>
              <div className="text-sm opacity-90">Sur 26 provinces</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs mt-2">Objectif atteint</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4">7,2M</div>
              <div className="text-lg mb-2">USD Investis</div>
              <div className="text-sm opacity-90">Médicaments essentiels</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
              <div className="text-xs mt-2">95% budget utilisé</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4">1,491</div>
              <div className="text-lg mb-2">Vies Sauvées</div>
              <div className="text-sm opacity-90">Transferts ambulance</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '89%'}}></div>
              </div>
              <div className="text-xs mt-2">89% succès critiques</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <div className="text-5xl font-bold mb-4">4,2M</div>
              <div className="text-lg mb-2">Bénéficiaires</div>
              <div className="text-sm opacity-90">Accès amélioré aux soins</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
              <div className="text-xs mt-2">78% zones rurales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance par Domaine */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Performance par Domaine</h2>
            <p className="text-xl text-gray-700">
              Résultats détaillés de nos 5 axes d'intervention prioritaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transport & Urgences */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#e5004c] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🚑</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e5004c]">Transport & Urgences</h3>
                  <p className="text-gray-600">Service d'ambulance et urgences médicales</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#e5004c] mb-2">16</div>
                  <div className="text-sm text-gray-600">Ambulances déployées</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#e5004c] mb-2">18min</div>
                  <div className="text-sm text-gray-600">Temps réponse moyen</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#e5004c] mb-2">94%</div>
                  <div className="text-sm text-gray-600">Taux de succès</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#e5004c] mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Disponibilité service</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Évolution mensuelle des interventions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2023</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-bold">127/mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2022</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-sm font-bold">104/mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2021</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-bold">67/mois</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Médicaments */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f9b233] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl text-white">💊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f9b233]">Médicaments</h3>
                  <p className="text-gray-600">Approvisionnement et distribution</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#f9b233] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Disponibilité MEG</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#f9b233] mb-2">0</div>
                  <div className="text-sm text-gray-600">Ruptures de stock</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#f9b233] mb-2">98%</div>
                  <div className="text-sm text-gray-600">Qualité certifiée</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#f9b233] mb-2">3</div>
                  <div className="text-sm text-gray-600">Entrepôts régionaux</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Valeur des livraisons par année</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2023</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2,8M USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2022</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2,1M USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2021</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-sm font-bold">1,3M USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Équipements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#00a19a] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🏥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#00a19a]">Équipements</h3>
                  <p className="text-gray-600">Modernisation des infrastructures</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#00a19a] mb-2">2,847</div>
                  <div className="text-sm text-gray-600">Équipements installés</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#00a19a] mb-2">89%</div>
                  <div className="text-sm text-gray-600">Taux fonctionnalité</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#00a19a] mb-2">156</div>
                  <div className="text-sm text-gray-600">Techniciens formés</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#00a19a] mb-2">72h</div>
                  <div className="text-sm text-gray-600">Délai maintenance</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Types d'équipements déployés</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Échographes</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">89 unités</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Générateurs</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                    <span className="text-sm font-bold">67 unités</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Microscopes</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-sm font-bold">45 unités</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collecte Sang */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#6f42c1] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🩸</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#6f42c1]">Collecte de Sang</h3>
                  <p className="text-gray-600">Banques de sang et transfusion</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#6f42c1] mb-2">12,847</div>
                  <div className="text-sm text-gray-600">Poches collectées</div>
                </div>
                <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#6f42c1] mb-2">96%</div>
                  <div className="text-sm text-gray-600">Sang sécurisé</div>
                </div>
                <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#6f42c1] mb-2">8,234</div>
                  <div className="text-sm text-gray-600">Vies sauvées</div>
                </div>
                <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#6f42c1] mb-2">24</div>
                  <div className="text-sm text-gray-600">Centres de collecte</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Collecte mensuelle moyenne</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Donneurs réguliers</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#6f42c1] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm font-bold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nouveaux donneurs</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#6f42c1] h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-bold">389</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Urgences couvertes</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#6f42c1] h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Économique */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Impact Économique</h2>
            <p className="text-xl text-gray-700">
              Retombées financières et économiques de nos interventions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Économies Réalisées */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Économies Réalisées</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">23,4M USD</div>
                  <div className="text-sm opacity-90">Économies directes familles</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">8,7M USD</div>
                  <div className="text-sm opacity-90">Réduction coûts transport</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">12,1M USD</div>
                  <div className="text-sm opacity-90">Évitement hospitalisations</div>
                </div>
              </div>
            </div>

            {/* ROI Social */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Retour sur Investissement</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">1:4,8</div>
                  <div className="text-sm opacity-90">ROI social global</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">186%</div>
                  <div className="text-sm opacity-90">Amélioration productivité</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">67,000</div>
                  <div className="text-sm opacity-90">Emplois préservés</div>
                </div>
              </div>
            </div>

            {/* Financement Innovant */}
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Financement Innovant</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">42,6M USD</div>
                  <div className="text-sm opacity-90">Taxes promotion santé</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">89%</div>
                  <div className="text-sm opacity-90">Taux recouvrement</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">15,3M USD</div>
                  <div className="text-sm opacity-90">Partenariats mobilisés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Évolution Temporelle */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Évolution Temporelle</h2>
            <p className="text-xl text-gray-700">
              Progression de nos indicateurs clés depuis 2018
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Graphique Couverture */}
              <div>
                <h3 className="text-xl font-bold text-[#035fa9] mb-6">Évolution de la Couverture Sanitaire</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2018</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <span className="text-sm font-bold">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2019</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '42%'}}></div>
                    </div>
                    <span className="text-sm font-bold">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2020</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '58%'}}></div>
                    </div>
                    <span className="text-sm font-bold">58%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2021</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '71%'}}></div>
                    </div>
                    <span className="text-sm font-bold">71%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2022</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '83%'}}></div>
                    </div>
                    <span className="text-sm font-bold">83%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">2023</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-4 rounded-full" style={{width: '91%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-[#e5004c]">91%</span>
                  </div>
                </div>
              </div>

              {/* Graphique Satisfaction */}
              <div>
                <h3 className="text-xl font-bold text-[#035fa9] mb-6">Satisfaction des Bénéficiaires</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Qualité soins</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-4 rounded-full" style={{width: '94%'}}></div>
                    </div>
                    <span className="text-sm font-bold">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Accessibilité</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-4 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <span className="text-sm font-bold">88%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Rapidité service</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-4 rounded-full" style={{width: '91%'}}></div>
                    </div>
                    <span className="text-sm font-bold">91%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Coût abordable</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-4 rounded-full" style={{width: '96%'}}></div>
                    </div>
                    <span className="text-sm font-bold">96%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recommandation</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-4 rounded-full" style={{width: '97%'}}></div>
                    </div>
                    <span className="text-sm font-bold">97%</span>
                  </div>
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-sm">Satisfaction globale</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] h-4 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-[#f9b233]">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparaisons Régionales */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Comparaisons Régionales</h2>
            <p className="text-xl">
              Performance du FPS vs autres initiatives sanitaires en Afrique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Efficacité Opérationnelle</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>FPS RDC</span>
                  <span className="font-bold text-2xl text-[#f9b233]">91%</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Moyenne Afrique Centrale</span>
                  <span className="font-bold">67%</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Moyenne continentale</span>
                  <span className="font-bold">58%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Coût par Bénéficiaire</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>FPS RDC</span>
                  <span className="font-bold text-2xl text-[#00a19a]">12 USD</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Moyenne régionale</span>
                  <span className="font-bold">28 USD</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Programmes similaires</span>
                  <span className="font-bold">35 USD</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Durabilité Financière</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>FPS RDC</span>
                  <span className="font-bold text-2xl text-[#e5004c]">89%</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Fonds similaires</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="flex justify-between items-center opacity-75">
                  <span>Référence internationale</span>
                  <span className="font-bold">72%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perspectives 2024-2030 */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Perspectives 2024-2030</h2>
            <p className="text-xl text-gray-700">
              Projections et objectifs pour la prochaine phase de développement
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">500</div>
              <div className="text-lg mb-2">ESS Ciblées</div>
              <div className="text-sm opacity-90">Extension couverture</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">95%</div>
              <div className="text-lg mb-2">Couverture CSU</div>
              <div className="text-sm opacity-90">Objectif national</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">8M</div>
              <div className="text-lg mb-2">Bénéficiaires</div>
              <div className="text-sm opacity-90">Population couverte</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">100M</div>
              <div className="text-lg mb-2">USD Mobilisés</div>
              <div className="text-sm opacity-90">Financement total</div>
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