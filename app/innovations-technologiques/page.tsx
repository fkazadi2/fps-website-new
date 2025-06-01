import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function InnovationsTechnologiques() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Innovations Technologiques' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Innovations Technologiques</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Révolutionner la santé en RDC par l'innovation numérique et les technologies de pointe
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble des innovations */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">La Santé Numérique au Service des Congolais</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Le FPS place l'innovation technologique au cœur de sa stratégie pour moderniser le système de santé congolais 
              et démocratiser l'accès aux soins de qualité à travers tout le territoire national.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f3e8ff] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#6f42c1] mb-4">12</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Solutions Numériques</div>
              <div className="text-sm text-gray-600">Développées et déployées</div>
            </div>
            
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">156</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">ESS Connectés</div>
              <div className="text-sm text-gray-600">Système d'information sanitaire</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-4">2,8M</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">USD Investis</div>
              <div className="text-sm text-gray-600">Technologies de santé</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">89%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Amélioration Efficacité</div>
              <div className="text-sm text-gray-600">Processus automatisés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Domaines d'innovation */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">6 Domaines d'Innovation Prioritaires</h2>
            <p className="text-xl text-gray-700">
              Technologies transformatrices pour un système de santé moderne et efficace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Télémédecine */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#6f42c1]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📱</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Télémédecine</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#f3e8ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Consultations à Distance</h5>
                    <p className="text-xs text-gray-700">1 247 consultations via plateforme sécurisée</p>
                  </div>
                  
                  <div className="bg-[#f3e8ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Expertise Spécialisée</h5>
                    <p className="text-xs text-gray-700">Accès aux spécialistes de Kinshasa</p>
                  </div>
                  
                  <div className="bg-[#f3e8ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Zones Rurales</h5>
                    <p className="text-xs text-gray-700">89 centres de santé ruraux connectés</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligence Artificielle */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#035fa9]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Intelligence Artificielle</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <h5 className="font-bold text-[#035fa9] text-sm mb-1">Diagnostic Assisté</h5>
                    <p className="text-xs text-gray-700">Algorithmes pour imagerie médicale</p>
                  </div>
                  
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <h5 className="font-bold text-[#035fa9] text-sm mb-1">Prédiction Épidémies</h5>
                    <p className="text-xs text-gray-700">Modèles prédictifs maladies infectieuses</p>
                  </div>
                  
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <h5 className="font-bold text-[#035fa9] text-sm mb-1">Optimisation Stocks</h5>
                    <p className="text-xs text-gray-700">Gestion automatisée médicaments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Santé */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#00a19a]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⛓️</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Blockchain Santé</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Dossier Patient Sécurisé</h5>
                    <p className="text-xs text-gray-700">Historique médical inaltérable</p>
                  </div>
                  
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Traçabilité Médicaments</h5>
                    <p className="text-xs text-gray-700">Lutte contre la contrefaçon</p>
                  </div>
                  
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Certification Diplômes</h5>
                    <p className="text-xs text-gray-700">Authentification personnel santé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT Médical */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#f9b233]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📡</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">IoT Médical</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Monitoring Patients</h5>
                    <p className="text-xs text-gray-700">Capteurs pour suivi vital continu</p>
                  </div>
                  
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Gestion Équipements</h5>
                    <p className="text-xs text-gray-700">Maintenance prédictive matériel</p>
                  </div>
                  
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Chaîne du Froid</h5>
                    <p className="text-xs text-gray-700">Surveillance vaccins temps réel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Mobiles */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#e5004c]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📲</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Applications Mobiles</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">FPS Santé</h5>
                    <p className="text-xs text-gray-700">Carnet de santé numérique</p>
                  </div>
                  
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">FPS Ambulance</h5>
                    <p className="text-xs text-gray-700">Appel d'urgence géolocalisé</p>
                  </div>
                  
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">FPS Formation</h5>
                    <p className="text-xs text-gray-700">E-learning personnel de santé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Data Santé */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#17a2b8]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#17a2b8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📊</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Big Data Santé</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e3f2fd] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Épidémiologie</h5>
                    <p className="text-xs text-gray-700">Analyse patterns maladies</p>
                  </div>
                  
                  <div className="bg-[#e3f2fd] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Planification</h5>
                    <p className="text-xs text-gray-700">Allocation optimale ressources</p>
                  </div>
                  
                  <div className="bg-[#e3f2fd] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Recherche</h5>
                    <p className="text-xs text-gray-700">Études de cohorte à grande échelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projets Phares */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Projets Phares en Cours</h2>
            <p className="text-xl text-gray-700">
              Initiatives concrètes transformant l'accès aux soins en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projet 1 */}
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Système d'Information Sanitaire Intégré (SISI)</h3>
              <p className="mb-6 opacity-90">
                Plateforme unifiée connectant tous les ESS pour le suivi en temps réel des indicateurs de santé, 
                gestion des stocks et coordination des soins.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm opacity-80">ESS connectés</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Monitoring continu</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm opacity-80">Réduction délais</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">1,2M</div>
                  <div className="text-sm opacity-80">USD budget</div>
                </div>
              </div>
              
              <div className="text-sm opacity-80">Déploiement : Phase 1 complétée • Phase 2 en cours</div>
            </div>

            {/* Projet 2 */}
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Réseau de Télémédecine National</h3>
              <p className="mb-6 opacity-90">
                Infrastructure de télémédecine reliant les centres de santé ruraux aux hôpitaux de référence 
                pour consultations spécialisées et formation continue.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-sm opacity-80">Centres ruraux</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm opacity-80">Hôpitaux référence</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">1 247</div>
                  <div className="text-sm opacity-80">Consultations/mois</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-2xl font-bold">856K</div>
                  <div className="text-sm opacity-80">USD budget</div>
                </div>
              </div>
              
              <div className="text-sm opacity-80">Statut : 67% déployé • Extension prévue 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenaires Technologiques */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenaires Technologiques</h2>
            <p className="text-xl text-gray-700">
              Écosystème d'innovation avec entreprises tech et institutions académiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">MS</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Microsoft RDC</h4>
              <p className="text-sm text-gray-600 mb-3">Cloud Azure • IA Healthcare</p>
              <div className="text-xs text-gray-500">Partenariat depuis 2022</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">IBM</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">IBM Watson Health</h4>
              <p className="text-sm text-gray-600 mb-3">Watson AI • Blockchain</p>
              <div className="text-xs text-gray-500">Solutions IA médicale</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">VOD</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Vodacom RDC</h4>
              <p className="text-sm text-gray-600 mb-3">Connectivité • M-Health</p>
              <div className="text-xs text-gray-500">Infrastructure télécoms</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">UNIKIN</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Université de Kinshasa</h4>
              <p className="text-sm text-gray-600 mb-3">Recherche • Innovation</p>
              <div className="text-xs text-gray-500">Faculté Sciences</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Lab */}
      <div className="bg-[#6f42c1] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">FPS Innovation Lab</h2>
            <p className="text-xl">
              Hub d'innovation et d'incubation pour les technologies de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Incubation</h3>
              <p className="text-white/90 mb-4">
                Accompagnement des startups healthtech congolaises dans le développement de solutions innovantes
              </p>
              <div className="text-sm text-white/80">
                • 12 startups incubées<br/>
                • 3 solutions déployées<br/>
                • 450K USD investis
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recherche Appliquée</h3>
              <p className="text-white/90 mb-4">
                Laboratoire de recherche sur l'adaptation des technologies globales au contexte congolais
              </p>
              <div className="text-sm text-white/80">
                • 8 projets de recherche<br/>
                • 5 publications<br/>
                • 23 chercheurs
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Formation</h3>
              <p className="text-white/90 mb-4">
                Programme de formation aux technologies de santé pour les professionnels congolais
              </p>
              <div className="text-sm text-white/80">
                • 156 professionnels formés<br/>
                • 6 certifications<br/>
                • 12 modules e-learning
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap 2025-2030 */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Roadmap Technologique 2025-2030</h2>
            <p className="text-xl text-gray-700">
              Vision ambitieuse pour faire de la RDC un leader africain de la santé numérique
            </p>
          </div>
          
          <div className="space-y-8">
            {/* 2025 */}
            <div className="flex items-center">
              <div className="w-24 h-24 bg-[#6f42c1] rounded-full mr-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2025</span>
              </div>
              <div className="flex-1 bg-[#f3e8ff] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#6f42c1] mb-3">Consolidation Infrastructure</h4>
                <p className="text-gray-700">
                  • Connexion 100% ESS niveau national • Dossier patient électronique généralisé 
                  • Plateforme de télémédecine étendue aux 26 provinces
                </p>
              </div>
            </div>
            
            {/* 2027 */}
            <div className="flex items-center">
              <div className="w-24 h-24 bg-[#035fa9] rounded-full mr-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2027</span>
              </div>
              <div className="flex-1 bg-[#e6f1f8] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#035fa9] mb-3">Intelligence Artificielle</h4>
                <p className="text-gray-700">
                  • IA diagnostic médical dans tous hôpitaux référence • Prédiction épidémies automatisée 
                  • Assistant virtuel pour agents de santé communautaire
                </p>
              </div>
            </div>
            
            {/* 2030 */}
            <div className="flex items-center">
              <div className="w-24 h-24 bg-[#00a19a] rounded-full mr-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2030</span>
              </div>
              <div className="flex-1 bg-[#e5f7f7] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#00a19a] mb-3">Écosystème Intégré</h4>
                <p className="text-gray-700">
                  • RDC hub régional santé numérique • Exportation solutions vers pays voisins 
                  • Médecine personnalisée basée sur données génomiques
                </p>
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