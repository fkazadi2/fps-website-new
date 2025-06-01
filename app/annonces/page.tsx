import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function Annonces() {
  const breadcrumbItems = [
    { label: 'Annonces' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6f42c1] to-[#8969d3] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Annonces officielles</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Appels d'offres, recrutements et avis officiels du Fonds de Promotion de la Santé
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f2eaf9] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#6f42c1] mb-2">86</div>
              <div className="text-gray-600">Appels d'offres</div>
              <div className="text-sm text-gray-500">Publiés en 2024</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">43</div>
              <div className="text-gray-600">Postes ouverts</div>
              <div className="text-sm text-gray-500">Recrutements en cours</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">23</div>
              <div className="text-gray-600">Avis publics</div>
              <div className="text-sm text-gray-500">En consultation</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">12</div>
              <div className="text-gray-600">Bourses d'études</div>
              <div className="text-sm text-gray-500">Disponibles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Appels d'offres récents */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Appels d'offres récents</h2>
            <p className="text-xl text-gray-700">
              Opportunités d'affaires et marchés publics en cours
            </p>
          </div>
          
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#035fa9] text-white">
                  <th className="py-3 px-4 text-left">Réf.</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Date limite</th>
                  <th className="py-3 px-4 text-left">Montant estimé</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">AO-FPS-2024-089</td>
                  <td className="py-3 px-4 font-medium">Fourniture d'équipements d'imagerie médicale pour 12 hôpitaux</td>
                  <td className="py-3 px-4">28 Jan 2025</td>
                  <td className="py-3 px-4">3,2M USD</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="bg-[#035fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#024a87] transition-colors">
                      Télécharger
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">AO-FPS-2024-088</td>
                  <td className="py-3 px-4 font-medium">Construction d'un entrepôt pharmaceutique à Lubumbashi</td>
                  <td className="py-3 px-4">15 Jan 2025</td>
                  <td className="py-3 px-4">1,8M USD</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="bg-[#035fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#024a87] transition-colors">
                      Télécharger
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">AO-FPS-2024-087</td>
                  <td className="py-3 px-4 font-medium">Fourniture de 25 ambulances médicalisées</td>
                  <td className="py-3 px-4">10 Jan 2025</td>
                  <td className="py-3 px-4">2,4M USD</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="bg-[#035fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#024a87] transition-colors">
                      Télécharger
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">AO-FPS-2024-086</td>
                  <td className="py-3 px-4 font-medium">Services de conseil pour le développement du système d'information sanitaire</td>
                  <td className="py-3 px-4">5 Jan 2025</td>
                  <td className="py-3 px-4">450K USD</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="bg-[#035fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#024a87] transition-colors">
                      Télécharger
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">AO-FPS-2024-085</td>
                  <td className="py-3 px-4 font-medium">Fourniture de générateurs solaires pour 35 centres de santé ruraux</td>
                  <td className="py-3 px-4">28 Déc 2024</td>
                  <td className="py-3 px-4">1,1M USD</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="bg-[#035fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#024a87] transition-colors">
                      Télécharger
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Voir tous les appels d'offres
            </Link>
          </div>
        </div>
      </div>

      {/* Opportunités d'emploi */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Opportunités d'emploi</h2>
            <p className="text-xl text-gray-700">
              Rejoignez notre équipe et contribuez à la transformation du système de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emploi 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#6f42c1]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#6f42c1] font-bold">Direction technique</div>
                  <div className="text-sm bg-[#f2eaf9] px-3 py-1 rounded-full text-[#6f42c1]">CDI</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Directeur des opérations pharmaceutiques
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Lieu:</span>
                    <span>Kinshasa</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Clôture:</span>
                    <span className="text-[#e5004c]">15 Janvier 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Niveau:</span>
                    <span>Direction</span>
                  </div>
                </div>
                <Link href="#" className="block text-center bg-[#6f42c1] text-white px-4 py-2 rounded font-semibold hover:bg-[#5c36a0] transition-colors">
                  Postuler
                </Link>
              </div>
            </div>

            {/* Emploi 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#035fa9]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#035fa9] font-bold">Service Technique</div>
                  <div className="text-sm bg-[#e6f1f8] px-3 py-1 rounded-full text-[#035fa9]">CDD - 2 ans</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Ingénieur biomédical senior
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Lieu:</span>
                    <span>Kinshasa, Goma</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Clôture:</span>
                    <span className="text-[#e5004c]">10 Janvier 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Niveau:</span>
                    <span>Senior</span>
                  </div>
                </div>
                <Link href="#" className="block text-center bg-[#035fa9] text-white px-4 py-2 rounded font-semibold hover:bg-[#024a87] transition-colors">
                  Postuler
                </Link>
              </div>
            </div>

            {/* Emploi 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#00a19a]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#00a19a] font-bold">Innovation & IT</div>
                  <div className="text-sm bg-[#e5f7f7] px-3 py-1 rounded-full text-[#00a19a]">CDI</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Chef de projet - Santé Digitale
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Lieu:</span>
                    <span>Kinshasa</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Clôture:</span>
                    <span className="text-[#e5004c]">20 Janvier 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 font-semibold">Niveau:</span>
                    <span>Cadre</span>
                  </div>
                </div>
                <Link href="#" className="block text-center bg-[#00a19a] text-white px-4 py-2 rounded font-semibold hover:bg-[#008c86] transition-colors">
                  Postuler
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Voir tous les postes
            </Link>
          </div>
        </div>
      </div>

      {/* Bourses et subventions */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Bourses et subventions</h2>
            <p className="text-xl text-gray-700">
              Opportunités de financement pour la recherche et la formation en santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bourse 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#f9b233] to-[#ffc107] h-3"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Programme de bourses doctorales en santé publique</h3>
                  <div className="text-sm bg-[#fff5e5] px-3 py-1 rounded-full text-[#f9b233] font-bold">
                    10 bourses
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Financement de doctorats pour les professionnels de santé congolais souhaitant développer 
                  des compétences en recherche dans les domaines prioritaires de santé publique.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Montant:</p>
                    <p className="font-semibold">25 000 USD / an</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Durée:</p>
                    <p className="font-semibold">3 ans</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date limite:</p>
                    <p className="font-semibold text-[#e5004c]">15 Février 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Admissibilité:</p>
                    <p className="font-semibold">Professionnels RDC</p>
                  </div>
                </div>
                <div className="text-right">
                  <Link href="#" className="inline-block bg-[#f9b233] text-white px-4 py-2 rounded font-semibold hover:bg-[#e6a01f] transition-colors">
                    Candidater
                  </Link>
                </div>
              </div>
            </div>

            {/* Bourse 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] h-3"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Subventions de recherche en médecine tropicale</h3>
                  <div className="text-sm bg-[#f9e5ea] px-3 py-1 rounded-full text-[#e5004c] font-bold">
                    5 subventions
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Financement de projets de recherche innovants sur les maladies tropicales négligées 
                  affectant la population congolaise, avec un accent sur les solutions applicables localement.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Montant:</p>
                    <p className="font-semibold">50 000 - 100 000 USD</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Durée:</p>
                    <p className="font-semibold">1-2 ans</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date limite:</p>
                    <p className="font-semibold text-[#e5004c]">28 Janvier 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Admissibilité:</p>
                    <p className="font-semibold">Chercheurs, Institutions</p>
                  </div>
                </div>
                <div className="text-right">
                  <Link href="#" className="inline-block bg-[#e5004c] text-white px-4 py-2 rounded font-semibold hover:bg-[#cc0045] transition-colors">
                    Candidater
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Toutes les bourses et subventions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 