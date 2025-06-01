import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function EtatDesLieux() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'État des lieux' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#00b7ff] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">État des Lieux</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Diagnostic de la situation sanitaire en République Démocratique du Congo
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Contexte National</h2>
              <p className="text-xl text-gray-700 mb-6">
                La RDC, avec 95 millions d'habitants sur 2,345 millions de km², fait face à d'immenses défis sanitaires 
                qui nécessitent des solutions innovantes et durables.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f0f8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#035fa9] mb-2">95M</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="bg-[#f0f8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#035fa9] mb-2">26</div>
                  <div className="text-sm text-gray-600">Provinces</div>
                </div>
                <div className="bg-[#f0f8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#035fa9] mb-2">8,500</div>
                  <div className="text-sm text-gray-600">Structures sanitaires</div>
                </div>
                <div className="bg-[#f0f8ff] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#035fa9] mb-2">515</div>
                  <div className="text-sm text-gray-600">Zones de santé</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#035fa9]/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Carte sanitaire de la RDC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Défis Majeurs */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Défis Majeurs Identifiés</h2>
            <p className="text-xl text-gray-700">
              Les obstacles structurels à l'accès universel aux soins de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Défi 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#e5004c] mb-3 text-center">Financement Insuffisant</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Budget santé/PIB</span>
                  <span className="font-bold text-[#e5004c]">2,3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Recommandation OMS</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Paiement direct patients</span>
                  <span className="font-bold text-[#e5004c]">68%</span>
                </div>
              </div>
            </div>

            {/* Défi 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#f9b233] mb-3 text-center">Accès Géographique</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Population &gt;5km ESS</span>
                  <span className="font-bold text-[#f9b233]">45%</span>
                </div>
                <div className="flex justify-between">
                  <span>Routes praticables</span>
                  <span className="font-bold text-[#f9b233]">12%</span>
                </div>
                <div className="flex justify-between">
                  <span>ESS sans électricité</span>
                  <span className="font-bold text-[#f9b233]">78%</span>
                </div>
              </div>
            </div>

            {/* Défi 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#00a19a] mb-3 text-center">Ressources Humaines</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Médecins/100k hab</span>
                  <span className="font-bold text-[#00a19a]">7</span>
                </div>
                <div className="flex justify-between">
                  <span>Norme OMS</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex justify-between">
                  <span>Déficit infirmiers</span>
                  <span className="font-bold text-[#00a19a]">68%</span>
                </div>
              </div>
            </div>

            {/* Défi 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#6f42c1] mb-3 text-center">Médicaments</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Disponibilité MEG</span>
                  <span className="font-bold text-[#6f42c1]">35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Ruptures fréquentes</span>
                  <span className="font-bold text-[#6f42c1]">89%</span>
                </div>
                <div className="flex justify-between">
                  <span>Qualité douteuse</span>
                  <span className="font-bold text-[#6f42c1]">42%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de Santé */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Indicateurs de Santé</h2>
            <p className="text-xl text-gray-700">
              Situation sanitaire avant l'intervention du FPS (2018)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mortalité */}
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Mortalité</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">104‰</div>
                  <div className="text-sm opacity-90">Mortalité infantile</div>
                  <div className="text-xs opacity-75">Objectif ODD: &lt;25‰</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">846‰</div>
                  <div className="text-sm opacity-90">Mortalité maternelle</div>
                  <div className="text-xs opacity-75">Pour 100,000 naissances</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">60 ans</div>
                  <div className="text-sm opacity-90">Espérance de vie</div>
                  <div className="text-xs opacity-75">Moyenne mondiale: 73 ans</div>
                </div>
              </div>
            </div>

            {/* Maladies */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Maladies Prioritaires</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">23%</div>
                  <div className="text-sm opacity-90">Paludisme</div>
                  <div className="text-xs opacity-75">Première cause de mortalité</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">18%</div>
                  <div className="text-sm opacity-90">Infections respiratoires</div>
                  <div className="text-xs opacity-75">Pneumonie, tuberculose</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">15%</div>
                  <div className="text-sm opacity-90">Maladies diarrhéiques</div>
                  <div className="text-xs opacity-75">Cholera, dysenterie</div>
                </div>
              </div>
            </div>

            {/* Accès aux soins */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Accès aux Soins</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">42%</div>
                  <div className="text-sm opacity-90">Accès aux ESS</div>
                  <div className="text-xs opacity-75">Dans un rayon de 5km</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">28%</div>
                  <div className="text-sm opacity-90">Consultation prénatale</div>
                  <div className="text-xs opacity-75">4 visites minimum</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-2">37%</div>
                  <div className="text-sm opacity-90">Accouchement assisté</div>
                  <div className="text-xs opacity-75">Personnel qualifié</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyse Régionale */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Disparités Régionales</h2>
            <p className="text-xl text-gray-700">
              Inégalités sanitaires entre provinces et zones urbaines/rurales
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Provinces les plus affectées */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#e5004c] mb-6">Provinces Prioritaires</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#e5004c] pl-4">
                  <h4 className="font-bold text-gray-800">Nord-Kivu</h4>
                  <p className="text-sm text-gray-600 mb-2">Population: 8,2M • Conflits armés • Déplacements</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>Mortalité infantile: <span className="font-bold text-[#e5004c]">127‰</span></div>
                    <div>Accès ESS: <span className="font-bold text-[#e5004c]">23%</span></div>
                    <div>Malnutrition: <span className="font-bold text-[#e5004c]">19%</span></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-[#f9b233] pl-4">
                  <h4 className="font-bold text-gray-800">Kasaï</h4>
                  <p className="text-sm text-gray-600 mb-2">Population: 5,6M • Enclavement • Pauvreté extrême</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>Mortalité infantile: <span className="font-bold text-[#f9b233]">119‰</span></div>
                    <div>Accès ESS: <span className="font-bold text-[#f9b233]">31%</span></div>
                    <div>Vaccination: <span className="font-bold text-[#f9b233]">28%</span></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-[#00a19a] pl-4">
                  <h4 className="font-bold text-gray-800">Maniema</h4>
                  <p className="text-sm text-gray-600 mb-2">Population: 2,8M • Isolement géographique</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>Personnel médical: <span className="font-bold text-[#00a19a]">3/100k</span></div>
                    <div>Routes praticables: <span className="font-bold text-[#00a19a]">4%</span></div>
                    <div>Électrification: <span className="font-bold text-[#00a19a]">2%</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urbanisation vs Rural */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Disparités Urbain/Rural</h3>
              
              <div className="space-y-6">
                <div className="bg-[#f0f8ff] p-4 rounded-lg">
                  <h4 className="font-bold text-[#035fa9] mb-3">Zones Urbaines (32% population)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Accès ESS: <span className="font-bold text-green-600">78%</span></div>
                    <div>Personnel qualifié: <span className="font-bold text-green-600">65%</span></div>
                    <div>Médicaments disponibles: <span className="font-bold text-green-600">58%</span></div>
                    <div>Électricité: <span className="font-bold text-green-600">42%</span></div>
                  </div>
                </div>
                
                <div className="bg-[#fff5f5] p-4 rounded-lg">
                  <h4 className="font-bold text-[#e5004c] mb-3">Zones Rurales (68% population)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Accès ESS: <span className="font-bold text-[#e5004c]">29%</span></div>
                    <div>Personnel qualifié: <span className="font-bold text-[#e5004c]">18%</span></div>
                    <div>Médicaments disponibles: <span className="font-bold text-[#e5004c]">21%</span></div>
                    <div>Électricité: <span className="font-bold text-[#e5004c]">3%</span></div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-[#035fa9] to-[#00b7ff] text-white rounded-lg">
                  <h5 className="font-bold mb-2">Impact des Inégalités</h5>
                  <p className="text-sm opacity-90">
                    Les populations rurales, représentant 68% du pays, n'ont accès qu'à 23% des ressources sanitaires, 
                    créant une fracture sanitaire majeure qui entrave le développement national.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facteurs Aggravants */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Facteurs Aggravants</h2>
            <p className="text-xl">
              Éléments contextuels qui compliquent l'accès aux soins de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚔️</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Conflits Armés</h3>
              <p className="text-sm opacity-90 mb-3">
                Plus de 120 groupes armés actifs dans l'Est du pays
              </p>
              <ul className="text-xs space-y-1">
                <li>• 5,6M déplacés internes</li>
                <li>• 180 ESS détruites</li>
                <li>• Personnel médical menacé</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Crises Sanitaires</h3>
              <p className="text-sm opacity-90 mb-3">
                Épidémies récurrentes et urgences sanitaires
              </p>
              <ul className="text-xs space-y-1">
                <li>• Ebola (2018-2020)</li>
                <li>• COVID-19 (2020-2023)</li>
                <li>• Choléra endémique</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌡️</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Changement Climatique</h3>
              <p className="text-sm opacity-90 mb-3">
                Impact croissant sur la santé publique
              </p>
              <ul className="text-xs space-y-1">
                <li>• Sécheresses prolongées</li>
                <li>• Inondations fréquentes</li>
                <li>• Insécurité alimentaire</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Pauvreté Extrême</h3>
              <p className="text-sm opacity-90 mb-3">
                77% de la population vit sous le seuil de pauvreté
              </p>
              <ul className="text-xs space-y-1">
                <li>• Revenus &lt;1,90 USD/jour</li>
                <li>• Malnutrition chronique</li>
                <li>• Abandon scolaire massif</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vision FPS */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">La Réponse du FPS</h2>
            <p className="text-xl text-gray-700">
              Une approche systémique pour transformer le système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#e5004c] mb-4">Approche Ciblée</h3>
              <p className="text-gray-700">
                Interventions prioritaires sur 333 ESS stratégiques pour maximiser l'impact 
                sur les populations les plus vulnérables.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Solutions Innovantes</h3>
              <p className="text-gray-700">
                Mécanismes de financement novateurs et technologies adaptées pour 
                surmonter les contraintes structurelles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Partenariats Stratégiques</h3>
              <p className="text-gray-700">
                Collaboration étroite avec le Ministère de la Santé, les partenaires 
                internationaux et les communautés locales.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/notre-mission" className="bg-[#035fa9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Découvrir Notre Mission
            </Link>
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