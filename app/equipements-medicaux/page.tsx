import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function EquipementsMedicaux() {
  const breadcrumbItems = [
    { label: 'Agir pour la santé', href: '/agir-pour-la-sante' },
    { label: 'Équipements Médicaux' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Équipements Médicaux</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              1,8 million USD d'équipements médicaux livrés pour moderniser les établissements de santé
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e5f7f7] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-2">1,8M USD</div>
              <div className="text-gray-600">Équipements livrés</div>
              <div className="text-sm text-gray-500">Première phase</div>
            </div>
            <div className="text-center bg-[#e6f1f8] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-2">150</div>
              <div className="text-gray-600">ESS équipés</div>
              <div className="text-sm text-gray-500">Sur 333 ciblés</div>
            </div>
            <div className="text-center bg-[#fff5e5] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-2">8</div>
              <div className="text-gray-600">Catégories</div>
              <div className="text-sm text-gray-500">D'équipements fournis</div>
            </div>
            <div className="text-center bg-[#f9e5ea] p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-2">2 500</div>
              <div className="text-gray-600">Équipements</div>
              <div className="text-sm text-gray-500">Total installés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Moderniser pour Sauver des Vies</h2>
              <p className="text-xl text-gray-700 mb-6">
                Le FPS équipe les établissements de santé avec des technologies modernes 
                pour améliorer la <strong>qualité des soins</strong> et réduire la mortalité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#00a19a] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Diagnostic précis :</strong> Équipements de laboratoire et imagerie</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#00a19a] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Soins d'urgence :</strong> Réanimation et monitoring</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#00a19a] rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Chirurgie sécurisée :</strong> Blocs opératoires modernisés</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#00a19a]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Catégories d'équipements */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">8 Catégories d'Équipements</h2>
            <p className="text-xl text-gray-700">
              Une gamme complète pour tous les services hospitaliers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Laboratoire */}
            <div className="bg-gradient-to-br from-[#e5004c] to-[#ff4b6b] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Laboratoire</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Microscopes</li>
                <li>• Analyseurs sanguins</li>
                <li>• Centrifugeuses</li>
                <li>• Spectrophotomètres</li>
              </ul>
            </div>
            
            {/* Imagerie */}
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Imagerie</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Échographes</li>
                <li>• Radiologie digitale</li>
                <li>• ECG</li>
                <li>• Mammographes</li>
              </ul>
            </div>
            
            {/* Urgences */}
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Urgences</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Défibrillateurs</li>
                <li>• Respirateurs</li>
                <li>• Monitors</li>
                <li>• Chariots d'urgence</li>
              </ul>
            </div>
            
            {/* Chirurgie */}
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Chirurgie</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Tables opératoires</li>
                <li>• Bistouris électriques</li>
                <li>• Scialytiques</li>
                <li>• Aspirateurs</li>
              </ul>
            </div>
            
            {/* Maternité */}
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Maternité</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Tables d'accouchement</li>
                <li>• Incubateurs</li>
                <li>• Doppler fœtal</li>
                <li>• Aspirateurs néonataux</li>
              </ul>
            </div>
            
            {/* Stérilisation */}
            <div className="bg-gradient-to-br from-[#8A9BAD] to-[#a8b8c8] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Stérilisation</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Autoclaves</li>
                <li>• Poupinels</li>
                <li>• Bacs ultrasoniques</li>
                <li>• Thermodésinfecteurs</li>
              </ul>
            </div>
            
            {/* Dentaire */}
            <div className="bg-gradient-to-br from-[#17a2b8] to-[#138496] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Dentaire</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Units dentaires</li>
                <li>• Compresseurs</li>
                <li>• Radiologie dentaire</li>
                <li>• Instruments</li>
              </ul>
            </div>
            
            {/* Général */}
            <div className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold mb-3">Équipement Général</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Lits d'hôpital</li>
                <li>• Chaises roulantes</li>
                <li>• Groupes électrogènes</li>
                <li>• Mobilier médical</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'équipement */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Processus d'Équipement</h2>
            <p className="text-xl text-gray-700">
              De l'évaluation à la formation : une approche complète
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#035fa9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#035fa9] mb-3">Audit</h3>
              <p className="text-gray-700 text-sm">Évaluation des besoins spécifiques de chaque ESS</p>
            </div>
            
            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#e5004c] mb-3">Acquisition</h3>
              <p className="text-gray-700 text-sm">Appels d'offres et sélection d'équipements certifiés</p>
            </div>
            
            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f9b233] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#f9b233] mb-3">Installation</h3>
              <p className="text-gray-700 text-sm">Installation par des techniciens spécialisés</p>
            </div>
            
            {/* Étape 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#00a19a] mb-3">Formation</h3>
              <p className="text-gray-700 text-sm">Formation du personnel à l'utilisation</p>
            </div>
            
            {/* Étape 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold text-[#6f42c1] mb-3">Maintenance</h3>
              <p className="text-gray-700 text-sm">Suivi et maintenance préventive</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact transformationnel */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Transformation des Soins</h2>
            <p className="text-xl">
              L'impact mesurable des équipements modernes sur la qualité des soins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Avant l'Équipement FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Diagnostic précis</span>
                    <span className="text-[#f9b233] font-bold">35%</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Chirurgies réussies</span>
                    <span className="text-[#f9b233] font-bold">60%</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Satisfaction patients</span>
                    <span className="text-[#f9b233] font-bold">45%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Après l'Équipement FPS</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Diagnostic précis</span>
                    <span className="text-[#00b7ff] font-bold">85%</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Chirurgies réussies</span>
                    <span className="text-[#00b7ff] font-bold">92%</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Satisfaction patients</span>
                    <span className="text-[#00b7ff] font-bold">88%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Répartition des investissements */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Répartition des Investissements</h2>
            <p className="text-xl text-gray-700">
              1,8 million USD répartis stratégiquement selon les priorités sanitaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Graphique circulaire simulé */}
            <div className="relative h-96 bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-center mb-6">Répartition par catégorie</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#e5004c] rounded mr-2"></div>
                  <span>Laboratoire (25%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#f9b233] rounded mr-2"></div>
                  <span>Urgences (20%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#00a19a] rounded mr-2"></div>
                  <span>Chirurgie (18%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#035fa9] rounded mr-2"></div>
                  <span>Imagerie (15%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#6f42c1] rounded mr-2"></div>
                  <span>Maternité (12%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#8A9BAD] rounded mr-2"></div>
                  <span>Autres (10%)</span>
                </div>
              </div>
            </div>
            
            {/* Détails financiers */}
            <div>
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Détail des Investissements</h3>
              
              <div className="space-y-4">
                <div className="bg-[#f9e5ea] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Équipements de laboratoire</span>
                    <span className="text-[#e5004c] font-bold">450 000 USD</span>
                  </div>
                  <p className="text-sm text-gray-600">Microscopes, analyseurs, centrifugeuses pour 50 ESS</p>
                </div>
                
                <div className="bg-[#fff5e5] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Urgences et réanimation</span>
                    <span className="text-[#f9b233] font-bold">360 000 USD</span>
                  </div>
                  <p className="text-sm text-gray-600">Défibrillateurs, respirateurs, monitors pour urgences</p>
                </div>
                
                <div className="bg-[#e5f7f7] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Équipements chirurgicaux</span>
                    <span className="text-[#00a19a] font-bold">324 000 USD</span>
                  </div>
                  <p className="text-sm text-gray-600">Tables opératoires, bistouris électriques, scialytiques</p>
                </div>
                
                <div className="bg-[#e6f1f8] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Imagerie médicale</span>
                    <span className="text-[#035fa9] font-bold">270 000 USD</span>
                  </div>
                  <p className="text-sm text-gray-600">Échographes, radiologie numérique, ECG</p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Autres équipements</span>
                    <span className="text-gray-800 font-bold">396 000 USD</span>
                  </div>
                  <p className="text-sm text-gray-600">Maternité, dentaire, stérilisation, mobilier</p>
                </div>
              </div>
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
              L'impact des équipements modernes raconté par les professionnels de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Kambale Providence</h4>
                  <p className="text-sm text-gray-600">Chirurgien, HGR Lemera (Sud-Kivu)</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Avec le nouveau bloc opératoire équipé par le FPS, nous pouvons maintenant 
                réaliser des interventions complexes qui nécessitaient auparavant un transfert 
                à Bukavu. C'est un gain de temps précieux pour sauver des vies."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Tech. Lab. Mutoba Gloire</h4>
                  <p className="text-sm text-gray-600">CS Kingasani (Kinshasa)</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "L'analyseur hématologique nous permet de faire des bilans complets en 30 minutes 
                au lieu de 3 jours. Les patients reçoivent leurs résultats le jour même et peuvent 
                commencer leur traitement immédiatement."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perspectives */}
      <div className="bg-[#00a19a] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Perspectives 2025</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Extension du programme d'équipement à 500 ESS supplémentaires 
                avec un budget de 5 millions USD
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">650 ESS</div>
                  <div className="text-sm">Établissements équipés</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">5M USD</div>
                  <div className="text-sm">Investissement équipements</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">10 000</div>
                  <div className="text-sm">Équipements supplémentaires</div>
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