import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function SourcesFinancement() {
  const breadcrumbItems = [
    { label: 'Financement de la santé', href: '/financement-sante' },
    { label: 'Sources de financement' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Sources de Financement</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Financement innovant et durable de la couverture sanitaire universelle en RDC
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble financière */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Modèle Financier Innovant</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le FPS mobilise des ressources durables à travers un mécanisme innovant de taxes 
              de promotion de la santé et de partenariats stratégiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">42,6M</div>
              <div className="text-lg mb-2">USD Collectés</div>
              <div className="text-sm opacity-90">Taxes promotion santé</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '89%'}}></div>
              </div>
              <div className="text-xs mt-2">89% taux recouvrement</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">15,3M</div>
              <div className="text-lg mb-2">USD Partenariats</div>
              <div className="text-sm opacity-90">Bailleurs internationaux</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '76%'}}></div>
              </div>
              <div className="text-xs mt-2">76% cofinancement</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">8,9M</div>
              <div className="text-lg mb-2">USD Secteur Privé</div>
              <div className="text-sm opacity-90">Contributions volontaires</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '67%'}}></div>
              </div>
              <div className="text-xs mt-2">67% entreprises engagées</div>
            </div>

            <div className="text-center bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-4">66,8M</div>
              <div className="text-lg mb-2">USD Budget Total</div>
              <div className="text-sm opacity-90">Disponible 2023</div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
              <div className="text-xs mt-2">95% objectif atteint</div>
            </div>
          </div>
        </div>
      </div>

      {/* Taxes de Promotion de la Santé */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Taxes de Promotion de la Santé</h2>
            <p className="text-xl text-gray-700">
              Mécanisme innovant de financement dédié exclusivement à la santé publique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#f9b233] mb-6">Produits Taxés</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-medium">Tabac et cigarettes</span>
                    <div className="text-sm text-gray-600">15% taxe spéciale</div>
                  </div>
                  <span className="text-[#f9b233] font-bold">18,7M USD</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-medium">Boissons alcoolisées</span>
                    <div className="text-sm text-gray-600">12% taxe spéciale</div>
                  </div>
                  <span className="text-[#f9b233] font-bold">12,4M USD</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-medium">Boissons sucrées</span>
                    <div className="text-sm text-gray-600">8% taxe santé</div>
                  </div>
                  <span className="text-[#f9b233] font-bold">6,8M USD</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-medium">Télécommunications</span>
                    <div className="text-sm text-gray-600">2% taxe solidarité</div>
                  </div>
                  <span className="text-[#f9b233] font-bold">4,7M USD</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total collecté 2023</span>
                  <span className="text-2xl font-bold text-[#f9b233]">42,6M USD</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Performance de Collecte</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Taux de recouvrement</span>
                    <span className="font-bold">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#00a19a] h-3 rounded-full" style={{width: '89%'}}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">vs 65% moyenne africaine</div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Délai de versement</span>
                    <span className="font-bold">≤ 30 jours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#00a19a] h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">95% dans les délais</div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Croissance annuelle</span>
                    <span className="font-bold">+23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#00a19a] h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">vs 2022</div>
                </div>
                
                <div className="bg-[#e5f1ff] p-4 rounded-lg">
                  <h4 className="font-bold text-[#035fa9] mb-2">Prévisions 2024</h4>
                  <div className="text-2xl font-bold text-[#035fa9]">52,4M USD</div>
                  <div className="text-sm text-gray-600">+23% croissance projetée</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Mécanisme de Collecte</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">1</div>
                <h4 className="text-sm font-bold text-[#035fa9] mb-2">Collecte DGDA</h4>
                <p className="text-xs text-gray-600">Douanes et administrations fiscales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">2</div>
                <h4 className="text-sm font-bold text-[#035fa9] mb-2">Vérification</h4>
                <p className="text-xs text-gray-600">Contrôle et validation mensuelle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">3</div>
                <h4 className="text-sm font-bold text-[#035fa9] mb-2">Transfert</h4>
                <p className="text-xs text-gray-600">Versement compte dédié FPS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">4</div>
                <h4 className="text-sm font-bold text-[#035fa9] mb-2">Allocation</h4>
                <p className="text-xs text-gray-600">Répartition selon plan stratégique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">5</div>
                <h4 className="text-sm font-bold text-[#035fa9] mb-2">Suivi</h4>
                <p className="text-xs text-gray-600">Monitoring et reporting mensuel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenariats Internationaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenariats Internationaux</h2>
            <p className="text-xl text-gray-700">
              Cofinancement et expertise technique de bailleurs de fonds stratégiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Banque Mondiale */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#00a19a]">
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Banque Mondiale</h3>
              <div className="space-y-3">
                <div className="bg-[#e5f7f7] p-3 rounded">
                  <div className="text-lg font-bold text-[#00a19a]">6,7M USD</div>
                  <div className="text-xs text-gray-600">Financement 2023</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Domaines prioritaires:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Renforcement système santé</li>
                    <li>• Infrastructures hospitalières</li>
                    <li>• Formations de personnel</li>
                    <li>• Systèmes d'information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OMS */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#f9b233]">
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">OMS</h3>
              <div className="space-y-3">
                <div className="bg-[#fff5e5] p-3 rounded">
                  <div className="text-lg font-bold text-[#f9b233]">3,2M USD</div>
                  <div className="text-xs text-gray-600">Support technique</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Expertises fournies:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Normes et protocoles</li>
                    <li>• Surveillance épidémiologique</li>
                    <li>• Certification qualité</li>
                    <li>• Formation spécialisée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UNICEF */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#e5004c]">
              <h3 className="text-xl font-bold text-[#e5004c] mb-4">UNICEF</h3>
              <div className="space-y-3">
                <div className="bg-[#f9e5ea] p-3 rounded">
                  <div className="text-lg font-bold text-[#e5004c]">2,8M USD</div>
                  <div className="text-xs text-gray-600">Santé mère-enfant</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Programmes joints:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Vaccination élargie</li>
                    <li>• Nutrition infantile</li>
                    <li>• Soins obstétricaux</li>
                    <li>• Urgences pédiatriques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Autres Bailleurs */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#6f42c1]">
              <h3 className="text-xl font-bold text-[#6f42c1] mb-4">Autres Bailleurs</h3>
              <div className="space-y-3">
                <div className="bg-[#f3f0ff] p-3 rounded">
                  <div className="text-lg font-bold text-[#6f42c1]">2,6M USD</div>
                  <div className="text-xs text-gray-600">Contributions diverses</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Partenaires:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Union Européenne</li>
                    <li>• Coopération belge</li>
                    <li>• Fondations privées</li>
                    <li>• ONGs internationales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contributions Secteur Privé */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Engagement du Secteur Privé</h2>
            <p className="text-xl text-gray-700">
              Responsabilité sociétale des entreprises pour la santé publique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#e5004c] mb-6">Entreprises Partenaires</h3>
              <div className="space-y-4">
                <div className="bg-[#f9e5ea] p-4 rounded-lg">
                  <h4 className="font-bold text-[#e5004c] mb-2">Secteur Minier</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">34 entreprises engagées</span>
                    <span className="font-bold text-[#e5004c]">4,7M USD</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Gécamines, Tenke, Kamoa...</div>
                </div>
                
                <div className="bg-[#fff5e5] p-4 rounded-lg">
                  <h4 className="font-bold text-[#f9b233] mb-2">Télécommunications</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">8 opérateurs mobiles</span>
                    <span className="font-bold text-[#f9b233]">2,1M USD</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Vodacom, Airtel, Orange...</div>
                </div>
                
                <div className="bg-[#e5f7f7] p-4 rounded-lg">
                  <h4 className="font-bold text-[#00a19a] mb-2">Secteur Bancaire</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">12 institutions financières</span>
                    <span className="font-bold text-[#00a19a]">1,3M USD</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">BCDC, RCB, Equity Bank...</div>
                </div>
                
                <div className="bg-[#f3f0ff] p-4 rounded-lg">
                  <h4 className="font-bold text-[#6f42c1] mb-2">Autres Secteurs</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">23 entreprises diverses</span>
                    <span className="font-bold text-[#6f42c1]">0,8M USD</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Agro-alimentaire, transport...</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Modalités de Contribution</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#035fa9] mb-3">Contributions financières</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dons directs</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00a19a] h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Parrainage programmes</span>
                      <span className="font-bold">23%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f9b233] h-2 rounded-full" style={{width: '23%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Fournitures équipements</span>
                      <span className="font-bold">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#e5004c] h-2 rounded-full" style={{width: '10%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#e5f1ff] p-4 rounded-lg">
                  <h4 className="font-bold text-[#035fa9] mb-2">Avantages fiscaux</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Déduction fiscale 150%</li>
                    <li>• Crédit d'impôt social</li>
                    <li>• Exonération TVA dons</li>
                    <li>• Reconnaissance publique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Durabilité Financière */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Durabilité Financière</h2>
            <p className="text-xl">
              Stratégie à long terme pour assurer la pérennité du financement de la santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Diversification</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Taxes nationales</span>
                  <span className="font-bold text-[#f9b233]">64%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Partenariats internationaux</span>
                  <span className="font-bold text-[#f9b233]">23%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Secteur privé</span>
                  <span className="font-bold text-[#f9b233]">13%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <div className="text-xl font-bold text-[#f9b233] mb-1">Faible Risque</div>
                <div className="text-sm opacity-90">Diversification optimale des sources</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Croissance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>2021</span>
                  <span className="font-bold text-[#f9b233]">34,7M USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2022</span>
                  <span className="font-bold text-[#f9b233]">54,3M USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2023</span>
                  <span className="font-bold text-[#f9b233]">66,8M USD</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <div className="text-xl font-bold text-[#f9b233] mb-1">+23% Annuel</div>
                <div className="text-sm opacity-90">Croissance soutenue depuis 3 ans</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Perspectives 2030</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Budget cible</span>
                  <span className="font-bold text-[#f9b233]">150M USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ESS couvertes</span>
                  <span className="font-bold text-[#f9b233]">500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Population CSU</span>
                  <span className="font-bold text-[#f9b233]">8M</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <div className="text-xl font-bold text-[#f9b233] mb-1">Objectif 2030</div>
                <div className="text-sm opacity-90">Vision ambitieuse mais réaliste</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparence et Accountability */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Transparence & Gouvernance</h2>
            <p className="text-xl text-gray-700">
              Mécanismes rigoureux de suivi et contrôle de l'utilisation des fonds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Audit & Contrôle</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Audit externe annuel</h4>
                  <div className="text-sm opacity-90">Certification internationale ISO</div>
                  <div className="text-lg font-bold mt-2">98% conformité</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Contrôle parlementaire</h4>
                  <div className="text-sm opacity-90">Commission santé Assemblée Nationale</div>
                  <div className="text-lg font-bold mt-2">Rapports trimestriels</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Société civile</h4>
                  <div className="text-sm opacity-90">Observatoire citoyen des finances</div>
                  <div className="text-lg font-bold mt-2">Monitoring indépendant</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Publication & Reporting</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Rapports financiers</h4>
                  <div className="text-sm opacity-90">Publications mensuelles détaillées</div>
                  <div className="text-lg font-bold mt-2">100% des fonds tracés</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Plateforme en ligne</h4>
                  <div className="text-sm opacity-90">Accès public aux données</div>
                  <div className="text-lg font-bold mt-2">24/7 disponible</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Mécanisme plaintes</h4>
                  <div className="text-sm opacity-90">Ligne directe citoyens</div>
                  <div className="text-lg font-bold mt-2">72h délai réponse</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-[#00a19a] to-[#26d0ce] text-white px-8 py-4 rounded-lg">
              <div className="text-3xl font-bold mb-2">99,7%</div>
              <div className="text-lg">Taux de conformité aux standards de transparence internationale</div>
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