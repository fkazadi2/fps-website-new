import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function AVenir() {
  const breadcrumbItems = [
    { label: 'À venir' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Nos projets à venir</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Découvrez les futurs projets et initiatives du Fonds de Promotion de la Santé
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">28</div>
              <div className="text-gray-600">Projets en cours</div>
              <div className="text-sm text-gray-500">Lancement 2025</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">56M</div>
              <div className="text-gray-600">Budget prévisionnel</div>
              <div className="text-sm text-gray-500">USD, 2025-2026</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">875</div>
              <div className="text-gray-600">ESS bénéficiaires</div>
              <div className="text-sm text-gray-500">Cibles prioritaires</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">14</div>
              <div className="text-gray-600">Nouveaux partenariats</div>
              <div className="text-sm text-gray-500">En développement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projet phare */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Projet phare 2025</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-96 bg-gradient-to-br from-[#f9b233] to-[#ffc107] relative">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-4 left-4 bg-[#e5004c] text-white px-3 py-1 rounded-full text-sm font-bold">
                    PRIORITAIRE
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm opacity-90 mb-2">Lancement : T2 2025</div>
                    <h3 className="text-2xl font-bold">
                      Centre d'Excellence pour la Production Locale de Médicaments
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#f9b233] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                    KINSHASA
                  </span>
                  <span className="text-gray-500 text-sm">Budget : 18,5M USD</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Centre d'Excellence pour la Production Locale de Médicaments
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Le FPS lancera en 2025 la construction du premier centre de production locale 
                  de médicaments essentiels de RDC. Ce centre ultramoderne réduira les coûts 
                  d'importation de 60% et permettra l'accès à des médicaments de qualité pour 
                  la population congolaise.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <div className="text-lg font-bold text-[#035fa9]">32</div>
                    <div className="text-sm text-gray-600">Produits prioritaires</div>
                  </div>
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <div className="text-lg font-bold text-[#00a19a]">250</div>
                    <div className="text-sm text-gray-600">Emplois créés</div>
                  </div>
                </div>
                
                <Link href="#" className="bg-[#f9b233] text-white px-6 py-3 rounded font-semibold hover:bg-[#e6a01f] transition-colors">
                  Détails du projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projets à venir */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Projets en préparation</h2>
            <p className="text-xl text-gray-700">
              Prochaines initiatives du FPS pour 2025-2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#035fa9] to-[#0066cc] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#035fa9] px-3 py-1 rounded-full text-sm font-bold">
                  T1 2025
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#e6f1f8] px-3 py-1 rounded-full text-[#035fa9] font-semibold">Infrastructure</div>
                  <div className="text-xs text-gray-500">8,2M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Réseau de cliniques mobiles pour zones rurales
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Déploiement de 45 cliniques mobiles entièrement équipées pour desservir les zones rurales difficiles d'accès dans 8 provinces.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#035fa9] font-semibold">Phase préparatoire</div>
                  <Link href="#" className="text-[#035fa9] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>

            {/* Projet 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#00a19a] to-[#26d0ce] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#00a19a] px-3 py-1 rounded-full text-sm font-bold">
                  T2 2025
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#e5f7f7] px-3 py-1 rounded-full text-[#00a19a] font-semibold">Innovation</div>
                  <div className="text-xs text-gray-500">5,6M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Plateforme digitale FPS Santé Connect
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lancement d'une plateforme numérique nationale de téléconsultation et de gestion des données sanitaires pour toutes les ESS.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#00a19a] font-semibold">En développement</div>
                  <Link href="#" className="text-[#00a19a] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>

            {/* Projet 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#e5004c] px-3 py-1 rounded-full text-sm font-bold">
                  T3 2025
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#f9e5ea] px-3 py-1 rounded-full text-[#e5004c] font-semibold">Formation</div>
                  <div className="text-xs text-gray-500">3,9M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Académie FPS de formation médicale continue
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Création d'un centre national de formation continue pour le personnel de santé avec certification reconnue internationalement.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#e5004c] font-semibold">Étude de faisabilité</div>
                  <Link href="#" className="text-[#e5004c] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Deuxième rangée */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Projet 4 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#6f42c1] to-[#8969d3] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#6f42c1] px-3 py-1 rounded-full text-sm font-bold">
                  T1 2026
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#f2eaf9] px-3 py-1 rounded-full text-[#6f42c1] font-semibold">Recherche</div>
                  <div className="text-xs text-gray-500">4,1M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Institut de recherche en médecine tropicale
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Établissement d'un centre de recherche spécialisé en maladies tropicales en partenariat avec des institutions internationales.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#6f42c1] font-semibold">Planification</div>
                  <Link href="#" className="text-[#6f42c1] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>

            {/* Projet 5 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#f9b233] to-[#ffc107] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#f9b233] px-3 py-1 rounded-full text-sm font-bold">
                  T2 2026
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#fff5e5] px-3 py-1 rounded-full text-[#f9b233] font-semibold">Financement</div>
                  <div className="text-xs text-gray-500">12,8M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fonds d'investissement pour startups santé
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lancement d'un fonds d'investissement pour soutenir les startups congolaises innovantes dans le domaine de la santé.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#f9b233] font-semibold">Structuration</div>
                  <Link href="#" className="text-[#f9b233] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>

            {/* Projet 6 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#8A9BAD] to-[#A8B6C3] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-white text-[#8A9BAD] px-3 py-1 rounded-full text-sm font-bold">
                  T3 2026
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#eef1f3] px-3 py-1 rounded-full text-[#8A9BAD] font-semibold">Prévention</div>
                  <div className="text-xs text-gray-500">6,5M USD</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Programme national de prévention des maladies non-transmissibles
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Initiative nationale de dépistage et prévention des maladies cardio-vasculaires, diabète et cancer dans 5 provinces pilotes.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#8A9BAD] font-semibold">Conception</div>
                  <Link href="#" className="text-[#8A9BAD] font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Explorer tous nos projets
            </Link>
          </div>
        </div>
      </div>

      {/* Plan stratégique */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Plan stratégique 2025-2030</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Le FPS a élaboré un plan stratégique ambitieux pour les 5 prochaines années, 
              avec des objectifs clairs pour transformer le système de santé congolais
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#035fa9] mb-4">Vision 2030</h3>
                <p className="text-gray-700 mb-4">
                  Notre vision pour 2030 est de garantir un accès universel à des soins de santé de qualité 
                  pour tous les Congolais, indépendamment de leur lieu de résidence ou de leurs moyens.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#035fa9] font-bold mr-2">•</span>
                    <span>Couverture sanitaire pour 85% de la population</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035fa9] font-bold mr-2">•</span>
                    <span>Réduction de 40% de la mortalité maternelle et infantile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035fa9] font-bold mr-2">•</span>
                    <span>Production locale de 60% des médicaments essentiels</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#00a19a] mb-4">Objectifs stratégiques</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#00a19a] font-bold mr-2">1.</span>
                    <span>Moderniser 1 500 établissements de santé d'ici 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a19a] font-bold mr-2">2.</span>
                    <span>Déployer un service d'ambulance dans toutes les provinces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a19a] font-bold mr-2">3.</span>
                    <span>Former 25 000 professionnels de santé aux nouvelles technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a19a] font-bold mr-2">4.</span>
                    <span>Créer 3 centres de production de médicaments essentiels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a19a] font-bold mr-2">5.</span>
                    <span>Numériser la gestion de 100% des établissements soutenus</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#e5004c] mb-4">Financement 2025-2030</h3>
                <div className="space-y-4">
                  <div className="bg-[#f9e5ea] p-4 rounded-lg">
                    <div className="text-3xl font-bold text-[#e5004c] mb-1">256M USD</div>
                    <div className="text-gray-700">Budget prévisionnel total</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Taxes affectées</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#035fa9] h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Partenariats internationaux</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00a19a] h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Redevances minières</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f9b233] h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Autres sources</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#6f42c1] h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="#" className="inline-block bg-[#035fa9] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#024a87] transition-colors">
                Télécharger le plan stratégique complet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 