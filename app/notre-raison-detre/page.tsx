import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function NotreRaisonDetre() {
  const breadcrumbItems = [
    { label: 'Notre Raison d\'Être' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#035fa9] to-[#00b7ff] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Notre Raison d'Être</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Construire un système de santé équitable et accessible pour tous les Congolais, 
              en réalisant la Couverture Santé Universelle
            </p>
          </div>
        </div>
      </div>

      {/* Section Vision */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Vision</h2>
              <p className="text-xl text-gray-700 mb-6">
                Réaliser la Couverture Santé Universelle en République Démocratique du Congo 
                selon le principe fondamental : <strong>"chacun ce qu'il peut, chacun ce dont il a besoin"</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Notre vision s'inscrit dans l'engagement du Président Félix Antoine Tshisekedi Tshilombo 
                pour une santé accessible à tous les Congolais, sans distinction de classe sociale ou de région.
              </p>
              
              {/* Statistiques de vision */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#e6f1f8] p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#035fa9]">43,1%</div>
                  <div className="text-sm text-gray-600">Charge actuelle des ménages</div>
                </div>
                <div className="bg-[#fff5e5] p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#f9b233]">24%</div>
                  <div className="text-sm text-gray-600">Objectif 2034</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#035fa9]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Mission */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Le FPS agit comme le bras financier du Ministère de la Santé Publique, Hygiène et Prévention Sociale (MSPHPS) 
              et comme architecte de la Couverture Santé Universelle en République Démocratique du Congo.
            </p>
          </div>
          
          {/* 6 missions principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#035fa9]">
              <h3 className="text-xl font-bold text-[#035fa9] mb-4">Infrastructures sanitaires</h3>
              <p className="text-gray-700">
                Financement des projets d'infrastructure, équipements médicaux et modernisation des établissements de santé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#e5004c]">
              <h3 className="text-xl font-bold text-[#e5004c] mb-4">Médicaments & pharmacie</h3>
              <p className="text-gray-700">
                Promotion de la production locale, médecine traditionnelle et approvisionnement en médicaments essentiels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f9b233]">
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Gouvernance en santé</h3>
              <p className="text-gray-700">
                Planification, normalisation, recherche et développement des ressources humaines en santé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00a19a]">
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Financements innovants</h3>
              <p className="text-gray-700">
                Collecte et gestion des ressources via redevances minières, taxes de promotion et droits d'accises.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#8A9BAD]">
              <h3 className="text-xl font-bold text-[#8A9BAD] mb-4">Subventionnement ESS</h3>
              <p className="text-gray-700">
                Réduction des coûts et amélioration de la qualité des soins dans les établissements de santé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6f42c1]">
              <h3 className="text-xl font-bold text-[#6f42c1] mb-4">Collecte de sang</h3>
              <p className="text-gray-700">
                Formation des prestataires, sécurité transfusionnelle et campagnes mobiles de collecte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section À propos du FPS */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <div className="h-full bg-gray-300 rounded-lg"></div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-[#035fa9] mb-6">À propos du FPS</h2>
              <p className="text-lg text-gray-700 mb-6">
                Créé par la <strong>Loi n°08/009 du 07 juillet 2008</strong>, modifiée par la 
                <strong> Loi n°18/035 du 13 décembre 2018</strong>, le Fonds de Promotion de la Santé 
                constitue une innovation majeure dans le financement de la santé en RDC.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Organisé par le <strong>Décret n°22/15 du 09 avril 2022</strong> et dirigé selon 
                l'<strong>Ordonnance n°22/139 du 29 août 2022</strong>, le FPS mobilise des ressources 
                innovantes pour transformer le paysage sanitaire congolais.
              </p>
              
              {/* Direction */}
              <div className="bg-[#e6f1f8] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#035fa9] mb-2">Direction Générale</h3>
                <p className="text-lg font-semibold text-gray-700">MIKA NYEMBO Marius</p>
                <p className="text-gray-600 italic">
                  "Renforcer le Système de Santé National à travers l'amélioration de l'offre des soins"
                </p>
                <p className="text-sm text-gray-500 mt-2">Contact : dg@fps.cd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section CSU en RDC */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">La CSU en République Démocratique du Congo</h2>
            <p className="text-xl max-w-4xl mx-auto">
              État des lieux et perspectives pour une couverture santé universelle effective d'ici 2034
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* État actuel */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#e5004c] mb-4">État actuel</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ménages</span>
                  <span className="font-bold text-[#e5004c]">43,1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reste du Monde</span>
                  <span className="font-bold">37,9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">État</span>
                  <span className="font-bold">15,5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Entreprises</span>
                  <span className="font-bold">3,2%</span>
                </div>
              </div>
            </div>
            
            {/* Défis */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Défis majeurs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 13 316 centres de santé existants</li>
                <li>• Seulement 2 500 conformes aux normes</li>
                <li>• Accès limité aux médicaments essentiels</li>
                <li>• Transport médical insuffisant</li>
                <li>• Formation du personnel de santé</li>
              </ul>
            </div>
            
            {/* Objectif 2034 */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Objectif 2034</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">État</span>
                  <span className="font-bold text-[#00a19a]">34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Partenaires PTF</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ménages</span>
                  <span className="font-bold text-[#00a19a]">24%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CSU & TPS</span>
                  <span className="font-bold">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#035fa9] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          {/* Footer content à développer */}
        </div>
      </footer>
    </div>
  );
} 