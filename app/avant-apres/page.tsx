import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function AvantApres() {
  const breadcrumbItems = [
    { label: 'Impact & Réalisations', href: '/impact-realisations' },
    { label: 'Avant/Après' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Avant/Après</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              La transformation spectaculaire des ESS grâce aux interventions du FPS
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques de Transformation */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Transformation en Chiffres</h2>
            <p className="text-xl text-gray-700">
              L'évolution mesurable de la qualité des soins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">333</div>
              <div className="text-gray-600">ESS transformées</div>
              <div className="text-sm text-gray-500">Sur 5 ans (2018-2023)</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">85%</div>
              <div className="text-gray-600">Amélioration diagnostic</div>
              <div className="text-sm text-gray-500">Précision augmentée</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">80%</div>
              <div className="text-gray-600">Réduction coûts</div>
              <div className="text-sm text-gray-500">Médicaments essentiels</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">95%</div>
              <div className="text-gray-600">Satisfaction patients</div>
              <div className="text-sm text-gray-500">Enquêtes 2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparaisons Visuelles */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Transformations Visuelles</h2>
            <p className="text-xl text-gray-700">
              Découvrez les changements concrets dans nos ESS partenaires
            </p>
          </div>
          
          {/* ESS Matadi - Médicaments */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#e5004c] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">ESS Matadi - Approvisionnement Médicaments</h3>
                <p className="opacity-90">Transformation de la pharmacie et de la gestion des stocks</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* AVANT */}
                <div className="p-8 border-r border-gray-200">
                  <div className="text-center mb-6">
                    <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold">AVANT 2018</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Pharmacie désorganisée</p>
                      <p className="text-sm opacity-90">Ruptures fréquentes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Stock médicaments</span>
                      <span className="text-red-600 font-bold">35% disponibilité</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ruptures par mois</span>
                      <span className="text-red-600 font-bold">12-15 fois</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Coût pour patients</span>
                      <span className="text-red-600 font-bold">100% prix marché</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Système gestion</span>
                      <span className="text-red-600 font-bold">Manuel, cahiers</span>
                    </div>
                  </div>
                </div>
                
                {/* APRÈS */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">APRÈS 2023</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Pharmacie moderne</p>
                      <p className="text-sm opacity-90">Stock permanent</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Stock médicaments</span>
                      <span className="text-green-600 font-bold">100% disponibilité</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ruptures par mois</span>
                      <span className="text-green-600 font-bold">0 rupture</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Coût pour patients</span>
                      <span className="text-green-600 font-bold">20% prix marché</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Système gestion</span>
                      <span className="text-green-600 font-bold">Numérique, LMIS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESS Bukavu - Équipements */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#00a19a] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">ESS Bukavu - Équipements Médicaux</h3>
                <p className="opacity-90">Modernisation du plateau technique et capacité diagnostique</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* AVANT */}
                <div className="p-8 border-r border-gray-200">
                  <div className="text-center mb-6">
                    <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold">AVANT 2019</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Équipements vétustes</p>
                      <p className="text-sm opacity-90">Diagnostic limité</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Échographe</span>
                      <span className="text-red-600 font-bold">Absent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Laboratoire</span>
                      <span className="text-red-600 font-bold">Basic, manuel</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Précision diagnostic</span>
                      <span className="text-red-600 font-bold">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Référence Goma</span>
                      <span className="text-red-600 font-bold">85% des cas</span>
                    </div>
                  </div>
                </div>
                
                {/* APRÈS */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">APRÈS 2023</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Plateau technique moderne</p>
                      <p className="text-sm opacity-90">Diagnostic avancé</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Échographe</span>
                      <span className="text-green-600 font-bold">Portable HD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Laboratoire</span>
                      <span className="text-green-600 font-bold">Automatisé</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Précision diagnostic</span>
                      <span className="text-green-600 font-bold">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Référence Goma</span>
                      <span className="text-green-600 font-bold">15% des cas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESS Lubumbashi - Service Ambulance */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#6f42c1] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">ESS Lubumbashi - Transport d'Urgence</h3>
                <p className="opacity-90">Amélioration de l'accès aux soins d'urgence</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* AVANT */}
                <div className="p-8 border-r border-gray-200">
                  <div className="text-center mb-6">
                    <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold">AVANT 2020</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Transport privé payant</p>
                      <p className="text-sm opacity-90">Accès limité</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ambulance disponible</span>
                      <span className="text-red-600 font-bold">Non</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Coût transport</span>
                      <span className="text-red-600 font-bold">50-100 USD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Temps d'attente</span>
                      <span className="text-red-600 font-bold">2-4 heures</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Décès évitables</span>
                      <span className="text-red-600 font-bold">15% des cas</span>
                    </div>
                  </div>
                </div>
                
                {/* APRÈS */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">APRÈS 2023</span>
                  </div>
                  
                  <div className="relative h-64 bg-gray-300 rounded-lg mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Service ambulance 24/7</p>
                      <p className="text-sm opacity-90">Accès gratuit</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ambulance disponible</span>
                      <span className="text-green-600 font-bold">3 véhicules</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Coût transport</span>
                      <span className="text-green-600 font-bold">Gratuit</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Temps d'attente</span>
                      <span className="text-green-600 font-bold">15-30 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Décès évitables</span>
                      <span className="text-green-600 font-bold">3% des cas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages Transformation */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Témoignages de Transformation</h2>
            <p className="text-xl">
              Les acteurs de terrain témoignent des changements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Dr. Mukendi François</h4>
                  <p className="text-white/80">Médecin chef ESS Matadi</p>
                </div>
              </div>
              <p className="text-white/90 italic text-lg">
                "Avant le FPS, nous avions des ruptures de médicaments 15 jours par mois. 
                Aujourd'hui, nous n'avons plus connu une seule rupture depuis 18 mois. 
                La transformation est spectaculaire et nos patients nous font confiance."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Mama Chantal Kipese</h4>
                  <p className="text-white/80">Bénéficiaire, Bukavu</p>
                </div>
              </div>
              <p className="text-white/90 italic text-lg">
                "Avant, je devais aller à Goma pour une échographie, cela coûtait 200 USD. 
                Maintenant, c'est fait ici même à 10 USD avec un équipement moderne. 
                Mes enfants peuvent enfin avoir des soins de qualité."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de Performance */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Indicateurs de Performance</h2>
            <p className="text-xl text-gray-700">
              Mesures objectives de l'amélioration de la qualité des soins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Médicaments */}
            <div className="text-center">
              <div className="bg-[#f9e5ea] p-8 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-[#e5004c] mb-4">Médicaments Essentiels</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Disponibilité</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">35%</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">100%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coût patient</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">100%</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ruptures/mois</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">15</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Équipements */}
            <div className="text-center">
              <div className="bg-[#e5f7f7] p-8 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-[#00a19a] mb-4">Équipements Médicaux</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Précision diagnostic</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">35%</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Référence externe</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">85%</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">15%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Équipements/ESS</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">2</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">17</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambulances */}
            <div className="text-center">
              <div className="bg-[#f3f0ff] p-8 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-[#6f42c1] mb-4">Service d'Ambulance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps réponse</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">4h</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">25min</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coût transport</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">75 USD</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">Gratuit</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Décès évitables</span>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">15%</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500 ml-2">3%</span>
                    </div>
                  </div>
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