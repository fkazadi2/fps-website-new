import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function AgirPourLaSante() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Agir pour la Santé</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              5 domaines d'intervention stratégiques pour transformer le système de santé congolais
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble des interventions */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Approche Intégrée</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le FPS déploie une stratégie multisectorielle pour renforcer l'accès aux soins de santé 
              dans toutes les provinces de la RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="text-center bg-[#e5004c] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">333</div>
              <div className="text-sm">ESS Soutenues</div>
            </div>
            <div className="text-center bg-[#f9b233] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">7,2M</div>
              <div className="text-sm">USD Investis</div>
            </div>
            <div className="text-center bg-[#00a19a] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">4,2M</div>
              <div className="text-sm">Bénéficiaires</div>
            </div>
            <div className="text-center bg-[#6f42c1] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">26</div>
              <div className="text-sm">Provinces</div>
            </div>
            <div className="text-center bg-[#035fa9] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">91%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Domaines d'Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Nos 5 Domaines d'Action</h2>
            <p className="text-xl text-gray-700">
              Interventions ciblées pour un impact maximum sur la santé publique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transport & Urgences */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#e5004c] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🚑</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#e5004c]">Transport & Urgences</h3>
                    <p className="text-gray-600">Services d'urgence et transport médical</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#e5004c]">16</div>
                    <div className="text-xs text-gray-600">Ambulances</div>
                  </div>
                  <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#e5004c]">1,491</div>
                    <div className="text-xs text-gray-600">Transferts</div>
                  </div>
                  <div className="text-center bg-[#f9e5ea] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#e5004c]">94%</div>
                    <div className="text-xs text-gray-600">Succès</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Service d'ambulance 24/7 avec numéro d'urgence *144, temps de réponse moyen 
                  de 18 minutes et couverture dans toutes les zones d'intervention.
                </p>
                
                <div className="flex space-x-2">
                  <Link href="/service-ambulance" className="bg-[#e5004c] text-white px-4 py-2 rounded text-sm hover:bg-[#c40039] transition-colors">
                    Service d'ambulance
                  </Link>
                  <Link href="/transport-patients" className="border border-[#e5004c] text-[#e5004c] px-4 py-2 rounded text-sm hover:bg-[#e5004c] hover:text-white transition-colors">
                    Transport patients
                  </Link>
                  <Link href="/urgences-medicales" className="border border-[#e5004c] text-[#e5004c] px-4 py-2 rounded text-sm hover:bg-[#e5004c] hover:text-white transition-colors">
                    Urgences médicales
                  </Link>
                </div>
              </div>
            </div>

            {/* Médicaments Essentiels */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#f9b233] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">💊</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f9b233]">Médicaments Essentiels</h3>
                    <p className="text-gray-600">Approvisionnement et distribution MEG</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#f9b233]">100%</div>
                    <div className="text-xs text-gray-600">Disponibilité</div>
                  </div>
                  <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#f9b233]">0</div>
                    <div className="text-xs text-gray-600">Ruptures</div>
                  </div>
                  <div className="text-center bg-[#fff5e5] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#f9b233]">98%</div>
                    <div className="text-xs text-gray-600">Qualité</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Système d'approvisionnement intégré avec 3 entrepôts régionaux, 
                  LMIS connecté et 0 rupture de stock depuis 18 mois.
                </p>
                
                <div className="flex space-x-2">
                  <Link href="/medicaments-essentiels" className="bg-[#f9b233] text-white px-4 py-2 rounded text-sm hover:bg-[#e09a1f] transition-colors">
                    Médicaments essentiels
                  </Link>
                  <Link href="/approvisionnement" className="border border-[#f9b233] text-[#f9b233] px-4 py-2 rounded text-sm hover:bg-[#f9b233] hover:text-white transition-colors">
                    Approvisionnement
                  </Link>
                </div>
              </div>
            </div>

            {/* Équipements Médicaux */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#00a19a] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00a19a]">Équipements Médicaux</h3>
                    <p className="text-gray-600">Modernisation des infrastructures</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#00a19a]">2,847</div>
                    <div className="text-xs text-gray-600">Équipements</div>
                  </div>
                  <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#00a19a]">89%</div>
                    <div className="text-xs text-gray-600">Fonctionnels</div>
                  </div>
                  <div className="text-center bg-[#e5f7f7] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#00a19a]">156</div>
                    <div className="text-xs text-gray-600">Techniciens</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Déploiement d'équipements biomédicaux avec formation technique, 
                  maintenance préventive et garantie de fonctionnalité à 89%.
                </p>
                
                <div className="flex space-x-2">
                  <Link href="/equipements-medicaux" className="bg-[#00a19a] text-white px-4 py-2 rounded text-sm hover:bg-[#008a83] transition-colors">
                    Équipements médicaux
                  </Link>
                  <Link href="/equipements-medicaux" className="border border-[#00a19a] text-[#00a19a] px-4 py-2 rounded text-sm hover:bg-[#00a19a] hover:text-white transition-colors">
                    Modernisation
                  </Link>
                </div>
              </div>
            </div>

            {/* Collecte de Sang */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] h-2"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#6f42c1] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🩸</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6f42c1]">Collecte de Sang</h3>
                    <p className="text-gray-600">Banques de sang et transfusion</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#6f42c1]">12,847</div>
                    <div className="text-xs text-gray-600">Poches</div>
                  </div>
                  <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#6f42c1]">96%</div>
                    <div className="text-xs text-gray-600">Sécurisé</div>
                  </div>
                  <div className="text-center bg-[#f3f0ff] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#6f42c1]">24</div>
                    <div className="text-xs text-gray-600">Centres</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Réseau de banques de sang avec collecte volontaire, tests de sécurité 
                  et distribution d'urgence dans 24 centres régionaux.
                </p>
                
                <div className="flex space-x-2">
                  <Link href="/collecte-sang" className="bg-[#6f42c1] text-white px-4 py-2 rounded text-sm hover:bg-[#5a2d91] transition-colors">
                    Collecte de sang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Méthode d'intervention */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Méthode d'Intervention</h2>
            <p className="text-xl text-gray-700">
              Approche systémique pour un impact durable sur le système de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-3">Diagnostic</h3>
              <p className="text-gray-700">
                Évaluation des besoins prioritaires et cartographie des gaps dans le système de santé
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-3">Planification</h3>
              <p className="text-gray-700">
                Élaboration de stratégies d'intervention adaptées aux contextes locaux et provinciaux
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-3">Mise en œuvre</h3>
              <p className="text-gray-700">
                Déploiement coordonné avec partenaires locaux et renforcement des capacités
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-3">Suivi-Évaluation</h3>
              <p className="text-gray-700">
                Monitoring continu, évaluation d'impact et ajustement des interventions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partenariats Stratégiques */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenariats Stratégiques</h2>
            <p className="text-xl text-gray-700">
              Collaboration avec les acteurs clés du système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-4">Ministère de la Santé</h3>
              <p className="text-gray-700 mb-4">
                Coordination étroite avec le MINSANP pour l'alignement sur les politiques 
                nationales de santé et la mise en œuvre de la CSU.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Harmonisation des interventions</li>
                <li>• Renforcement du système national</li>
                <li>• Appui technique et financier</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-4">Zones de Santé</h3>
              <p className="text-gray-700 mb-4">
                Partenariat direct avec 515 zones de santé pour l'implémentation 
                territoriale des programmes du FPS.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Supervision technique</li>
                <li>• Formation du personnel</li>
                <li>• Fourniture d'équipements</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-4">Partenaires Internationaux</h3>
              <p className="text-gray-700 mb-4">
                Collaboration avec OMS, UNICEF, Banque Mondiale et autres pour 
                l'expertise technique et le cofinancement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Assistance technique</li>
                <li>• Mobilisation de ressources</li>
                <li>• Transfert de technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Géographique */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Couverture Géographique</h2>
            <p className="text-xl">
              Présence active dans les 26 provinces de la République Démocratique du Congo
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Kinshasa', interventions: 89 },
              { name: 'Kongo Central', interventions: 34 },
              { name: 'Bandundu', interventions: 28 },
              { name: 'Équateur', interventions: 23 },
              { name: 'Sud-Kivu', interventions: 45 },
              { name: 'Nord-Kivu', interventions: 41 },
              { name: 'Maniema', interventions: 18 },
              { name: 'Katanga', interventions: 67 },
              { name: 'Kasaï Oriental', interventions: 29 },
              { name: 'Kasaï Occidental', interventions: 25 },
              { name: 'Province Orientale', interventions: 38 },
              { name: 'Autres provinces', interventions: 96 }
            ].map((province, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#f9b233] mb-1">{province.interventions}</div>
                <div className="text-xs">{province.name}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-block bg-white/20 backdrop-blur rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-[#f9b233] mb-1">533</div>
              <div className="text-sm">Total interventions actives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation et Technologie */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Innovation & Technologie</h2>
            <p className="text-xl text-gray-700">
              Solutions technologiques pour optimiser l'efficacité de nos interventions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-6 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">LMIS Connecté</h3>
              <p className="text-sm">
                Système d'information logistique pour médicaments avec tracking en temps réel
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-3">GPS Ambulances</h3>
              <p className="text-sm">
                Géolocalisation et optimisation des trajets pour réduire les temps de réponse
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-6 rounded-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Télémédecine</h3>
              <p className="text-sm">
                Consultations à distance et support technique pour zones reculées
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-6 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">BI Dashboard</h3>
              <p className="text-sm">
                Tableaux de bord interactifs pour le monitoring et aide à la décision
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