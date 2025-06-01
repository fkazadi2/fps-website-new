import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function TransportPatients() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Transport de patients' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#e5004c] to-[#ff4b6b] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Transport de Patients</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Faciliter l'accès aux soins spécialisés à travers un système de transport médical efficient
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques Clés */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">1 491</div>
              <div className="text-gray-600">Patients transportés</div>
              <div className="text-sm text-gray-500">Depuis 2020</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">16</div>
              <div className="text-gray-600">Ambulances disponibles</div>
              <div className="text-sm text-gray-500">Flotte Kinshasa</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">94%</div>
              <div className="text-gray-600">Succès transferts</div>
              <div className="text-sm text-gray-500">Arrivée en sécurité</div>
            </div>
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">24/7</div>
              <div className="text-gray-600">Service continu</div>
              <div className="text-sm text-gray-500">Tous les jours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Types de Transport */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Types de Transport Médical</h2>
            <p className="text-xl text-gray-700">
              Services adaptés selon la gravité et les besoins spécifiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transferts Inter-hospitaliers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#e5004c] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Transferts Inter-hospitaliers</h3>
                <p className="opacity-90">Entre établissements de santé</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Transport spécialisé</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fréquence</span>
                    <span className="font-bold text-[#e5004c]">4-6/jour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance moyenne</span>
                    <span className="font-bold text-[#e5004c]">25 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée moyenne</span>
                    <span className="font-bold text-[#e5004c]">45 min</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Soins intensifs vers hôpitaux tertiaires</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Examens spécialisés (IRM, Scanner)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#e5004c] rounded-full mr-2"></div>
                    <span>Interventions chirurgicales urgentes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Transport Ambulatoire */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#00a19a] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Transport Ambulatoire</h3>
                <p className="opacity-90">Patients non urgents</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Transport programmé</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fréquence</span>
                    <span className="font-bold text-[#00a19a]">8-12/jour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance moyenne</span>
                    <span className="font-bold text-[#00a19a]">15 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée moyenne</span>
                    <span className="font-bold text-[#00a19a]">30 min</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Consultations spécialisées</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Dialyse et chimiothérapie</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-2"></div>
                    <span>Retour à domicile post-hospitalisation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Transport Néonatal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#6f42c1] text-white p-6">
                <h3 className="text-xl font-bold mb-2">Transport Néonatal</h3>
                <p className="opacity-90">Nouveau-nés et nourrissons</p>
              </div>
              <div className="p-6">
                <div className="relative h-48 bg-gray-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Transport pédiatrique</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fréquence</span>
                    <span className="font-bold text-[#6f42c1]">2-4/semaine</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance moyenne</span>
                    <span className="font-bold text-[#6f42c1]">35 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée moyenne</span>
                    <span className="font-bold text-[#6f42c1]">60 min</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Unités de soins intensifs néonatals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Équipement spécialisé (incubateurs)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#6f42c1] rounded-full mr-2"></div>
                    <span>Personnel médical pédiatrique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Procédure de Demande */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Procédure de Demande</h2>
            <p className="text-xl">
              Comment solliciter un transport médical FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Évaluation Médicale</h3>
              <p className="text-sm opacity-90">
                Le médecin traitant évalue la nécessité du transport et établit un certificat médical justifiant le transfert
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Demande Officielle</h3>
              <p className="text-sm opacity-90">
                Remplissage du formulaire de demande avec informations patient, destination et niveau d'urgence
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Validation FPS</h3>
              <p className="text-sm opacity-90">
                Vérification des critères d'éligibilité et validation par l'équipe médicale du FPS dans les 2 heures
              </p>
            </div>
            
            {/* Étape 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Organisation Transport</h3>
              <p className="text-sm opacity-90">
                Planification du transport avec ambulance adaptée et personnel médical qualifié pour accompagnement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Critères d'Éligibilité */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Critères d'Éligibilité</h2>
              <p className="text-xl text-gray-700 mb-6">
                Le transport de patients FPS est accessible selon des critères médicaux et sociaux définis
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#e6f1f8] p-4 rounded-lg">
                  <h4 className="font-bold text-[#035fa9] mb-2">Critères Médicaux</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• État nécessitant des soins spécialisés non disponibles localement</li>
                    <li>• Impossibilité de transport par moyens conventionnels</li>
                    <li>• Recommandation médicale justifiée</li>
                  </ul>
                </div>
                
                <div className="bg-[#f9e5ea] p-4 rounded-lg">
                  <h4 className="font-bold text-[#e5004c] mb-2">Critères Sociaux</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Incapacité financière démontrée</li>
                    <li>• Résidence en RDC depuis au moins 6 mois</li>
                    <li>• Absence d'assurance transport médical</li>
                  </ul>
                </div>
                
                <div className="bg-[#e5f7f7] p-4 rounded-lg">
                  <h4 className="font-bold text-[#00a19a] mb-2">Priorités</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Femmes enceintes et enfants moins de 5 ans</li>
                    <li>• Urgences vitales et situations critiques</li>
                    <li>• Patients des ESS partenaires FPS</li>
                  </ul>
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

      {/* Équipement et Personnel */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Équipement et Personnel</h2>
            <p className="text-xl text-gray-700">
              Des moyens adaptés pour chaque type de transport
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Équipement Médical */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#00a19a] mb-6">Équipement Médical</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#e5f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">16</div>
                  <div className="text-sm text-gray-600">Défibrillateurs</div>
                </div>
                <div className="text-center p-4 bg-[#e5f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">16</div>
                  <div className="text-sm text-gray-600">Respirateurs portables</div>
                </div>
                <div className="text-center p-4 bg-[#e5f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">8</div>
                  <div className="text-sm text-gray-600">Moniteurs cardiaques</div>
                </div>
                <div className="text-center p-4 bg-[#e5f7f7] rounded-lg">
                  <div className="text-2xl font-bold text-[#00a19a] mb-1">4</div>
                  <div className="text-sm text-gray-600">Incubateurs transport</div>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-3"></div>
                  <span>Pharmacie d'urgence complète</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-3"></div>
                  <span>Matériel de réanimation et perfusion</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00a19a] rounded-full mr-3"></div>
                  <span>Brancards et matériel d'immobilisation</span>
                </li>
              </ul>
            </div>

            {/* Personnel Qualifié */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#e5004c] mb-6">Personnel Qualifié</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#f9e5ea] rounded-lg">
                  <span className="font-semibold">Médecins urgentistes</span>
                  <span className="text-[#e5004c] font-bold">8</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f9e5ea] rounded-lg">
                  <span className="font-semibold">Infirmiers spécialisés</span>
                  <span className="text-[#e5004c] font-bold">24</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f9e5ea] rounded-lg">
                  <span className="font-semibold">Ambulanciers certifiés</span>
                  <span className="text-[#e5004c] font-bold">32</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f9e5ea] rounded-lg">
                  <span className="font-semibold">Chauffeurs formés</span>
                  <span className="text-[#e5004c] font-bold">48</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#fff5e5] rounded-lg">
                <h4 className="font-bold text-[#f9b233] mb-2">Formation Continue</h4>
                <p className="text-sm text-gray-600">
                  Tous les membres de l'équipe suivent une formation trimestrielle aux gestes d'urgence, 
                  protocoles de transport et utilisation des équipements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages Patients */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Témoignages Patients</h2>
            <p className="text-xl">
              L'expérience de nos bénéficiaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-white">Papa Jean Mukala</h4>
                  <p className="text-white/80 text-sm">Transfert Matadi → Kinshasa</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Mon épouse a été transportée pour un accouchement difficile. L'équipe était très professionnelle 
                et a pris soin d'elle pendant tout le trajet. Sans ce service gratuit, nous aurions perdu notre bébé."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-white">Mama Grace Ilunga</h4>
                  <p className="text-white/80 text-sm">Transport néonatal Bukavu → Goma</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Mon bébé prématuré avait besoin de soins spécialisés. L'ambulance était équipée d'un incubateur 
                et le personnel médical l'a surveillé tout le trajet. Aujourd'hui il va bien."
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