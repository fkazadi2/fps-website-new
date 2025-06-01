import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function Evenements() {
  const breadcrumbItems = [
    { label: 'Événements' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#0066cc] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Événements FPS</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Conférences, séminaires et rencontres du Fonds de Promotion de la Santé
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">32</div>
              <div className="text-gray-600">Événements organisés</div>
              <div className="text-sm text-gray-500">En 2024</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">8</div>
              <div className="text-gray-600">Forums internationaux</div>
              <div className="text-sm text-gray-500">Coopération mondiale</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">47</div>
              <div className="text-gray-600">Conférences provinciales</div>
              <div className="text-sm text-gray-500">Couverture nationale</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">13K+</div>
              <div className="text-gray-600">Participants</div>
              <div className="text-sm text-gray-500">Professionnels de santé</div>
            </div>
          </div>
        </div>
      </div>

      {/* Événement à la une */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Événement à venir</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-96 bg-gradient-to-br from-[#035fa9] to-[#0066cc] relative">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-4 left-4 bg-[#e5004c] text-white px-3 py-1 rounded-full text-sm font-bold">
                    CONFÉRENCE
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm opacity-90 mb-2">20-22 Janvier 2025</div>
                    <h3 className="text-2xl font-bold">
                      Forum National sur l'Assurance Maladie Universelle
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#035fa9] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                    KINSHASA
                  </span>
                  <span className="text-gray-500 text-sm">3 jours • Hôtel Pullman</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Forum National sur l'Assurance Maladie Universelle
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Organisé par le FPS en collaboration avec le Ministère de la Santé Publique, ce forum 
                  rassemblera plus de 500 participants nationaux et internationaux pour discuter des 
                  mécanismes pratiques d'implémentation de l'assurance maladie universelle en RDC.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#e6f1f8] p-3 rounded">
                    <div className="text-lg font-bold text-[#035fa9]">500+</div>
                    <div className="text-sm text-gray-600">Participants attendus</div>
                  </div>
                  <div className="bg-[#e5f7f7] p-3 rounded">
                    <div className="text-lg font-bold text-[#00a19a]">15</div>
                    <div className="text-sm text-gray-600">Pays représentés</div>
                  </div>
                </div>
                
                <Link href="#" className="bg-[#035fa9] text-white px-6 py-3 rounded font-semibold hover:bg-[#024a87] transition-colors">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Événements à venir */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Événements à venir</h2>
            <p className="text-xl text-gray-700">
              Calendrier des prochains événements du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Événement 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-[#035fa9]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#e6f1f8] px-3 py-1 rounded-full text-[#035fa9] font-semibold">15 Février 2025</div>
                  <div className="text-xs text-gray-500">Kinshasa</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Séminaire de formation sur les équipements médicaux
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Formation pratique destinée aux techniciens biomédicaux sur l'entretien des équipements distribués par le FPS.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#035fa9] font-semibold">8h30 - 16h00</div>
                  <Link href="#" className="text-white bg-[#035fa9] px-4 py-2 rounded text-sm font-semibold hover:bg-[#024a87] transition-colors">
                    S'inscrire
                  </Link>
                </div>
              </div>
            </article>

            {/* Événement 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-[#00a19a]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#e5f7f7] px-3 py-1 rounded-full text-[#00a19a] font-semibold">1-2 Mars 2025</div>
                  <div className="text-xs text-gray-500">Lubumbashi</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Conférence sur les financements innovants en santé
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Comment mobiliser des ressources durables pour financer la santé en RDC : leçons du FPS et perspectives.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#00a19a] font-semibold">9h00 - 17h00</div>
                  <Link href="#" className="text-white bg-[#00a19a] px-4 py-2 rounded text-sm font-semibold hover:bg-[#008c86] transition-colors">
                    S'inscrire
                  </Link>
                </div>
              </div>
            </article>

            {/* Événement 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-[#f9b233]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm bg-[#fff5e5] px-3 py-1 rounded-full text-[#f9b233] font-semibold">18 Mars 2025</div>
                  <div className="text-xs text-gray-500">Goma</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Lancement de la stratégie de télémédecine du Nord-Kivu
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Cérémonie officielle de déploiement du réseau de télémédecine dans les zones difficiles d'accès.
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-[#f9b233] font-semibold">10h00 - 13h00</div>
                  <Link href="#" className="text-white bg-[#f9b233] px-4 py-2 rounded text-sm font-semibold hover:bg-[#e6a01f] transition-colors">
                    S'inscrire
                  </Link>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Voir tous les événements
            </Link>
          </div>
        </div>
      </div>

      {/* Événements passés */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Événements passés</h2>
            <p className="text-xl text-gray-700">
              Retour sur nos précédentes conférences et séminaires
            </p>
          </div>
          
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#035fa9] text-white">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Événement</th>
                  <th className="py-3 px-4 text-left">Lieu</th>
                  <th className="py-3 px-4 text-left">Participants</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">10 Nov 2024</td>
                  <td className="py-3 px-4 font-medium">Forum des partenaires techniques et financiers</td>
                  <td className="py-3 px-4">Kinshasa</td>
                  <td className="py-3 px-4">156</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="text-[#035fa9] hover:underline">Voir détails</Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">24 Oct 2024</td>
                  <td className="py-3 px-4 font-medium">Conférence sur la médecine traditionnelle</td>
                  <td className="py-3 px-4">Kisangani</td>
                  <td className="py-3 px-4">89</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="text-[#035fa9] hover:underline">Voir détails</Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">15 Sep 2024</td>
                  <td className="py-3 px-4 font-medium">Symposium sur les urgences médicales</td>
                  <td className="py-3 px-4">Lubumbashi</td>
                  <td className="py-3 px-4">211</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="text-[#035fa9] hover:underline">Voir détails</Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">2 Août 2024</td>
                  <td className="py-3 px-4 font-medium">Atelier de formation des pharmaciens</td>
                  <td className="py-3 px-4">Matadi</td>
                  <td className="py-3 px-4">67</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="text-[#035fa9] hover:underline">Voir détails</Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4">18 Juil 2024</td>
                  <td className="py-3 px-4 font-medium">Conférence de presse - Bilan semestriel</td>
                  <td className="py-3 px-4">Kinshasa</td>
                  <td className="py-3 px-4">43</td>
                  <td className="py-3 px-4">
                    <Link href="#" className="text-[#035fa9] hover:underline">Voir détails</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-block border-2 border-[#035fa9] text-[#035fa9] px-8 py-3 rounded-lg font-bold hover:bg-[#035fa9] hover:text-white transition-colors">
              Consulter les archives
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 