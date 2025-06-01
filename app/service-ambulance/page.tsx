import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export default function ServiceAmbulance() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Service d\'Ambulance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Service d'Ambulance</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Transport médical d'urgence gratuit pour sauver des vies à travers la RDC
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques Clés */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">16</div>
              <div className="text-gray-600">Ambulances déployées</div>
              <div className="text-sm text-gray-500">À Kinshasa</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">1 491</div>
              <div className="text-gray-600">Transferts réalisés</div>
              <div className="text-sm text-gray-500">Patients transportés</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">4,5M USD</div>
              <div className="text-gray-600">Financement estimé</div>
              <div className="text-sm text-gray-500">Coût total du programme</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">24/7</div>
              <div className="text-gray-600">Service continu</div>
              <div className="text-sm text-gray-500">Disponibilité permanente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission du Service */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Mission du Service</h2>
              <p className="text-xl text-gray-700 mb-6">
                Assurer un transport médical d'urgence <strong>gratuit et de qualité</strong> pour tous les Congolais, 
                réduisant ainsi les barrières d'accès aux soins de santé essentiels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#e5004c] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Transport gratuit pour les urgences médicales</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#e5004c] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Évacuations sanitaires vers les hôpitaux de référence</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#e5004c] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Transferts inter-hospitaliers pour soins spécialisés</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#e5004c] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700">Accompagnement médical qualifié durant le transport</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#e5004c]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Accéder au Service */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Comment Accéder au Service</h2>
            <p className="text-xl">
              Trois moyens simples pour solliciter une ambulance FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Appel d'Urgence</h3>
              <p className="text-lg mb-2">Numéro gratuit</p>
              <p className="text-2xl font-bold text-[#f9b233]">*144*</p>
              <p className="text-sm opacity-90 mt-2">Disponible 24h/24 depuis tout opérateur</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Centres de Santé</h3>
              <p className="mb-4">Via les établissements partenaires</p>
              <p className="text-sm opacity-90">
                Les centres de santé peuvent solliciter directement une ambulance 
                pour leurs patients nécessitant un transfert
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Application Mobile</h3>
              <p className="mb-4">FPS Ambulance App</p>
              <p className="text-sm opacity-90">
                Application mobile en développement pour localisation automatique 
                et suivi en temps réel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Témoignages</h2>
            <p className="text-xl text-gray-700">
              Des vies sauvées grâce au service d'ambulance FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Mama Kabedi Marie</h4>
                  <p className="text-sm text-gray-600">Bénéficiaire, Kinshasa</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "L'ambulance du FPS a sauvé la vie de mon enfant. En 15 minutes, nous étions à l'hôpital. 
                Sans ce service gratuit, je n'aurais jamais pu payer le transport en urgence. 
                Merci au FPS pour cette initiative vitale."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Mbuyi Joseph</h4>
                  <p className="text-sm text-gray-600">Médecin urgentiste, Hôpital Général</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Depuis le déploiement des ambulances FPS, nous recevons les patients plus rapidement 
                et dans de meilleures conditions. L'équipement médical à bord permet de stabiliser 
                les patients durant le transport. C'est un vrai progrès."
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