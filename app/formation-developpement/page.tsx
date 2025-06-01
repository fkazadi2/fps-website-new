import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function FormationDeveloppement() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Formation & Développement' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b8] to-[#138496] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Formation & Développement</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Renforcement des capacités du personnel de santé pour une offre de soins de qualité en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Mission Formation */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Investir dans le Capital Humain</h2>
              <p className="text-xl text-gray-700 mb-6">
                Le FPS place la <strong>formation continue du personnel de santé</strong> au cœur de sa stratégie 
                pour améliorer la qualité des soins et réaliser la Couverture Santé Universelle en RDC.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#17a2b8] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Formation initiale et continue du personnel</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#17a2b8] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Certification et accréditation professionnelle</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#17a2b8] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Développement des compétences spécialisées</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#17a2b8] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Formation aux technologies de santé</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#17a2b8]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques de Formation */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Impact des Programmes de Formation</h2>
            <p className="text-xl text-gray-700">
              Résultats concrets de l'investissement dans le développement des ressources humaines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e3f2fd] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#17a2b8] mb-4">2 847</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Professionnels Formés</div>
              <div className="text-sm text-gray-600">Depuis le lancement du FPS</div>
            </div>
            
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">89</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Modules Formation</div>
              <div className="text-sm text-gray-600">Programmes développés</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">1,8M</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">USD Investis</div>
              <div className="text-sm text-gray-600">Budget formation 2022-2024</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-4">94%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Taux Satisfaction</div>
              <div className="text-sm text-gray-600">Évaluations participants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes de Formation */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Programmes de Formation Spécialisés</h2>
            <p className="text-xl text-gray-700">
              6 domaines prioritaires pour le renforcement des compétences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soins d'urgence */}
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚑</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Soins d'Urgence</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Réanimation cardio-pulmonaire</li>
                <li>• Gestion des traumatismes</li>
                <li>• Urgences pédiatriques</li>
                <li>• Protocoles de triage</li>
                <li>• Utilisation défibrillateurs</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">456 formés</div>
                <div className="text-xs opacity-80">Personnel urgence</div>
              </div>
            </div>

            {/* Santé Maternelle */}
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Santé Maternelle</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Soins prénataux avancés</li>
                <li>• Accouchement assisté</li>
                <li>• Césariennes d'urgence</li>
                <li>• Soins post-partum</li>
                <li>• Planification familiale</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">234 formées</div>
                <div className="text-xs opacity-80">Sages-femmes</div>
              </div>
            </div>

            {/* Laboratoire */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Techniques de Laboratoire</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Analyses biochimiques</li>
                <li>• Microbiologie médicale</li>
                <li>• Hématologie</li>
                <li>• Sérologie et immunologie</li>
                <li>• Assurance qualité</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">189 formés</div>
                <div className="text-xs opacity-80">Techniciens labo</div>
              </div>
            </div>

            {/* Pharmacie */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Gestion Pharmaceutique</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Pharmacologie clinique</li>
                <li>• Gestion des stocks</li>
                <li>• Pharmacovigilance</li>
                <li>• Préparations magistrales</li>
                <li>• Conseil pharmaceutique</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">123 formés</div>
                <div className="text-xs opacity-80">Pharmaciens</div>
              </div>
            </div>

            {/* Technologies Médicales */}
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Technologies Médicales</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Imagerie médicale</li>
                <li>• Maintenance équipements</li>
                <li>• Télémédecine</li>
                <li>• Systèmes d'information</li>
                <li>• Cybersécurité santé</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">167 formés</div>
                <div className="text-xs opacity-80">Techniciens biomédicaux</div>
              </div>
            </div>

            {/* Leadership et Gestion */}
            <div className="bg-gradient-to-br from-[#8A9BAD] to-[#a8b8c8] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Leadership & Gestion</h3>
              <ul className="text-sm space-y-2 opacity-90 mb-4">
                <li>• Management d'équipe</li>
                <li>• Gestion budgétaire</li>
                <li>• Qualité des soins</li>
                <li>• Communication efficace</li>
                <li>• Leadership transformationnel</li>
              </ul>
              <div className="bg-white/10 p-3 rounded text-center">
                <div className="font-bold">89 formés</div>
                <div className="text-xs opacity-80">Chefs d'ESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centre de Formation FPS */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Centre de Formation FPS</h2>
            <p className="text-xl text-gray-700">
              Infrastructure moderne d'excellence pour la formation continue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#17a2b8] mb-6">Infrastructures de Formation</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#e3f2fd] rounded">
                  <div className="w-3 h-3 bg-[#17a2b8] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Amphithéâtres Modernes</div>
                    <div className="text-sm text-gray-600">4 salles équipées • Capacité 150 places</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e3f2fd] rounded">
                  <div className="w-3 h-3 bg-[#17a2b8] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Laboratoires de Simulation</div>
                    <div className="text-sm text-gray-600">12 postes • Mannequins haute fidélité</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e3f2fd] rounded">
                  <div className="w-3 h-3 bg-[#17a2b8] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Salles de Pratique</div>
                    <div className="text-sm text-gray-600">8 salles spécialisées • Équipements réels</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e3f2fd] rounded">
                  <div className="w-3 h-3 bg-[#17a2b8] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Centre E-Learning</div>
                    <div className="text-sm text-gray-600">Plateforme numérique • Accès 24/7</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Corps Professoral</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Formateurs Permanents</div>
                    <div className="text-sm text-gray-600">23 experts nationaux • 8 spécialisations</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Experts Internationaux</div>
                    <div className="text-sm text-gray-600">12 consultants • Missions spécialisées</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Partenaires Académiques</div>
                    <div className="text-sm text-gray-600">UNIKIN, UNILU, UNIKIS • Échanges</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#e6f1f8] rounded">
                  <div className="w-3 h-3 bg-[#035fa9] rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Praticiens Seniors</div>
                    <div className="text-sm text-gray-600">34 cliniciens • Expérience terrain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes E-Learning */}
      <div className="bg-[#17a2b8] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Plateforme E-Learning FPS</h2>
            <p className="text-xl">
              Formation continue accessible partout en RDC via la technologie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contenu Interactif</h3>
              <div className="text-white/90 space-y-2">
                <p>• 89 modules de formation</p>
                <p>• Vidéos HD et simulations 3D</p>
                <p>• Quiz et évaluations</p>
                <p>• Certificats numériques</p>
                <p>• Suivi progression personnalisé</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Accessibilité</h3>
              <div className="text-white/90 space-y-2">
                <p>• Accès mobile et desktop</p>
                <p>• Fonctionnement hors ligne</p>
                <p>• Interface en français</p>
                <p>• Support technique 24/7</p>
                <p>• Compatible bas débit</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Suivi & Analytics</h3>
              <div className="text-white/90 space-y-2">
                <p>• Tableau de bord personnalisé</p>
                <p>• Statistiques d'apprentissage</p>
                <p>• Recommandations IA</p>
                <p>• Rapports de performance</p>
                <p>• Système de badges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenariats Formation */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenariats de Formation</h2>
            <p className="text-xl text-gray-700">
              Réseau national et international pour l'excellence en formation sanitaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#e6f1f8] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">MSF</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Médecins Sans Frontières</h4>
              <p className="text-sm text-gray-600">Formation urgences humanitaires</p>
            </div>
            
            <div className="bg-[#e5f7f7] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">OMS</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Organisation Mondiale Santé</h4>
              <p className="text-sm text-gray-600">Standards internationaux</p>
            </div>
            
            <div className="bg-[#fff5e5] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">JHPIEGO</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Johns Hopkins Program</h4>
              <p className="text-sm text-gray-600">Santé reproductive</p>
            </div>
            
            <div className="bg-[#f9e5ea] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">PEPFAR</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">PEPFAR/USAID</h4>
              <p className="text-sm text-gray-600">VIH/SIDA et santé publique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Témoignages de Participants</h2>
            <p className="text-xl text-gray-700">
              L'impact de la formation sur la pratique quotidienne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Sarah MUKENDI</h4>
                  <p className="text-sm text-gray-600">Médecin Chef, CS Kimbanseke</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "La formation en soins d'urgence du FPS a complètement transformé notre approche. 
                Nous avons réduit la mortalité de 35% dans notre centre grâce aux nouvelles techniques apprises. 
                Les modules e-learning nous permettent de réviser continuellement."
              </p>
              <div className="flex text-yellow-500">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Eugène KALALA</h4>
                  <p className="text-sm text-gray-600">Technicien Laboratoire, HGR Kisangani</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Grâce à la formation FPS en techniques de laboratoire, j'ai maîtrisé les nouveaux équipements. 
                Notre laboratoire a obtenu la certification qualité. C'est un vrai plus pour notre carrière 
                et la qualité des diagnostics."
              </p>
              <div className="flex text-yellow-500">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inscription et Contact */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Rejoignez nos Programmes</h2>
            <p className="text-xl">
              Inscrivez-vous dès maintenant aux formations FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Inscription en Ligne</h3>
              <p className="text-white/90 mb-6">
                Créez votre compte et accédez à tous nos programmes de formation continue
              </p>
              <Link href="#" className="bg-white text-[#035fa9] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                S'inscrire
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Contact Direct</h3>
              <p className="text-white/90 mb-6">
                Nos conseillers vous accompagnent dans le choix de votre parcours de formation
              </p>
              <div className="text-sm text-white/80">
                <p>+243 81 234 5678</p>
                <p>formation@fps.cd</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Visite du Centre</h3>
              <p className="text-white/90 mb-6">
                Découvrez nos installations modernes et rencontrez notre équipe pédagogique
              </p>
              <div className="text-sm text-white/80">
                <p>Avenue de la Paix, Kinshasa</p>
                <p>Lun-Ven: 8h-17h</p>
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