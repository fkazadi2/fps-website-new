import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function ImpactRealisations() {
  const breadcrumbItems = [
    { label: 'Impact & Réalisations' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Impact & Réalisations</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Des résultats concrets et mesurables qui transforment le paysage sanitaire de la République Démocratique du Congo
            </p>
          </div>
        </div>
      </div>

      {/* Chiffres d'Impact Globaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">L'Impact du FPS en Chiffres</h2>
            <p className="text-xl text-gray-700">
              Plus de 10 millions USD investis pour transformer l'accès aux soins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-[#f9e5ea] p-8 rounded-lg">
              <div className="text-5xl font-bold text-[#e5004c] mb-4">10,2M</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">USD Investis</div>
              <div className="text-sm text-gray-600">Médicaments, équipements, services</div>
            </div>
            
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-5xl font-bold text-[#035fa9] mb-4">333</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">ESS Soutenus</div>
              <div className="text-sm text-gray-600">À travers la République Démocratique du Congo</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-5xl font-bold text-[#00a19a] mb-4">15M+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Congolais Bénéficiaires</div>
              <div className="text-sm text-gray-600">Accès amélioré aux soins essentiels</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-5xl font-bold text-[#f9b233] mb-4">26</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Provinces Couvertes</div>
              <div className="text-sm text-gray-600">Présence nationale effective</div>
            </div>
          </div>
        </div>
      </div>

      {/* Réalisations par Domaine */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Réalisations par Domaine d'Intervention</h2>
            <p className="text-xl text-gray-700">
              Chaque secteur d'intervention montre des résultats tangibles et durables
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Médicaments Essentiels */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#e5004c] rounded-full mr-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#e5004c] mb-3">Médicaments Essentiels</h3>
                  <p className="text-gray-700 mb-4">
                    Révolution de l'approvisionnement pharmaceutique avec zéro rupture de stock
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#e5004c] mb-1">7,2M USD</div>
                  <div className="text-sm text-gray-600">Budget engagé</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#e5004c] mb-1">333 ESS</div>
                  <div className="text-sm text-gray-600">Approvisionnés</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#e5004c] mb-1">0%</div>
                  <div className="text-sm text-gray-600">Ruptures de stock</div>
                </div>
                <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#e5004c] mb-1">80%</div>
                  <div className="text-sm text-gray-600">Réduction coûts</div>
                </div>
              </div>
              
              <Link href="/medicaments-essentiels" className="text-[#e5004c] font-semibold hover:underline">
                Voir les détails →
              </Link>
            </div>

            {/* Équipements Médicaux */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#00a19a] rounded-full mr-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#00a19a] mb-3">Équipements Médicaux</h3>
                  <p className="text-gray-700 mb-4">
                    Modernisation technologique pour des soins de qualité internationale
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">1,8M USD</div>
                  <div className="text-sm text-gray-600">Équipements livrés</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">150 ESS</div>
                  <div className="text-sm text-gray-600">Équipés</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">85%</div>
                  <div className="text-sm text-gray-600">Diagnostic précis</div>
                </div>
                <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">2 500</div>
                  <div className="text-sm text-gray-600">Équipements installés</div>
                </div>
              </div>
              
              <Link href="/equipements-medicaux" className="text-[#00a19a] font-semibold hover:underline">
                Voir les détails →
              </Link>
            </div>

            {/* Service Ambulance */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#f9b233] rounded-full mr-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#f9b233] mb-3">Service d'Ambulance</h3>
                  <p className="text-gray-700 mb-4">
                    Urgences médicales gratuites pour tous les Kinois
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f9b233] mb-1">1 491</div>
                  <div className="text-sm text-gray-600">Patients transportés</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f9b233] mb-1">16</div>
                  <div className="text-sm text-gray-600">Ambulances actives</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f9b233] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Service continu</div>
                </div>
                <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f9b233] mb-1">*144</div>
                  <div className="text-sm text-gray-600">Numéro gratuit</div>
                </div>
              </div>
              
              <Link href="/service-ambulance" className="text-[#f9b233] font-semibold hover:underline">
                Voir les détails →
              </Link>
            </div>

            {/* Collecte de Sang */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#6f42c1] rounded-full mr-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#6f42c1] mb-3">Collecte de Sang</h3>
                  <p className="text-gray-700 mb-4">
                    Réseau national pour sauver des milliers de vies
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-[#f3e8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#6f42c1] mb-1">155</div>
                  <div className="text-sm text-gray-600">Campagnes mobiles</div>
                </div>
                <div className="text-center bg-[#f3e8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#6f42c1] mb-1">139</div>
                  <div className="text-sm text-gray-600">Cadres formés</div>
                </div>
                <div className="text-center bg-[#f3e8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#6f42c1] mb-1">13 500</div>
                  <div className="text-sm text-gray-600">Vies sauvées</div>
                </div>
                <div className="text-center bg-[#f3e8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#6f42c1] mb-1">168K USD</div>
                  <div className="text-sm text-gray-600">Investi au CNTS</div>
                </div>
              </div>
              
              <Link href="/collecte-sang" className="text-[#6f42c1] font-semibold hover:underline">
                Voir les détails →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation des Soins */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">La Transformation des Soins de Santé</h2>
            <p className="text-xl">
              Avant et après l'intervention du FPS : des changements radicaux mesurables
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Avant FPS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">AVANT le FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Ruptures de stock médicaments</span>
                    <span className="text-[#f9b233] font-bold text-xl">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Équipements fonctionnels</span>
                    <span className="text-[#f9b233] font-bold text-xl">35%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Transport d'urgence disponible</span>
                    <span className="text-[#f9b233] font-bold text-xl">15%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Disponibilité sang</span>
                    <span className="text-[#f9b233] font-bold text-xl">25%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Après FPS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">APRÈS le FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Ruptures de stock médicaments</span>
                    <span className="text-[#00b7ff] font-bold text-xl">0%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#00b7ff] h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Équipements fonctionnels</span>
                    <span className="text-[#00b7ff] font-bold text-xl">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#00b7ff] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Transport d'urgence disponible</span>
                    <span className="text-[#00b7ff] font-bold text-xl">90%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#00b7ff] h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg">Disponibilité sang</span>
                    <span className="text-[#00b7ff] font-bold text-xl">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-[#00b7ff] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Couverture Géographique */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Couverture Géographique Nationale</h2>
            <p className="text-xl text-gray-700">
              333 établissements dans 26 provinces pour une présence équitable sur tout le territoire
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Carte simulée */}
            <div className="relative h-96 bg-gray-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 font-medium text-lg mb-4">Carte de la RDC</p>
                  <p className="text-gray-600">333 ESS répartis dans 26 provinces</p>
                </div>
              </div>
              
              {/* Légende */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Zones d'intervention prioritaires</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#f9b233] rounded-full mr-2"></div>
                    <span>Expansion prévue 2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistiques par région */}
            <div>
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Répartition des ESS par Province</h3>
              
              <div className="space-y-4">
                <div className="bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Kinshasa</span>
                    <span className="text-[#e5004c] font-bold">85 ESS</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '25.5%'}}></div>
                  </div>
                </div>
                
                <div className="bg-[#fff5e5] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Kongo Central</span>
                    <span className="text-[#f9b233] font-bold">45 ESS</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '13.5%'}}></div>
                  </div>
                </div>
                
                <div className="bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Bas-Uele</span>
                    <span className="text-[#00a19a] font-bold">38 ESS</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '11.4%'}}></div>
                  </div>
                </div>
                
                <div className="bg-[#e6f1f8] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">23 autres provinces</span>
                    <span className="text-[#035fa9] font-bold">165 ESS</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#035fa9] h-2 rounded-full" style={{width: '49.5%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mt-6">
                <h4 className="font-bold text-gray-800 mb-2">Impact démographique</h4>
                <div className="text-2xl font-bold text-[#035fa9]">15M+ Congolais</div>
                <p className="text-sm text-gray-600">Bénéficient directement des interventions FPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages d'Impact */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Histoires de Transformation</h2>
            <p className="text-xl text-gray-700">
              L'impact du FPS raconté par ceux dont la vie a été transformée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-gray-800">Dr. Kamanga Philippe</h4>
                <p className="text-sm text-gray-600">Directeur médical, HGR Lemera</p>
              </div>
              <p className="text-gray-700 italic text-center">
                "En 6 mois, notre hôpital est passé de 30% de satisfaction patients à 88%. 
                Les médicaments sont disponibles, les équipements fonctionnent, les urgences 
                sont prises en charge. Le FPS nous a redonné notre dignité professionnelle."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-gray-800">Mama Esperance</h4>
                <p className="text-sm text-gray-600">Mère sauvée, Maternité de Binza</p>
              </div>
              <p className="text-gray-700 italic text-center">
                "J'ai failli mourir d'hémorragie après l'accouchement. L'ambulance FPS m'a 
                transportée gratuitement, le sang était disponible immédiatement, les médicaments 
                étaient là. Aujourd'hui, je peux élever mes trois enfants."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-gray-800">Étudiant Mukulu</h4>
                <p className="text-sm text-gray-600">Donneur de sang, Université de Kinshasa</p>
              </div>
              <p className="text-gray-700 italic text-center">
                "Participer aux campagnes de don de sang FPS me donne l'impression de sauver 
                des vies. C'est organisé, professionnel, sécurisé. Je donne chaque trimestre 
                et j'encourage mes amis à faire pareil."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision 2025 */}
      <div className="bg-[#f9b233] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Vision 2025 : Amplifier l'Impact</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Objectif : Doubler notre impact avec 833 ESS soutenus et 25 millions de Congolais couverts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">833 ESS</div>
                  <div className="text-sm">Établissements soutenus</div>
                  <div className="text-xs opacity-80">+500 nouveaux</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">25M</div>
                  <div className="text-sm">Congolais couverts</div>
                  <div className="text-xs opacity-80">+10M supplémentaires</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">50M USD</div>
                  <div className="text-sm">Investissement total</div>
                  <div className="text-xs opacity-80">×5 amplification</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Couverture CSU</div>
                  <div className="text-xs opacity-80">Objectif national</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">L'Impact Continue</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Chaque jour, le FPS transforme la réalité sanitaire congolaise. 
              Découvrez comment nos interventions changent concrètement la vie des populations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/impact-chiffres" className="bg-[#035fa9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#024080] transition-colors">
                Voir tous les chiffres
              </Link>
              <Link href="/agir-pour-la-sante" className="bg-[#e5004c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#cc0044] transition-colors">
                Nos interventions
              </Link>
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