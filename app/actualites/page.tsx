import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function Actualites() {
  const breadcrumbItems = [
    { label: 'Actualités' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b8] to-[#138496] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Actualités FPS</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Dernières nouvelles, réalisations et événements du Fonds de Promotion de la Santé
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques d'actualités */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e5f4f6] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#17a2b8] mb-2">156</div>
              <div className="text-gray-600">Communiqués publiés</div>
              <div className="text-sm text-gray-500">Depuis 2018</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">89</div>
              <div className="text-gray-600">Reportages TV</div>
              <div className="text-sm text-gray-500">RTNC, RTGA, autres</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">1,2M</div>
              <div className="text-gray-600">Vues totales</div>
              <div className="text-sm text-gray-500">Tous médias confondus</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">25</div>
              <div className="text-gray-600">Conférences de presse</div>
              <div className="text-sm text-gray-500">Événements majeurs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Actualité à la une */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">À la Une</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-96 bg-gradient-to-br from-[#035fa9] to-[#0066cc] relative">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-4 left-4 bg-[#e5004c] text-white px-3 py-1 rounded-full text-sm font-bold">
                    EXCLUSIF
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm opacity-90 mb-2">15 Décembre 2024</div>
                    <h3 className="text-2xl font-bold">
                      Le FPS franchit le cap des 500 ESS équipés
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#00a19a] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                    COMMUNIQUÉ
                  </span>
                  <span className="text-gray-500 text-sm">Il y a 2 heures</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Record historique : 500 Établissements de Santé modernisés
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Le Directeur Général Dr. MIKA NYEMBO Marius annonce l'atteinte d'un jalon historique 
                  avec l'équipement complet du 500ème établissement de santé dans le cadre du programme 
                  de modernisation sanitaire. Cette réalisation dépasse l'objectif initial de 333 ESS 
                  et témoigne de l'efficacité du modèle FPS.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <div className="text-lg font-bold text-[#035fa9]">500 ESS</div>
                    <div className="text-sm text-gray-600">Modernisés à ce jour</div>
                  </div>
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <div className="text-lg font-bold text-[#00a19a]">12,4M USD</div>
                    <div className="text-sm text-gray-600">Investissements totaux</div>
                  </div>
                </div>
                
                <Link href="/impact-realisations" className="bg-[#035fa9] text-white px-6 py-3 rounded font-semibold hover:bg-[#024a87] transition-colors">
                  Lire l'article complet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actualités récentes */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Actualités Récentes</h2>
            <p className="text-xl text-gray-700">
              Les dernières nouvelles du secteur de la santé en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actualité 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#f9b233]">
              <div className="h-48 bg-gradient-to-br from-[#f9b233] to-[#ffc107] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#f9b233] text-white px-2 py-1 rounded text-xs font-bold">
                  INNOVATION
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">12 Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Lancement du système de télémédecine dans 50 centres de santé
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Le FPS inaugure son programme de télémédecine permettant aux patients 
                  ruraux de consulter des spécialistes à distance, révolutionnant l'accès aux soins.
                </p>
                <Link href="/actualites/telemedecine" className="text-[#f9b233] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>

            {/* Actualité 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#00a19a]">
              <div className="h-48 bg-gradient-to-br from-[#00a19a] to-[#26d0ce] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#00a19a] text-white px-2 py-1 rounded text-xs font-bold">
                  PARTENARIAT
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">10 Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Accord de coopération avec l'Union Africaine pour la CSU
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Signature d'un protocole d'accord historique avec l'UA pour partager 
                  l'expertise du modèle FPS avec d'autres pays africains.
                </p>
                <Link href="/actualites/partenariat-ua" className="text-[#00a19a] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>

            {/* Actualité 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#6f42c1]">
              <div className="h-48 bg-gradient-to-br from-[#6f42c1] to-[#8969d3] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#6f42c1] text-white px-2 py-1 rounded text-xs font-bold">
                  FORMATION
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">8 Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  3 000 agents de santé formés aux nouvelles technologies
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Achèvement du programme de formation massive du personnel de santé 
                  sur l'utilisation des équipements médicaux modernes fournis par le FPS.
                </p>
                <Link href="/actualites/formation-agents" className="text-[#6f42c1] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>

            {/* Actualité 4 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#e5004c]">
              <div className="h-48 bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#e5004c] text-white px-2 py-1 rounded text-xs font-bold">
                  URGENCE
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">5 Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Déploiement d'urgence de 25 ambulances pour la saison des pluies
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Renforcement du parc ambulancier pour faire face aux défis de transport 
                  médical durant la saison des pluies dans les zones difficiles d'accès.
                </p>
                <Link href="/actualites/ambulances-urgence" className="text-[#e5004c] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>

            {/* Actualité 5 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#8A9BAD]">
              <div className="h-48 bg-gradient-to-br from-[#8A9BAD] to-[#a8b8c8] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#8A9BAD] text-white px-2 py-1 rounded text-xs font-bold">
                  RECHERCHE
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">3 Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Publication de l'étude d'impact 2018-2024 du FPS
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Les résultats scientifiques démontrent une réduction de 45% de la mortalité 
                  dans les zones d'intervention du FPS selon l'étude indépendante de l'UNIKIN.
                </p>
                <Link href="/actualites/etude-impact" className="text-[#8A9BAD] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>

            {/* Actualité 6 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#035fa9]">
              <div className="h-48 bg-gradient-to-br from-[#035fa9] to-[#0066cc] relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute top-4 left-4 bg-[#035fa9] text-white px-2 py-1 rounded text-xs font-bold">
                  INFRASTRUCTURE
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">1er Décembre 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Inauguration du centre de stockage régional de Lubumbashi
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Ouverture du 4ème centre de stockage et distribution de médicaments 
                  du FPS, renforçant l'approvisionnement dans les provinces du Sud-Est.
                </p>
                <Link href="/actualites/centre-lubumbashi" className="text-[#035fa9] font-semibold text-sm hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Communiqués officiels */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Communiqués Officiels</h2>
            <p className="text-xl text-gray-700">
              Déclarations et positions officielles du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#035fa9] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CP</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Communiqué de Presse</h4>
                  <p className="text-sm text-gray-600">Direction Générale FPS</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Position du FPS sur la réforme du système de santé national
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Le FPS réitère son engagement à accompagner le Gouvernement dans la mise en œuvre 
                de la réforme du système de santé, en capitalisant sur les acquis et leçons apprises...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">29 Novembre 2024</span>
                <Link href="/communiques/reforme-sante" className="text-[#035fa9] font-semibold text-sm hover:underline">
                  Télécharger PDF
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f9b233] rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DG</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Déclaration du DG</h4>
                  <p className="text-sm text-gray-600">Dr. MIKA NYEMBO Marius</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Bilan de la 6ème année d'activités du FPS
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                "Nous célébrons aujourd'hui 6 années d'innovation et de transformation du système 
                de santé congolais. Les résultats dépassent nos espérances initiales..."
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">25 Novembre 2024</span>
                <Link href="/communiques/bilan-6ans" className="text-[#f9b233] font-semibold text-sm hover:underline">
                  Voir la vidéo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter et abonnements */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Restez Informés</h2>
            <p className="text-xl">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités du FPS
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Newsletter FPS</h3>
                  <ul className="text-white/90 space-y-2 text-sm">
                    <li>• Actualités hebdomadaires</li>
                    <li>• Communiqués officiels</li>
                    <li>• Rapports d'activités</li>
                    <li>• Événements à venir</li>
                  </ul>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30"
                    />
                    <button className="w-full bg-white text-[#035fa9] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                      S'abonner à la newsletter
                    </button>
                  </div>
                  <p className="text-white/70 text-xs mt-2">
                    Nous respectons votre vie privée. Désabonnement possible à tout moment.
                  </p>
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