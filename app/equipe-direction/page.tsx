import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function EquipeDirection() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'Équipe de Direction' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#0066cc] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Équipe de Direction</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Leadership visionnaire et expertise technique au service de la couverture sanitaire universelle en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Vision du Leadership */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Leadership Transformationnel</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire de haut niveau qui allie vision stratégique, 
              expertise technique et connaissance approfondie du système de santé congolais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">15+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Années d'Expérience</div>
              <div className="text-sm text-gray-600">Moyenne de l'équipe dirigeante</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-4">8</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Directeurs Spécialisés</div>
              <div className="text-sm text-gray-600">Domaines d'expertise couverts</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">12</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Diplômes Avancés</div>
              <div className="text-sm text-gray-600">Masters et Doctorats dans l'équipe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Directeur Général */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Direction Générale</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Photo et infos de base */}
                <div className="md:w-1/3 bg-gradient-to-br from-[#035fa9] to-[#0066cc] p-8 text-white">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-[#035fa9]">MN</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">MIKA NYEMBO Marius</h3>
                    <p className="text-lg opacity-90 mb-4">Directeur Général</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/20 px-3 py-1 rounded-full">Dr. en Santé Publique</div>
                      <div className="bg-white/20 px-3 py-1 rounded-full">15+ ans d'expérience</div>
                      <div className="bg-white/20 px-3 py-1 rounded-full">Expert OMS</div>
                    </div>
                  </div>
                </div>
                
                {/* Contenu principal */}
                <div className="md:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-[#035fa9] mb-6">Vision et Leadership</h4>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Dr. MIKA NYEMBO Marius</strong> dirige le Fonds de Promotion de la Santé avec une vision claire : 
                      faire de la RDC un modèle africain de couverture sanitaire universelle. Fort de son expertise en santé publique 
                      et de sa connaissance approfondie du contexte congolais, il a orchestré la transformation du paysage sanitaire national.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#e6f1f8] p-4 rounded-lg">
                        <h5 className="font-bold text-[#035fa9] mb-2">Formation Académique</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Doctorat en Santé Publique</li>
                          <li>• Master en Épidémiologie</li>
                          <li>• Diplôme de Médecine</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#e5f7f7] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00a19a] mb-2">Réalisations Clés</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 333 ESS modernisés</li>
                          <li>• 7,2M USD mobilisés</li>
                          <li>• 4,2M bénéficiaires atteints</li>
                        </ul>
                      </div>
                    </div>
                    
                    <blockquote className="bg-[#f8f9fa] p-4 border-l-4 border-[#035fa9] italic">
                      "Notre mission n'est pas seulement de financer la santé, mais de transformer 
                      structurellement l'accès aux soins pour chaque Congolais, sans exception."
                      <footer className="text-sm text-gray-600 mt-2">— Dr. MIKA NYEMBO Marius</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Équipe de Direction */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Équipe Exécutive</h2>
            <p className="text-xl text-gray-700">
              Les directeurs spécialisés qui pilotent les différents domaines d'intervention du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Directeur Financier */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#f9b233]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DK</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">DIKANGA KAZADI Paul</h3>
                <p className="text-[#f9b233] text-center font-semibold mb-4">Directeur Administratif et Financier</p>
                
                <div className="space-y-3">
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">Gestion financière publique, audit et contrôle</p>
                  </div>
                  
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">98% transparence financière, 0 détournement détecté</p>
                  </div>
                  
                  <div className="bg-[#fff5e5] p-3 rounded">
                    <h5 className="font-bold text-[#f9b233] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">MBA Finance, Expert-Comptable OHADA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directrice Programmes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#00a19a]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">MWAMBA MUTEBA Grace</h3>
                <p className="text-[#00a19a] text-center font-semibold mb-4">Directrice des Programmes de Santé</p>
                
                <div className="space-y-3">
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">Gestion de programmes sanitaires, M&E</p>
                  </div>
                  
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">333 ESS équipés, 91% taux de fonctionnalité</p>
                  </div>
                  
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <h5 className="font-bold text-[#00a19a] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">Master Santé Publique, Spécialiste OMS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur Approvisionnement */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#6f42c1]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LM</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">LUMBU MALONGA Jean</h3>
                <p className="text-[#6f42c1] text-center font-semibold mb-4">Directeur Approvisionnement</p>
                
                <div className="space-y-3">
                  <div className="bg-[#f3f0ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">Chaînes d'approvisionnement, logistique médicale</p>
                  </div>
                  
                  <div className="bg-[#f3f0ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">0 rupture de stock depuis 18 mois</p>
                  </div>
                  
                  <div className="bg-[#f3f0ff] p-3 rounded">
                    <h5 className="font-bold text-[#6f42c1] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">Ingénieur Logistique, Expert Supply Chain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur Ressources Humaines */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#e5004c]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KN</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">KASONGO NGOY Martin</h3>
                <p className="text-[#e5004c] text-center font-semibold mb-4">Directeur Ressources Humaines</p>
                
                <div className="space-y-3">
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">GRH santé, formation continue, motivation</p>
                  </div>
                  
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">2,847 agents formés, 95% taux satisfaction</p>
                  </div>
                  
                  <div className="bg-[#f9e5ea] p-3 rounded">
                    <h5 className="font-bold text-[#e5004c] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">Master GRH, Psychologue du Travail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directrice Communication */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#17a2b8]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#17a2b8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BK</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">BUKASA KABONGO Sylvie</h3>
                <p className="text-[#17a2b8] text-center font-semibold mb-4">Directrice Communication</p>
                
                <div className="space-y-3">
                  <div className="bg-[#e5f4f6] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">Communication santé, relations publiques</p>
                  </div>
                  
                  <div className="bg-[#e5f4f6] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">2,847 photos, 156 vidéos, 1,2M vues</p>
                  </div>
                  
                  <div className="bg-[#e5f4f6] p-3 rounded">
                    <h5 className="font-bold text-[#17a2b8] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">Master Communication, Journaliste santé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur Juridique */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#8A9BAD]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#8A9BAD] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TM</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">TSHISWAKA MBELU Droit</h3>
                <p className="text-[#8A9BAD] text-center font-semibold mb-4">Directeur Affaires Juridiques</p>
                
                <div className="space-y-3">
                  <div className="bg-[#f0f2f5] p-3 rounded">
                    <h5 className="font-bold text-[#8A9BAD] text-sm mb-1">Expertise</h5>
                    <p className="text-xs text-gray-700">Droit de la santé, conformité réglementaire</p>
                  </div>
                  
                  <div className="bg-[#f0f2f5] p-3 rounded">
                    <h5 className="font-bold text-[#8A9BAD] text-sm mb-1">Réalisations</h5>
                    <p className="text-xs text-gray-700">15 textes légaux élaborés, 0 litige</p>
                  </div>
                  
                  <div className="bg-[#f0f2f5] p-3 rounded">
                    <h5 className="font-bold text-[#8A9BAD] text-sm mb-1">Formation</h5>
                    <p className="text-xs text-gray-700">Docteur en Droit, Avocat au Barreau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conseil d'Administration */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Conseil d'Administration</h2>
            <p className="text-xl text-gray-700">
              Gouvernance démocratique et supervision stratégique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">PA</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Prof. ABEDI MASUDI</h4>
              <p className="text-[#035fa9] text-sm font-semibold mb-2">Président du CA</p>
              <p className="text-xs text-gray-600">Représentant Ministère Santé</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">LT</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">LUNGANZA TSHISAND</h4>
              <p className="text-[#f9b233] text-sm font-semibold mb-2">Vice-Président</p>
              <p className="text-xs text-gray-600">Représentant Ministère Finances</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">KM</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">KAYEMBE MUKENG</h4>
              <p className="text-[#00a19a] text-sm font-semibold mb-2">Secrétaire</p>
              <p className="text-xs text-gray-600">Représentant Société Civile</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">NB</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">NGANDU BANZA</h4>
              <p className="text-[#e5004c] text-sm font-semibold mb-2">Membre</p>
              <p className="text-xs text-gray-600">Représentant Secteur Privé</p>
            </div>
          </div>
        </div>
      </div>

      {/* Culture Organisationnelle */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Notre Culture Organisationnelle</h2>
            <p className="text-xl">
              Les valeurs qui guident notre équipe dans la transformation du système de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-sm opacity-90">
                Recherche permanente de la qualité et de l'innovation dans tous nos programmes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-sm opacity-90">
                Travail en équipe et partenariats stratégiques pour maximiser l'impact
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-sm opacity-90">
                Solutions créatives et technologies modernes pour résoudre les défis sanitaires
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Intégrité</h3>
              <p className="text-sm opacity-90">
                Transparence, responsabilité et éthique dans la gestion des ressources publiques
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