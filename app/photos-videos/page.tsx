import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotosVideos() {
  const breadcrumbItems = [
    { label: 'Impact & Réalisations', href: '/impact-realisations' },
    { label: 'Photos et vidéos' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Photos et Vidéos</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Témoignages visuels de l'impact du FPS à travers le Congo
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques Visuelles */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">2 847</div>
              <div className="text-gray-600">Photos documentées</div>
              <div className="text-sm text-gray-500">Réalisations sur terrain</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">156</div>
              <div className="text-gray-600">Vidéos produites</div>
              <div className="text-sm text-gray-500">Témoignages et formation</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">89</div>
              <div className="text-gray-600">Reportages TV</div>
              <div className="text-sm text-gray-500">Couverture médiatique</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">1,2M</div>
              <div className="text-gray-600">Vues totales</div>
              <div className="text-sm text-gray-500">Portée des contenus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Galerie Photos par Thème */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Galerie Photos</h2>
            <p className="text-xl text-gray-700">
              Découvrez nos réalisations à travers des images authentiques
            </p>
          </div>
          
          {/* Médicaments Essentiels */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#e5004c] mb-6">Approvisionnement en Médicaments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Livraison ESS Matadi</p>
                  <p className="text-sm opacity-90">7,2M USD de médicaments</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Réception Kinshasa</p>
                  <p className="text-sm opacity-90">333 ESS bénéficiaires</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Formation pharmaciens</p>
                  <p className="text-sm opacity-90">Gestion des stocks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Équipements Médicaux */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#00a19a] mb-6">Équipements Médicaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Échographe Bukavu</p>
                  <p className="text-xs opacity-90">1,8M USD investis</p>
                </div>
              </div>
              <div className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Scanner Lubumbashi</p>
                  <p className="text-xs opacity-90">150 ESS équipées</p>
                </div>
              </div>
              <div className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Laboratoire Goma</p>
                  <p className="text-xs opacity-90">2,500 équipements</p>
                </div>
              </div>
              <div className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-semibold text-sm">Formation techniciens</p>
                  <p className="text-xs opacity-90">85% précision diagnostic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Ambulance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#6f42c1] mb-6">Service d'Ambulance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Flotte ambulances Kinshasa</p>
                  <p className="text-sm opacity-90">16 véhicules déployés</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Intervention d'urgence</p>
                  <p className="text-sm opacity-90">1,491 transferts réalisés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Vidéos */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Vidéos Témoignages</h2>
            <p className="text-xl">
              Découvrez l'impact du FPS à travers des témoignages authentiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vidéo 1 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Dr. MIKA NYEMBO Marius</h3>
              <p className="text-sm opacity-90 mb-4">
                Directeur général du FPS présente la vision 2022-2025
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">8:32 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">127K vues</span>
              </div>
            </div>

            {/* Vidéo 2 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Témoignage Mama Kabedi</h3>
              <p className="text-sm opacity-90 mb-4">
                Bénéficiaire du service ambulance partage son expérience
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">3:45 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">89K vues</span>
              </div>
            </div>

            {/* Vidéo 3 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Reportage RTNC</h3>
              <p className="text-sm opacity-90 mb-4">
                Couverture médiatique des réalisations FPS 2023
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">15:20 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">245K vues</span>
              </div>
            </div>

            {/* Vidéo 4 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Formation ESS</h3>
              <p className="text-sm opacity-90 mb-4">
                Session de formation des gestionnaires d'ESS à Lubumbashi
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">12:15 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">67K vues</span>
              </div>
            </div>

            {/* Vidéo 5 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Collecte de Sang</h3>
              <p className="text-sm opacity-90 mb-4">
                Campagne mobile de collecte de sang dans le Kasaï
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">6:08 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">134K vues</span>
              </div>
            </div>

            {/* Vidéo 6 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="relative h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Impact National</h3>
              <p className="text-sm opacity-90 mb-4">
                Bilan des 5 ans d'existence du FPS (2018-2023)
              </p>
              <div className="flex items-center text-sm">
                <span className="opacity-75">22:45 min</span>
                <span className="mx-2">•</span>
                <span className="opacity-75">456K vues</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Médias et Presse */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Couverture Médiatique</h2>
            <p className="text-xl text-gray-700">
              Le FPS dans les médias congolais et internationaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RTNC</span>
                </div>
                <div>
                  <h4 className="font-bold">Radio Télévision Nationale</h4>
                  <p className="text-sm text-gray-600">15 mars 2023</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Le FPS révolutionne l'accès aux soins de santé en RDC avec 333 ESS renforcées"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RTGA</span>
                </div>
                <div>
                  <h4 className="font-bold">Radio Télé Groupe Avenir</h4>
                  <p className="text-sm text-gray-600">28 juillet 2023</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Service d'ambulance gratuit : Une bouffée d'oxygène pour les Kinois"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WHO</span>
                </div>
                <div>
                  <h4 className="font-bold">Organisation Mondiale Santé</h4>
                  <p className="text-sm text-gray-600">12 octobre 2023</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Le modèle FPS-RDC : Une innovation dans le financement de la santé en Afrique"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] py-16">
        <div className="max-w-[1800px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Partagez vos témoignages
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Vous avez bénéficié des services du FPS ? Partagez votre expérience avec nous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#f9b233] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Envoyer une photo
            </button>
            <button className="bg-[#035fa9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#024a8a] transition-colors">
              Partager une vidéo
            </button>
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