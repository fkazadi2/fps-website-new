import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function RechercheRapports() {
  const breadcrumbItems = [
    { label: 'Recherche et rapports' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8A9BAD] to-[#a8b8c8] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Recherche et Rapports</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Production d'évidences scientifiques pour éclairer les politiques de santé et mesurer l'impact des interventions du FPS
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble de la recherche */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">La Recherche au Service de la Décision</h2>
            <p className="text-xl text-gray-700">
              Des études rigoureuses pour optimiser l'efficacité des interventions et guider l'évolution du système de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-[#f0f2f5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#8A9BAD] mb-4">25</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Études Réalisées</div>
              <div className="text-sm text-gray-600">Depuis le lancement du FPS</div>
            </div>
            
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">12</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Rapports Annuels</div>
              <div className="text-sm text-gray-600">Publications officielles</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-4">8</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Partenaires Recherche</div>
              <div className="text-sm text-gray-600">Universités et instituts</div>
            </div>
            
            <div className="text-center bg-[#f9e5ea] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-4">95%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Fiabilité Données</div>
              <div className="text-sm text-gray-600">Qualité statistique</div>
            </div>
          </div>
        </div>
      </div>

      {/* Domaines de recherche */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">5 Domaines de Recherche Prioritaires</h2>
            <p className="text-xl text-gray-700">
              Une approche multidisciplinaire pour comprendre et améliorer l'impact du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Évaluation d'impact */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-4 text-center">Évaluation d'Impact</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Réduction de la mortalité</li>
                <li>• Amélioration accès aux soins</li>
                <li>• Protection financière ménages</li>
                <li>• Qualité des services</li>
                <li>• Équité géographique</li>
              </ul>
              <div className="mt-4 p-3 bg-[#e6f1f8] rounded">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#035fa9]">8 études</div>
                  <div className="text-xs text-gray-600">Complétées</div>
                </div>
              </div>
            </div>
            
            {/* Analyse économique */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#f9b233] mb-4 text-center">Analyse Économique</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Coût-efficacité interventions</li>
                <li>• Retour sur investissement</li>
                <li>• Durabilité financière</li>
                <li>• Optimisation allocations</li>
                <li>• Modélisation prospective</li>
              </ul>
              <div className="mt-4 p-3 bg-[#fff5e5] rounded">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#f9b233]">6 études</div>
                  <div className="text-xs text-gray-600">En cours</div>
                </div>
              </div>
            </div>
            
            {/* Systèmes de santé */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#00a19a] mb-4 text-center">Systèmes de Santé</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Gouvernance et leadership</li>
                <li>• Ressources humaines</li>
                <li>• Systèmes d'information</li>
                <li>• Chaînes d'approvisionnement</li>
                <li>• Infrastructure sanitaire</li>
              </ul>
              <div className="mt-4 p-3 bg-[#e5f7f7] rounded">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#00a19a]">5 études</div>
                  <div className="text-xs text-gray-600">Publiées</div>
                </div>
              </div>
            </div>
            
            {/* Innovation technologique */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#6f42c1] mb-4 text-center">Innovation Technologique</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Télémédecine</li>
                <li>• Santé digitale</li>
                <li>• Intelligence artificielle</li>
                <li>• Blockchain santé</li>
                <li>• Applications mobiles</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3e8ff] rounded">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#6f42c1]">3 pilotes</div>
                  <div className="text-xs text-gray-600">Testés</div>
                </div>
              </div>
            </div>
            
            {/* Recherche opérationnelle */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-[#e5004c] mb-4 text-center">Recherche Opérationnelle</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Optimisation processus</li>
                <li>• Amélioration qualité</li>
                <li>• Formation du personnel</li>
                <li>• Gestion des stocks</li>
                <li>• Satisfaction patients</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f9e5ea] rounded">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#e5004c]">3 études</div>
                  <div className="text-xs text-gray-600">Continues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principales publications */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Principales Publications</h2>
            <p className="text-xl text-gray-700">
              Nos études les plus influentes qui ont guidé les politiques de santé en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rapport phare 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-[#035fa9] rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#035fa9] mb-2">Évaluation de l'Impact du FPS sur la Mortalité Maternelle et Infantile</h3>
                  <p className="text-sm text-gray-600 mb-2">Étude longitudinale 2022-2024</p>
                  <p className="text-gray-700 text-sm">
                    Analyse comparative montrant une réduction de 35% de la mortalité maternelle et 28% de la mortalité infantile dans les zones d'intervention FPS.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">120 pages • 333 ESS analysés</span>
                <button className="bg-[#035fa9] text-white px-4 py-2 rounded text-sm hover:bg-[#024080]">
                  Télécharger
                </button>
              </div>
            </div>

            {/* Rapport phare 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-[#f9b233] rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#f9b233] mb-2">Analyse Coût-Efficacité des Interventions FPS</h3>
                  <p className="text-sm text-gray-600 mb-2">Étude économique prospective</p>
                  <p className="text-gray-700 text-sm">
                    Démonstration que chaque USD investi par le FPS génère 4,2 USD de bénéfices économiques et sociaux pour la population.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">85 pages • Modélisation 2025-2030</span>
                <button className="bg-[#f9b233] text-white px-4 py-2 rounded text-sm hover:bg-[#e6a429]">
                  Télécharger
                </button>
              </div>
            </div>

            {/* Rapport phare 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-[#00a19a] rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2023</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00a19a] mb-2">Protection Financière et Équité d'Accès aux Soins</h3>
                  <p className="text-sm text-gray-600 mb-2">Enquête ménages 15 000 participants</p>
                  <p className="text-gray-700 text-sm">
                    Évaluation de la réduction des paiements directs des ménages et de l'amélioration de l'accès équitable aux soins de santé.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">156 pages • 5 provinces</span>
                <button className="bg-[#00a19a] text-white px-4 py-2 rounded text-sm hover:bg-[#008a82]">
                  Télécharger
                </button>
              </div>
            </div>

            {/* Rapport phare 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-[#6f42c1] rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2023</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#6f42c1] mb-2">Innovation dans les Systèmes de Santé Décentralisés</h3>
                  <p className="text-sm text-gray-600 mb-2">Recherche comparative internationale</p>
                  <p className="text-gray-700 text-sm">
                    Analyse des meilleures pratiques de financement innovant de la santé en Afrique avec recommandations pour la RDC.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">95 pages • 12 pays africains</span>
                <button className="bg-[#6f42c1] text-white px-4 py-2 rounded text-sm hover:bg-[#5a359a]">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenaires recherche */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Nos Partenaires de Recherche</h2>
            <p className="text-xl text-gray-700">
              Collaboration avec les meilleures institutions pour produire des évidences de qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Partenaire 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Université de Kinshasa</h3>
              <p className="text-sm text-gray-600 mb-3">École de Santé Publique</p>
              <div className="text-xs text-gray-500">
                12 études conjointes
              </div>
            </div>

            {/* Partenaire 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">École de Santé Publique de Kinshasa</h3>
              <p className="text-sm text-gray-600 mb-3">Département Économie de la Santé</p>
              <div className="text-xs text-gray-500">
                8 recherches collaboratives
              </div>
            </div>

            {/* Partenaire 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Institut National de Recherche Biomédicale</h3>
              <p className="text-sm text-gray-600 mb-3">INRB - Partenaire technique</p>
              <div className="text-xs text-gray-500">
                5 projets de recherche
              </div>
            </div>

            {/* Partenaire 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Partenaires Internationaux</h3>
              <p className="text-sm text-gray-600 mb-3">OMS, Banque Mondiale, AFD</p>
              <div className="text-xs text-gray-500">
                Appui méthodologique
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Méthodologie de recherche */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Notre Méthodologie de Recherche</h2>
            <p className="text-xl">
              Standards scientifiques rigoureux pour des résultats fiables et exploitables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Collecte de Données</h3>
                <ul className="text-white/90 text-sm space-y-2">
                  <li>• Enquêtes de terrain</li>
                  <li>• Données administratives</li>
                  <li>• Systèmes d'information</li>
                  <li>• Focus groups</li>
                  <li>• Entretiens approfondis</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Analyse Statistique</h3>
                <ul className="text-white/90 text-sm space-y-2">
                  <li>• Analyses multivariées</li>
                  <li>• Modélisation économétrique</li>
                  <li>• Évaluation d'impact</li>
                  <li>• Analyses de cohorte</li>
                  <li>• Méta-analyses</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Validation Scientifique</h3>
                <ul className="text-white/90 text-sm space-y-2">
                  <li>• Peer review</li>
                  <li>• Comité scientifique</li>
                  <li>• Validation externe</li>
                  <li>• Publication internationale</li>
                  <li>• Diffusion publique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs clés */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Tableau de Bord des Indicateurs Clés</h2>
            <p className="text-xl text-gray-700">
              Suivi en temps réel de l'impact des interventions FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Santé maternelle */}
            <div className="bg-[#f9e5ea] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#e5004c] mb-4">Santé Maternelle</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Mortalité maternelle</span>
                    <span className="text-[#e5004c] font-bold">-35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accouchements assistés</span>
                    <span className="text-[#e5004c] font-bold">+42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Santé infantile */}
            <div className="bg-[#fff5e5] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#f9b233] mb-4">Santé Infantile</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Mortalité infantile</span>
                    <span className="text-[#f9b233] font-bold">-28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '28%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Vaccination complète</span>
                    <span className="text-[#f9b233] font-bold">+38%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '38%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accès aux soins */}
            <div className="bg-[#e5f7f7] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#00a19a] mb-4">Accès aux Soins</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Consultations</span>
                    <span className="text-[#00a19a] font-bold">+65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Satisfaction patients</span>
                    <span className="text-[#00a19a] font-bold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection financière */}
            <div className="bg-[#e6f1f8] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#035fa9] mb-4">Protection Financière</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Paiements directs</span>
                    <span className="text-[#035fa9] font-bold">-19%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#035fa9] h-2 rounded-full" style={{width: '19%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">Catastrophes financières</span>
                    <span className="text-[#035fa9] font-bold">-52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#035fa9] h-2 rounded-full" style={{width: '52%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perspectives de recherche */}
      <div className="bg-[#8A9BAD] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Agenda de Recherche 2025</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Nouvelles priorités de recherche pour accompagner l'expansion du FPS
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Intelligence Artificielle</div>
                  <div className="text-sm">Prédiction des épidémies et optimisation des ressources</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Médecine Personnalisée</div>
                  <div className="text-sm">Adaptation des traitements aux profils génétiques</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-2xl font-bold mb-2">One Health</div>
                  <div className="text-sm">Approche intégrée santé humaine, animale et environnementale</div>
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