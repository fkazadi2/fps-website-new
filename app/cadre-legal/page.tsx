import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function CadreLegal() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être', href: '/notre-raison-detre' },
    { label: 'Cadre légal' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Cadre Légal</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Les fondements juridiques qui donnent au FPS sa légitimité et ses prérogatives
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Un Fondement Juridique Solide</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Le Fonds de Promotion de la Santé s'appuie sur un arsenal juridique cohérent et évolutif, 
              fruit de plus d'une décennie de réflexion législative sur le financement de la santé en RDC.
            </p>
          </div>
        </div>
      </div>

      {/* Chronologie Législative */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Évolution Législative</h2>
            <p className="text-xl text-gray-700">
              Une construction juridique progressive : de 2008 à 2022
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#035fa9]"></div>
            
            <div className="space-y-16">
              {/* 2008 - Loi fondatrice */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#035fa9]">
                    <div className="text-2xl font-bold text-[#035fa9] mb-2">2008</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Loi n° 08/009</h3>
                    <p className="text-gray-700 mb-4">
                      Loi fondatrice portant dispositions générales applicables aux établissements publics.
                      Cette loi pose les bases juridiques des institutions publiques congolaises.
                    </p>
                    <div className="text-sm text-[#035fa9] font-semibold">Fondement institutionnel</div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#035fa9] rounded-full border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2018 - Création FPS */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-12 h-12 bg-[#e5004c] rounded-full border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#e5004c]">
                    <div className="text-2xl font-bold text-[#e5004c] mb-2">2018</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Loi n° 18/035</h3>
                    <p className="text-gray-700 mb-4">
                      Loi créant le Fonds de Promotion de la Santé (FPS). Acte de naissance officiel 
                      qui établit le FPS comme établissement public doté de personnalité juridique.
                    </p>
                    <div className="text-sm text-[#e5004c] font-semibold">Création officielle du FPS</div>
                  </div>
                </div>
              </div>
              
              {/* 2022 - Décret d'application */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#f9b233]">
                    <div className="text-2xl font-bold text-[#f9b233] mb-2">2022</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Décret n° 22/15</h3>
                    <p className="text-gray-700 mb-4">
                      Décret fixant les attributions, l'organisation et le fonctionnement du FPS.
                      Précise les modalités opérationnelles et la structure organisationnelle.
                    </p>
                    <div className="text-sm text-[#f9b233] font-semibold">Opérationnalisation</div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#f9b233] rounded-full border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2022 - Ordonnance financements */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-12 h-12 bg-[#00a19a] rounded-full border-4 border-white z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#00a19a]">
                    <div className="text-2xl font-bold text-[#00a19a] mb-2">2022</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Ordonnance n° 22/139</h3>
                    <p className="text-gray-700 mb-4">
                      Ordonnance portant Institution de Financements Innovants de la Santé.
                      Définit les 6 sources de financement innovantes du FPS.
                    </p>
                    <div className="text-sm text-[#00a19a] font-semibold">Mécanismes de financement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Textes Fondamentaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Les Textes Fondamentaux</h2>
            <p className="text-xl text-gray-700">
              Analyse détaillée des principales dispositions légales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Loi de création */}
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Loi n° 18/035 du 13 décembre 2018</h3>
              <h4 className="text-lg font-semibold mb-6">Portant création du Fonds de Promotion de la Santé</h4>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Statut Juridique</h5>
                  <p className="text-sm">Établissement public doté de la personnalité juridique et de l'autonomie financière</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Tutelle</h5>
                  <p className="text-sm">Placé sous la tutelle du Ministère de la Santé Publique, Hygiène et Prévention Sociale</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Mission Principale</h5>
                  <p className="text-sm">Financer les activités de promotion, prévention et prestation des soins de santé</p>
                </div>
              </div>
            </div>
            
            {/* Ordonnance financements */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ordonnance n° 22/139 du 15 décembre 2022</h3>
              <h4 className="text-lg font-semibold mb-6">Portant Institution de Financements Innovants de la Santé</h4>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Sources de Financement</h5>
                  <p className="text-sm">Définit 6 mécanismes innovants de mobilisation de ressources</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Redevances Minières</h5>
                  <p className="text-sm">Quotité des redevances minières dévolue au financement de la santé</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded">
                  <h5 className="font-bold mb-2">Taxes de Promotion</h5>
                  <p className="text-sm">2% CIF sur les importations et droits d'accises sur produits nocifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sources de Financement Légales */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Les 6 Sources Légales de Financement</h2>
            <p className="text-xl text-gray-700">
              Cadre juridique des mécanismes innovants de financement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Source 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#035fa9]">
              <h4 className="text-lg font-bold text-[#035fa9] mb-3">1. Redevances Minières</h4>
              <p className="text-gray-700 text-sm mb-3">
                Quotité des redevances minières dévolue au Pouvoir Central, conformément à la législation minière.
              </p>
              <div className="text-xs text-gray-500">Base légale : Code minier et ordonnance n° 22/139</div>
            </div>
            
            {/* Source 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#e5004c]">
              <h4 className="text-lg font-bold text-[#e5004c] mb-3">2. Taxes de Promotion (2% CIF)</h4>
              <p className="text-gray-700 text-sm mb-3">
                Taxe de promotion de la santé fixée à 2% de la valeur CIF des marchandises à l'importation.
              </p>
              <div className="text-xs text-gray-500">Base légale : Ordonnance n° 22/139</div>
            </div>
            
            {/* Source 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#f9b233]">
              <h4 className="text-lg font-bold text-[#f9b233] mb-3">3. Droits d'Accises</h4>
              <p className="text-gray-700 text-sm mb-3">
                Quotité des droits d'accises sur tabac, boissons alcoolisées, énergisantes et télécommunications.
              </p>
              <div className="text-xs text-gray-500">Base légale : Code des douanes et ordonnance n° 22/139</div>
            </div>
            
            {/* Source 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#00a19a]">
              <h4 className="text-lg font-bold text-[#00a19a] mb-3">4. Quotité FSS</h4>
              <p className="text-gray-700 text-sm mb-3">
                Une quotité venant du Fonds de Solidarité Sociale pour renforcer les interventions du FPS.
              </p>
              <div className="text-xs text-gray-500">Base légale : Loi portant création du FSS</div>
            </div>
            
            {/* Source 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#8A9BAD]">
              <h4 className="text-lg font-bold text-[#8A9BAD] mb-3">5. Appuis des PTF</h4>
              <p className="text-gray-700 text-sm mb-3">
                Contributions des Partenaires Techniques et Financiers dans le cadre de la coopération internationale.
              </p>
              <div className="text-xs text-gray-500">Base légale : Accords de coopération</div>
            </div>
            
            {/* Source 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#6f42c1]">
              <h4 className="text-lg font-bold text-[#6f42c1] mb-3">6. Subventions de l'État</h4>
              <p className="text-gray-700 text-sm mb-3">
                Subventions directes inscrites au budget national pour le fonctionnement du FPS.
              </p>
              <div className="text-xs text-gray-500">Base légale : Loi de finances annuelle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gouvernance et Contrôle */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Gouvernance et Contrôle</h2>
            <p className="text-xl text-gray-700">
              Mécanismes légaux de supervision et de transparence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Structure de Gouvernance */}
            <div>
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Structure de Gouvernance</h3>
              
              <div className="space-y-4">
                <div className="bg-[#e6f1f8] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#035fa9] mb-3">Conseil d'Administration</h4>
                  <p className="text-gray-700 mb-2">Organe de supervision stratégique composé de représentants :</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ministère de la Santé (tutelle)</li>
                    <li>• Ministère des Finances</li>
                    <li>• Ministère du Budget</li>
                    <li>• Représentants de la société civile</li>
                  </ul>
                </div>
                
                <div className="bg-[#f9e5ea] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#e5004c] mb-3">Direction Générale</h4>
                  <p className="text-gray-700 mb-2">Direction exécutive assurée par :</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Directeur Général : MIKA NYEMBO Marius</li>
                    <li>• Contact : dg@fps.cd</li>
                    <li>• Mandat défini par le Conseil d'Administration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Mécanismes de Contrôle */}
            <div>
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Mécanismes de Contrôle</h3>
              
              <div className="space-y-4">
                <div className="bg-[#fff5e5] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#f9b233] mb-3">Contrôles Internes</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Audit interne permanent</li>
                    <li>• Procédures budgétaires strictes</li>
                    <li>• Reporting trimestriel au Conseil</li>
                    <li>• Suivi des indicateurs de performance</li>
                  </ul>
                </div>
                
                <div className="bg-[#e5f7f7] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#00a19a] mb-3">Contrôles Externes</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Inspection Générale des Finances</li>
                    <li>• Cour des Comptes</li>
                    <li>• Audits externes annuels</li>
                    <li>• Contrôle parlementaire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Défis Réglementaires */}
      <div className="bg-[#f9b233] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Défis Réglementaires Actuels</h2>
            <p className="text-xl">
              Les enjeux juridiques pour optimiser le fonctionnement du FPS
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Publication du Décret portant mesures d'applications
              </h3>
              <p className="text-lg text-white mb-6">
                Le défi immédiat consiste en la publication du Décret portant mesures d'applications 
                des financements innovants de la santé pour permettre un fonctionnement optimal 
                de l'ensemble du système.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/20 p-4 rounded">
                  <h4 className="font-bold text-white mb-2">Enjeux Opérationnels</h4>
                  <ul className="text-sm text-white space-y-1">
                    <li>• Modalités de collecte des taxes</li>
                    <li>• Procédures de transfert des fonds</li>
                    <li>• Mécanismes de contrôle et audit</li>
                  </ul>
                </div>
                
                <div className="bg-white/20 p-4 rounded">
                  <h4 className="font-bold text-white mb-2">Impact Attendu</h4>
                  <ul className="text-sm text-white space-y-1">
                    <li>• Automatisation des flux financiers</li>
                    <li>• Prévisibilité des ressources</li>
                    <li>• Efficacité opérationnelle accrue</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-lg inline-block">
                <div className="text-2xl font-bold text-white mb-2">Priorité 2024-2025</div>
                <div className="text-white">Finalisation du cadre réglementaire complet</div>
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