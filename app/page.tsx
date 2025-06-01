'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Types pour le contenu des onglets
type TabContent = {
  main: {
    title: string;
    date: string;
  };
  list: Array<{
    title: string;
    date: string;
  }>;
};

type TabContents = {
  actualites: TabContent;
  evenements: TabContent;
  'a-venir': TabContent;
  annonces: TabContent;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof TabContents>('actualites');
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'audio' | 'photos'>('video');

  // Contenus d'exemple pour chaque onglet
  const tabContents: TabContents = {
    actualites: {
      main: {
        title: "Dotation de 333 ESS en médicaments essentiels : 7,2M USD engagés",
        date: "Août 2024"
      },
      list: [
        {
          title: "16 ambulances déployées à Kinshasa : 1 491 transferts réalisés",
          date: "Août 2024"
        },
        {
          title: "Formation de 139 cadres en collecte de sang et sécurité transfusionnelle",
          date: "Juillet 2024"
        },
        {
          title: "Dotation en équipements : 1,8M USD d'équipements médicaux livrés",
          date: "Juin 2024"
        },
        {
          title: "Pré-requis en espèce : 403 000 USD injectés dans 229 ESS",
          date: "Mai 2024"
        },
        {
          title: "155e campagne de collecte mobile de sang réalisée",
          date: "Avril 2024"
        }
      ]
    },
    evenements: {
      main: {
        title: "Forum National sur l'Assurance Maladie Universelle - 20-22 Janvier 2025",
        date: "À venir"
      },
      list: [
        {
          title: "Séminaire de formation sur les équipements médicaux - Kinshasa",
          date: "15 Février 2025"
        },
        {
          title: "Conférence sur les financements innovants en santé - Lubumbashi",
          date: "1-2 Mars 2025"
        },
        {
          title: "Lancement de la stratégie de télémédecine du Nord-Kivu - Goma",
          date: "18 Mars 2025"
        },
        {
          title: "Forum des partenaires techniques et financiers - Kinshasa",
          date: "Passé - 10 Nov 2024"
        },
        {
          title: "Conférence sur la médecine traditionnelle - Kisangani",
          date: "Passé - 24 Oct 2024"
        }
      ]
    },
    'a-venir': {
      main: {
        title: "Centre d'Excellence pour la Production Locale de Médicaments - Budget : 18,5M USD",
        date: "Lancement : T2 2025"
      },
      list: [
        {
          title: "Réseau de cliniques mobiles pour zones rurales - 8,2M USD",
          date: "T1 2025"
        },
        {
          title: "Plateforme digitale FPS Santé Connect - 5,6M USD",
          date: "T2 2025"
        },
        {
          title: "Académie FPS de formation médicale continue - 3,9M USD",
          date: "T3 2025"
        },
        {
          title: "Institut de recherche en médecine tropicale - 4,1M USD",
          date: "T1 2026"
        },
        {
          title: "Fonds d'investissement pour startups santé - 12,8M USD",
          date: "T2 2026"
        }
      ]
    },
    annonces: {
      main: {
        title: "Appel d'offres AO-FPS-2024-089 : Fourniture d'équipements d'imagerie médicale pour 12 hôpitaux",
        date: "Date limite : 28 Jan 2025"
      },
      list: [
        {
          title: "Poste ouvert : Directeur des opérations pharmaceutiques - Kinshasa",
          date: "Clôture : 15 Janvier 2025"
        },
        {
          title: "Appel d'offres : Construction d'un entrepôt pharmaceutique à Lubumbashi",
          date: "Date limite : 15 Jan 2025"
        },
        {
          title: "Bourse doctorale en santé publique - 10 bourses disponibles",
          date: "Candidature avant : 15 Février 2025"
        },
        {
          title: "Poste ouvert : Ingénieur biomédical senior - Kinshasa, Goma",
          date: "Clôture : 10 Janvier 2025"
        },
        {
          title: "Subventions de recherche en médecine tropicale - 5 subventions",
          date: "Date limite : 28 Janvier 2025"
        }
      ]
    }
  };

  // Liens vers les pages complètes
  const tabLinks = {
    actualites: "/actualites",
    evenements: "/evenements",
    'a-venir': "/a-venir",
    annonces: "/annonces"
  };

  // Contenus d'exemple pour chaque type de média
  const mediaContents = {
    video: {
      main: {
        title: "Inauguration du centre de production locale de médicaments",
        date: "29 mai 2025"
      },
      list: [
        {
          title: "Lancement des 16 ambulances à Kinshasa par le Ministre de la Santé",
          date: "15 mai 2025"
        },
        {
          title: "Formation des 139 cadres en collecte de sang - Reportage",
          date: "10 mai 2025"
        },
        {
          title: "Conférence du Directeur Général sur la vision 2034",
          date: "5 mai 2025"
        },
        {
          title: "Visite des ESS réhabilitées dans la province du Nord-Kivu",
          date: "29 avril 2025"
        },
        {
          title: "Témoignages des bénéficiaires du service d'ambulance",
          date: "22 avril 2025"
        }
      ]
    },
    audio: {
      main: {
        title: "Interview du DG du FPS sur Radio Okapi - La CSU en RDC",
        date: "27 mai 2025"
      },
      list: [
        {
          title: "Podcast: Comprendre les financements innovants de la santé",
          date: "20 mai 2025"
        },
        {
          title: "Émission spéciale: Médicaments essentiels et production locale",
          date: "17 mai 2025"
        },
        {
          title: "Table ronde: L'avenir du système de santé congolais",
          date: "12 mai 2025"
        },
        {
          title: "Interview: Les défis de la collecte de sang en RDC",
          date: "8 mai 2025"
        },
        {
          title: "Débat: Comment atteindre une couverture santé universelle?",
          date: "3 mai 2025"
        }
      ]
    },
    photos: {
      main: {
        title: "Galerie photo: Livraison des équipements médicaux aux 333 ESS",
        date: "30 mai 2025"
      },
      list: [
        {
          title: "Album: Inauguration des nouveaux locaux du FPS",
          date: "25 mai 2025"
        },
        {
          title: "Reportage photo: Les ambulances en action à Kinshasa",
          date: "18 mai 2025"
        },
        {
          title: "Portfolio: Avant/Après des centres de santé réhabilités",
          date: "13 mai 2025"
        },
        {
          title: "Photos: Forum national sur l'assurance maladie universelle",
          date: "7 mai 2025"
        },
        {
          title: "Galerie: Campagne de collecte mobile de sang",
          date: "2 mai 2025"
        }
      ]
    }
  };

  // Liens vers les pages de médias
  const mediaLinks = {
    video: "/photos-videos",
    audio: "/photos-videos",
    photos: "/photos-videos"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section avec 3 sections colorées - Responsive Mobile */}
      <main className="w-full">
        {/* Version Desktop */}
        <div className="hidden lg:flex h-[80vh]">
          {/* Section 1 - Rose */}
          <div 
            className="flex-[1.05] flex flex-col items-start justify-end relative pb-16 pl-12 overflow-hidden group cursor-pointer"
          >
            {/* Image d'arrière-plan avec effet zoom */}
            <Image
              src="/hero/1.jpg"
              alt="Hero image 1"
              fill
              className="object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Dégradé par dessus l'image */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #E5004C 0%, rgba(229, 0, 76, 0) 80%)`
              }}
            ></div>
            {/* Textes */}
            <div className="bg-white px-4 py-2 mb-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#E5004C] text-left">
                Un pays, un cap,
              </h2>
            </div>
            <div className="bg-white px-4 py-2 mb-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#E5004C] text-left">
                une santé pour tous
              </h2>
            </div>
            <div className="bg-white px-4 py-2 z-20 relative">
              <p className="text-xl font-bold text-[#E5004C] text-left">
                Engagement du Président Félix Antoine Tshisekedi Tshilombo
              </p>
            </div>
          </div>

          {/* Ligne blanche de séparation */}
          <div className="w-3 bg-white z-20"></div>

          {/* Section 2 - Jaune */}
          <div 
            className="flex-1 flex flex-col items-start justify-end relative pb-16 pl-12 overflow-hidden group cursor-pointer"
          >
            {/* Image d'arrière-plan avec effet zoom */}
            <Image
              src="/hero/2.jpg"
              alt="Hero image 2"
              fill
              className="object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Dégradé par dessus l'image */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #f9b233 0%, rgba(249, 178, 51, 0) 80%)`
              }}
            ></div>
            {/* Textes */}
            <div className="bg-white px-4 py-2 mb-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#f9b233] text-left">
                Pourquoi
              </h2>
            </div>
            <div className="bg-white px-4 py-2 mb-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#f9b233] text-left">
                un Fonds de Promotion
              </h2>
            </div>
            <div className="bg-white px-4 py-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#f9b233] text-left">
                de la Santé ?
              </h2>
            </div>
            <div className="bg-white px-4 py-2 mt-2 z-20 relative">
              <p className="text-xl font-bold text-[#f9b233] text-left">
                Bras financier du MSPHPS et maçon de la CSU
              </p>
            </div>
          </div>

          {/* Ligne blanche de séparation */}
          <div className="w-3 bg-white z-20"></div>

          {/* Section 3 - Vert */}
          <div 
            className="flex-1 flex flex-col items-start justify-end relative pb-16 pl-12 overflow-hidden group cursor-pointer"
          >
            {/* Image d'arrière-plan avec effet zoom */}
            <Image
              src="/hero/3.jpg"
              alt="Hero image 3"
              fill
              className="object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Dégradé par dessus l'image */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #00a19a 0%, rgba(0, 161, 154, 0) 80%)`
              }}
            ></div>
            {/* Textes */}
            <div className="bg-white px-4 py-2 mb-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#00a19a] text-left">
                Nos leviers,
              </h2>
            </div>
            <div className="bg-white px-4 py-2 z-20 relative">
              <h2 className="text-6xl font-bold text-[#00a19a] text-left">
                vos soins
            </h2>
            </div>
            <div className="bg-white px-4 py-2 mt-2 z-20 relative max-w-md">
              <p className="text-lg font-bold text-[#00a19a] text-left">
                Financement, infrastructures, médicaments, gouvernance, innovation et qualité des soins
              </p>
            </div>
          </div>
        </div>

        {/* Version Mobile */}
        <div className="lg:hidden">
          {/* Section 1 - Rose Mobile */}
          <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
            <Image
              src="/hero/1.jpg"
              alt="Hero image 1"
              fill
              className="object-cover z-0"
            />
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #E5004C 0%, rgba(229, 0, 76, 0) 80%)`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <div className="bg-white px-3 py-2 mb-2 rounded">
                <h2 className="text-lg sm:text-2xl font-bold text-[#E5004C]">
                  Un pays, un cap, une santé pour tous
                </h2>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <p className="text-xs sm:text-sm font-bold text-[#E5004C]">
                  Engagement du Président Félix Antoine Tshisekedi Tshilombo
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Jaune Mobile */}
          <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
            <Image
              src="/hero/2.jpg"
              alt="Hero image 2"
              fill
              className="object-cover z-0"
            />
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #f9b233 0%, rgba(249, 178, 51, 0) 80%)`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <div className="bg-white px-3 py-2 mb-2 rounded">
                <h2 className="text-lg sm:text-2xl font-bold text-[#f9b233]">
                  Pourquoi un Fonds de Promotion de la Santé ?
                </h2>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <p className="text-xs sm:text-sm font-bold text-[#f9b233]">
                  Bras financier du MSPHPS et maçon de la CSU
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Vert Mobile */}
          <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
            <Image
              src="/hero/3.jpg"
              alt="Hero image 3"
              fill
              className="object-cover z-0"
            />
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to top, #00a19a 0%, rgba(0, 161, 154, 0) 80%)`
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
              <div className="bg-white px-3 py-2 mb-2 rounded">
                <h2 className="text-lg sm:text-2xl font-bold text-[#00a19a]">
                  Nos leviers, vos soins
                </h2>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <p className="text-xs sm:text-sm font-bold text-[#00a19a]">
                  Financement, infrastructures, médicaments, gouvernance, innovation et qualité
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section avec 3 colonnes - Responsive */}
        <div className="hidden lg:flex w-full">
          {/* Section 1 - Cadre légal */}
          <div className="flex-1 relative h-[300px] flex">
            {/* Barre verticale avec image et texte */}
            <div className="w-16 h-full relative flex items-center justify-center z-10 overflow-hidden">
              {/* Image dans la barre verticale */}
              <Image
                src="/hero/1.jpg"
                alt="Cadre légal background"
                fill
                className="object-cover"
              />
              {/* Overlay jaune sur l'image */}
              <div className="absolute inset-0 bg-[#F9B233] opacity-70"></div>
              {/* Texte vertical */}
              <span className="text-white font-bold text-lg transform -rotate-90 whitespace-nowrap relative z-10">Cadre légal</span>
              {/* Barre blanche en haut */}
              <div className="absolute left-0 right-0 top-0 h-2 bg-white"></div>
            </div>
            
            {/* Contenu avec fond jaune uni */}
            <div className="flex-1 flex flex-col justify-center px-16 bg-[#F9B233] relative">
              <div className="z-10 relative">
                <h3 className="text-[#003B7C] text-xl font-medium mb-2">Cadre légal</h3>
                <h2 className="text-white text-5xl font-bold mb-6">Bases légales</h2>
                <p className="text-white font-bold mb-8 max-w-xl">
                  Créé par la Loi n°08/009 du 07 juillet 2008, modifiée par la Loi n°18/035 
                  du 13 décembre 2018. Organisé par le Décret n°22/15 du 09 avril 2022. 
                  Direction nominée par l'Ordonnance n°22/139 du 29 août 2022.
                </p>
                <div className="flex justify-end">
                  <button className="bg-white text-[#F9B233] font-bold px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - 6 Missions principales */}
          <div className="flex-1 relative h-[300px] flex">
            {/* Barre verticale avec image et texte */}
            <div className="w-16 h-full relative flex items-center justify-center z-10 overflow-hidden">
              {/* Image dans la barre verticale */}
              <Image
                src="/hero/2.jpg"
                alt="6 missions background"
                fill
                className="object-cover"
              />
              {/* Overlay rouge sur l'image */}
              <div className="absolute inset-0 bg-[#FF4343] opacity-70"></div>
              {/* Texte vertical */}
              <span className="text-white font-bold text-lg transform -rotate-90 whitespace-nowrap relative z-10">6 Missions</span>
              {/* Barre blanche en haut */}
              <div className="absolute left-0 right-0 top-0 h-2 bg-white"></div>
            </div>
            
            {/* Contenu avec fond rouge uni */}
            <div className="flex-1 flex flex-col justify-center px-16 bg-[#FF4343] relative">
              <div className="z-10 relative">
                <h3 className="text-[#F9B233] text-xl font-medium mb-2">6 Missions principales</h3>
                <h2 className="text-white text-5xl font-bold mb-6">Nos missions</h2>
                <p className="text-white font-bold mb-8 max-w-xl">
                  Infrastructures sanitaires • Médicaments & produits pharmaceutiques • 
                  Gouvernance du secteur • Financements innovants • Subventionnement ESS • 
                  Collecte et gestion du sang de qualité
                </p>
                <div className="flex justify-end">
                  <button className="bg-white text-[#FF4343] font-bold px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 3 - Vision CSU */}
          <div className="flex-1 relative h-[300px] flex">
            {/* Barre verticale avec image et texte */}
            <div className="w-16 h-full relative flex items-center justify-center z-10 overflow-hidden">
              {/* Image dans la barre verticale */}
              <Image
                src="/hero/3.jpg"
                alt="CSU vision background"
                fill
                className="object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Dégradé par dessus l'image */}
              <div 
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to top, #003B7C 0%, rgba(0, 59, 124, 0) 80%)`
                }}
              ></div>
              {/* Texte vertical */}
              <span className="text-white font-bold text-lg transform -rotate-90 whitespace-nowrap relative z-10">Vision CSU</span>
              {/* Barre blanche en haut */}
              <div className="absolute left-0 right-0 top-0 h-2 bg-white"></div>
            </div>
            
            {/* Contenu avec fond bleu uni */}
            <div className="flex-1 flex flex-col justify-center px-16 bg-[#003B7C] relative">
              <div className="z-10 relative">
                <h3 className="text-[#FF4343] text-xl font-medium mb-2">Vision CSU</h3>
                <h2 className="text-white text-5xl font-bold mb-6">Notre vision</h2>
                <p className="text-white font-bold mb-8 max-w-xl">
                  Réaliser la Couverture Santé Universelle : "chacun ce qu'il peut, 
                  chacun ce dont il a besoin". Réduire la charge des ménages de 43,1% 
                  actuellement à 24% d'ici 2034.
                </p>
                <div className="flex justify-end">
                  <button className="bg-white text-[#003B7C] font-bold px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version mobile des 3 colonnes */}
        <div className="lg:hidden space-y-0">
          {/* Section 1 Mobile - Cadre légal */}
          <div className="bg-[#F9B233] p-4 sm:p-6">
            <div className="border-l-4 border-white pl-4">
              <h3 className="text-[#003B7C] text-sm font-medium mb-1">Cadre légal</h3>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">Bases légales</h2>
              <p className="text-white text-sm sm:text-base font-medium mb-4 leading-relaxed">
                Créé par la Loi n°08/009 du 07 juillet 2008, modifiée par la Loi n°18/035 
                du 13 décembre 2018. Organisé par le Décret n°22/15 du 09 avril 2022.
              </p>
              <div className="text-right">
                <button className="bg-white text-[#F9B233] font-bold px-4 py-2 rounded text-sm">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 Mobile - 6 Missions */}
          <div className="bg-[#FF4343] p-4 sm:p-6">
            <div className="border-l-4 border-white pl-4">
              <h3 className="text-[#F9B233] text-sm font-medium mb-1">6 Missions principales</h3>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">Nos missions</h2>
              <p className="text-white text-sm sm:text-base font-medium mb-4 leading-relaxed">
                Infrastructures sanitaires • Médicaments & produits pharmaceutiques • 
                Gouvernance du secteur • Financements innovants • Subventionnement ESS • 
                Collecte et gestion du sang de qualité
              </p>
              <div className="text-right">
                <button className="bg-white text-[#FF4343] font-bold px-4 py-2 rounded text-sm">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          {/* Section 3 Mobile - Vision CSU */}
          <div className="bg-[#003B7C] p-4 sm:p-6">
            <div className="border-l-4 border-white pl-4">
              <h3 className="text-[#FF4343] text-sm font-medium mb-1">Vision CSU</h3>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">Notre vision</h2>
              <p className="text-white text-sm sm:text-base font-medium mb-4 leading-relaxed">
                Réaliser la Couverture Santé Universelle : "chacun ce qu'il peut, 
                chacun ce dont il a besoin". Réduire la charge des ménages de 43,1% 
                actuellement à 24% d'ici 2034.
              </p>
              <div className="text-right">
                <button className="bg-white text-[#003B7C] font-bold px-4 py-2 rounded text-sm">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Activités - Structure à deux niveaux - Responsive */}
        <div className="bg-gray-100 py-8 lg:py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-6 lg:py-8 border-t-[3px] border-[#00b7ff]">
            
            {/* En-tête responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-2 border-b border-gray-200 mb-6">
              {/* Colonne 1 - Activités et Voir plus */}
              <div className="lg:col-span-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl lg:text-2xl font-bold text-[#035fa9]">Activités</h2>
                  <Link href={tabLinks[activeTab]} className="text-[#00b7ff] font-medium hover:underline transition-colors text-sm lg:text-base">Voir plus</Link>
                </div>
              </div>
              
              {/* Colonne 2 - Navigation par onglets */}
              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6" role="tablist" aria-label="Catégories d'activités">
                  <button
                    onClick={() => setActiveTab('actualites')}
                    className={`font-medium pb-1 transition-colors text-sm lg:text-base ${
                      activeTab === 'actualites' 
                        ? 'text-[#e5004c] border-b-2 border-[#e5004c]' 
                        : 'text-[#035fa9] hover:text-[#e5004c] hover:border-b-2 hover:border-[#e5004c]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'actualites'}
                    aria-controls="panel-actualites"
                  >
                    Actualités
                  </button>
                  <button
                    onClick={() => setActiveTab('evenements')}
                    className={`font-medium pb-1 transition-colors text-sm lg:text-base ${
                      activeTab === 'evenements' 
                        ? 'text-[#e5004c] border-b-2 border-[#e5004c]' 
                        : 'text-[#035fa9] hover:text-[#e5004c] hover:border-b-2 hover:border-[#e5004c]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'evenements'}
                    aria-controls="panel-evenements"
                  >
                    Événements
                  </button>
                  <button
                    onClick={() => setActiveTab('a-venir')}
                    className={`font-medium pb-1 transition-colors text-sm lg:text-base ${
                      activeTab === 'a-venir' 
                        ? 'text-[#e5004c] border-b-2 border-[#e5004c]' 
                        : 'text-[#035fa9] hover:text-[#e5004c] hover:border-b-2 hover:border-[#e5004c]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'a-venir'}
                    aria-controls="panel-a-venir"
                  >
                    À venir
                  </button>
                  <button
                    onClick={() => setActiveTab('annonces')}
                    className={`font-medium pb-1 transition-colors text-sm lg:text-base ${
                      activeTab === 'annonces' 
                        ? 'text-[#e5004c] border-b-2 border-[#e5004c]' 
                        : 'text-[#035fa9] hover:text-[#e5004c] hover:border-b-2 hover:border-[#e5004c]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'annonces'}
                    aria-controls="panel-annonces"
                  >
                    Annonces
                  </button>
                </div>
              </div>
              
              {/* Colonne 3 - Domaines d'activités */}
              <div className="lg:col-span-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#035fa9]">Domaines d'activités</h3>
              </div>
            </div>

            {/* Contenu responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 lg:mt-8">
              {/* Colonnes 1 et 2 - Content du panel actif */}
              <div 
                className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8"
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
              >
                {/* Colonne 1 - Article principal */}
                <div className="col-span-1">
                  <Link href={tabLinks[activeTab]} className="block">
                    <div className="bg-[#e6f1f8] p-3 lg:p-4 hover:shadow-lg transition-all duration-300 rounded">
                      <div className="h-48 sm:h-56 lg:h-64 bg-gray-300 mb-4 lg:mb-6 relative overflow-hidden">
                        {/* Image placeholder grise comme dans l'image */}
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#035fa9] mb-2 hover:text-[#024a87] transition-colors duration-300 line-clamp-3">
                        {tabContents[activeTab].main.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-xs sm:text-sm text-gray-600">{tabContents[activeTab].main.date}</p>
                        <span className="text-[#00b7ff] text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">En savoir plus →</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Colonne 2 - Liste d'articles */}
                <div className="col-span-1 space-y-3 lg:space-y-4">
                  {tabContents[activeTab].list.map((item, index) => (
                    <Link href={tabLinks[activeTab]} key={index} className="flex gap-3 lg:gap-4 group">
                      <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0 relative overflow-hidden">
                        {/* Image placeholder grise */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base text-[#035fa9] font-bold mb-1 group-hover:text-[#024a87] transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600">{item.date}</p>
                      </div>
                    </Link>
                  ))}

                  <div className="pt-3 lg:pt-4 text-center">
                    <Link 
                      href={tabLinks[activeTab]} 
                      className="inline-block text-[#035fa9] font-medium border border-[#035fa9] rounded px-3 lg:px-4 py-1 text-sm lg:text-base hover:bg-[#035fa9] hover:text-white transition-colors duration-300"
                    >
                      Voir tous les {activeTab === 'actualites' ? 'articles' : 
                                    activeTab === 'evenements' ? 'événements' : 
                                    activeTab === 'a-venir' ? 'projets' : 'annonces'}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Colonne 3 - Domaines d'activités */}
              <div className="lg:col-span-4">
                <div className="divide-y divide-gray-200">
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Infrastructures sanitaires</strong> : Financement des projets d'infrastructure, équipements médicaux, production locale des médicaments
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Médicaments & pharmacie</strong> : Promotion de la production locale, médecine traditionnelle, approvisionnement en essentiels
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Gouvernance en santé</strong> : Planification, normalisation, recherche, développement des ressources humaines
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Financements innovants</strong> : Collecte et gestion des ressources via redevances minières, taxes de promotion
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Subventionnement ESS</strong> : Réduction des coûts et amélioration de la qualité des soins
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Collecte de sang</strong> : Formation des prestataires, sécurité transfusionnelle, campagnes mobiles
                    </p>
                  </div>
                  <div className="py-2 lg:py-3">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Transport médical</strong> : Système d'ambulances, évacuations sanitaires, urgences médicales
                    </p>
                  </div>
                  <div className="pt-3 lg:pt-4">
                    <a href="#" className="text-[#00b7ff] font-medium inline-block text-sm lg:text-base">
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Rouge - "Pourquoi un FPS?" avec infos économiques */}
        <div className="bg-[#E1090E] py-8 lg:py-16">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Texte côté gauche */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-4">
                <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded">
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#E1090E]">Pourquoi un Fonds</h2>
                </div>
                <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded">
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#E1090E]">de Promotion</h2>
                </div>
                <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded">
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#E1090E]">de la Santé ?</h2>
                </div>
                <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded max-w-lg">
                  <p className="text-sm sm:text-base lg:text-lg text-[#E1090E]">
                    <strong>43,1% des dépenses de santé</strong> en RDC proviennent directement 
                    des ménages. Le FPS mobilise des financements innovants pour réduire 
                    cette charge et garantir l'accès aux soins de qualité pour tous.
                  </p>
                </div>
              </div>
              
              {/* Graphique côté droit */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-[#E1090E] mb-4">Sources de financement de la santé en RDC</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Ménages : 43,1%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-teal-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Reste du Monde : 37,9%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">État : 15,5%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">Entreprises : 3,2%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">ONG : 0,2%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    Source: Commission Financement de la Santé, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Média */}
        <div className="bg-gray-100 py-8 lg:py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-6 lg:py-8 border-t-[3px] border-[#00b7ff]">
            
            {/* En-tête responsive */}
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-[#035fa9] border-b pb-2 border-gray-200 mb-4">Média</h2>
              
              {/* Navigation des onglets */}
              <div className="flex flex-wrap gap-4 lg:gap-8 border-b border-gray-200" role="tablist" aria-label="Types de médias">
                <button 
                  onClick={() => setActiveMediaTab('video')}
                  className={`pb-2 font-medium transition-colors ${
                    activeMediaTab === 'video' 
                      ? 'border-b-2 border-[#E1090E] text-[#E1090E]' 
                      : 'text-[#035fa9] hover:text-[#E1090E]'
                  }`}
                  role="tab"
                  aria-selected={activeMediaTab === 'video'}
                  aria-controls="panel-video"
                >
                  Vidéo
                </button>
                <button 
                  onClick={() => setActiveMediaTab('audio')}
                  className={`pb-2 font-medium transition-colors ${
                    activeMediaTab === 'audio' 
                      ? 'border-b-2 border-[#E1090E] text-[#E1090E]' 
                      : 'text-[#035fa9] hover:text-[#E1090E]'
                  }`}
                  role="tab"
                  aria-selected={activeMediaTab === 'audio'}
                  aria-controls="panel-audio"
                >
                  Audio
                </button>
                <button 
                  onClick={() => setActiveMediaTab('photos')}
                  className={`pb-2 font-medium transition-colors ${
                    activeMediaTab === 'photos' 
                      ? 'border-b-2 border-[#E1090E] text-[#E1090E]' 
                      : 'text-[#035fa9] hover:text-[#E1090E]'
                  }`}
                  role="tab"
                  aria-selected={activeMediaTab === 'photos'}
                  aria-controls="panel-photos"
                >
                  Photos
                </button>
                
                <div className="ml-auto hidden sm:block">
                  <Link href={mediaLinks[activeMediaTab]} className="text-[#00b7ff] font-medium hover:underline transition-colors">Voir plus</Link>
                </div>
              </div>
            </div>
              
            {/* Contenu principal responsive */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
              role="tabpanel"
              id={`panel-${activeMediaTab}`}
              aria-labelledby={`tab-${activeMediaTab}`}
            >
              {/* Article principal */}
              <div className="lg:col-span-1">
                <Link href={mediaLinks[activeMediaTab]} className="block group">
                  <div className="bg-[#e6f1f8] p-4 pb-6 hover:shadow-lg transition-all duration-300 rounded">
                    <div className="h-48 lg:h-64 bg-gray-300 mb-4 relative overflow-hidden rounded">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#035fa9] mb-2 group-hover:text-[#024a87] transition-colors duration-300 line-clamp-3">
                      {mediaContents[activeMediaTab].main.title}
                    </h3>
                    <p className="text-sm text-gray-600">{mediaContents[activeMediaTab].main.date}</p>
                  </div>
                </Link>
              </div>
              
              {/* Liste des articles */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                {mediaContents[activeMediaTab].list.slice(0, 4).map((item, index) => (
                  <Link href={mediaLinks[activeMediaTab]} key={index} className="flex gap-4 group">
                    <div className="w-24 sm:w-32 h-16 sm:h-20 bg-gray-300 flex-shrink-0 relative overflow-hidden rounded">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base text-[#035fa9] font-bold mb-1 group-hover:text-[#024a87] transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Lien "Voir plus" pour mobile */}
            <div className="mt-6 text-center sm:hidden">
              <Link href={mediaLinks[activeMediaTab]} className="inline-block text-[#00b7ff] font-medium hover:underline transition-colors">Voir plus</Link>
            </div>
          </div>
        </div>

        {/* Section Vidéo avec fond bleu ciel */}
        <div className="bg-[#00B7FF] py-16">
          <div className="max-w-[1800px] mx-auto px-8">
            <div className="flex flex-wrap">
              {/* Vidéo/Image côté gauche */}
              <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                <div className="bg-gray-300 h-80 md:h-96"></div>
              </div>
              
              {/* Texte côté droit */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
                <div className="bg-white px-8 py-4">
                  <h2 className="text-5xl font-bold text-[#00B7FF]">CSU et croissance</h2>
                </div>
                <div className="bg-white px-8 py-4">
                  <h2 className="text-5xl font-bold text-[#00B7FF]">économique</h2>
                </div>
                <div className="bg-white px-8 py-4 max-w-lg">
                  <p className="text-lg text-[#00B7FF]">
                    Création d'emplois via travaux publics, croissance de l'industrie 
                    pharmaceutique, utilisation accrue des services financiers, 
                    mutualisation des ressources et meilleure productivité nationale 
                    grâce à une population en meilleure santé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Témoignages */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8 border-t-[3px] border-[#00b7ff]">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-8">
              <h2 className="text-4xl font-bold text-[#035fa9]">Témoignages</h2>
              <a href="#" className="text-[#00b7ff] font-medium">Voir plus</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Témoignage 1 */}
              <div className="bg-[#e6f1f8] rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Image placeholder - à remplacer par une vraie image */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#035fa9] to-transparent">
                    <p className="text-white font-bold">Dr. Mukwege Jean</p>
                    <p className="text-white text-sm">Hôpital Général de Référence, Kinshasa</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Grâce aux équipements fournis par le FPS, nous avons pu réduire de 30% le temps d'attente pour les soins d'urgence et améliorer considérablement la qualité des services."
                  </p>
                  <div className="flex justify-end">
                    <div className="w-8 h-1 bg-[#e5004c]"></div>
                  </div>
                </div>
              </div>
              
              {/* Témoignage 2 */}
              <div className="bg-[#fff5e5] rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Image placeholder - à remplacer par une vraie image */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#f9b233] to-transparent">
                    <p className="text-white font-bold">Infirmière Kabedi Marie</p>
                    <p className="text-white text-sm">Centre de Santé, Lubumbashi</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "L'approvisionnement régulier en médicaments nous permet maintenant de traiter tous nos patients sans rupture de stock. C'est une révolution pour notre centre de santé."
                  </p>
                  <div className="flex justify-end">
                    <div className="w-8 h-1 bg-[#f9b233]"></div>
                  </div>
                </div>
              </div>
              
              {/* Témoignage 3 */}
              <div className="bg-[#e5f7f7] rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Image placeholder - à remplacer par une vraie image */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#00a19a] to-transparent">
                    <p className="text-white font-bold">Patient Mutombo Jacques</p>
                    <p className="text-white text-sm">Bénéficiaire, Goma</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "J'ai pu bénéficier du service d'ambulance du FPS lors d'une urgence. Sans cette initiative, je n'aurais jamais pu me rendre à l'hôpital à temps."
                  </p>
                  <div className="flex justify-end">
                    <div className="w-8 h-1 bg-[#00a19a]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Carte d'Impact */}
        <div className="bg-white py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-8">
              <h2 className="text-4xl font-bold text-[#035fa9]">Notre Impact en RDC</h2>
              <a href="#" className="text-[#00b7ff] font-medium">Explorer</a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Statistiques à gauche */}
              <div className="space-y-6">
                <div className="bg-[#e6f1f8] p-6 rounded-lg border-l-[6px] border-[#00b7ff]">
                  <p className="text-gray-600 text-sm">Établissements de santé soutenus</p>
                  <p className="text-[#035fa9] text-4xl font-bold">333</p>
                  <p className="text-gray-600 text-sm mt-2">ESS à travers tout le pays</p>
                </div>
                
                <div className="bg-[#fff5e5] p-6 rounded-lg border-l-[6px] border-[#f9b233]">
                  <p className="text-gray-600 text-sm">Montant investi en médicaments</p>
                  <p className="text-[#f9b233] text-4xl font-bold">7,2M USD</p>
                  <p className="text-gray-600 text-sm mt-2">dont 3,14M déjà engagés</p>
                </div>
                
                <div className="bg-[#f9e5ea] p-6 rounded-lg border-l-[6px] border-[#e5004c]">
                  <p className="text-gray-600 text-sm">Patients transportés en ambulance</p>
                  <p className="text-[#e5004c] text-4xl font-bold">1 491</p>
                  <p className="text-gray-600 text-sm mt-2">via 16 ambulances à Kinshasa</p>
                </div>
                
                <div className="bg-[#e5f7f7] p-6 rounded-lg border-l-[6px] border-[#00a19a]">
                  <p className="text-gray-600 text-sm">Formation et collecte de sang</p>
                  <p className="text-[#00a19a] text-4xl font-bold">139</p>
                  <p className="text-gray-600 text-sm mt-2">cadres formés • 155 campagnes</p>
                </div>

                <div className="bg-[#f3e5f5] p-6 rounded-lg border-l-[6px] border-[#8A9BAD]">
                  <p className="text-gray-600 text-sm">Équipements médicaux</p>
                  <p className="text-[#8A9BAD] text-4xl font-bold">1,8M USD</p>
                  <p className="text-gray-600 text-sm mt-2">d'équipements livrés</p>
                </div>
              </div>
              
              {/* Carte au centre et à droite */}
              <div className="lg:col-span-2 bg-gray-100 rounded-lg overflow-hidden relative h-[500px]">
                {/* Image placeholder pour la carte de la RDC */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 font-medium">Carte de la RDC avec les 333 points d'intervention</p>
                </div>
                
                {/* Légende en bas */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-[#00b7ff] mr-2"></div>
                      <span className="text-sm">Médicaments (333 ESS)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-[#e5004c] mr-2"></div>
                      <span className="text-sm">Équipements (1,8M USD)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-[#f9b233] mr-2"></div>
                      <span className="text-sm">Ambulances (16 à Kinshasa)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-[#00a19a] mr-2"></div>
                      <span className="text-sm">Collecte sang (139 formés)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section "Savez-vous que..." - Enrichie avec vraies stats */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8 border-t-[3px] border-[#00b7ff]">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-8">
              <h2 className="text-4xl font-bold text-[#035fa9]">Savez-vous que...</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {/* Stat 1 */}
              <div className="bg-[#035fa9] rounded-lg p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                <p className="text-white text-5xl font-bold mb-4 relative z-10">43,1%</p>
                <p className="text-white font-medium relative z-10">des dépenses de santé en RDC viennent directement des ménages</p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-[#e5004c] rounded-lg p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-900 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                <p className="text-white text-5xl font-bold mb-4 relative z-10">13 316</p>
                <p className="text-white font-medium relative z-10">centres de santé en RDC, mais seulement 2 500 sont conformes aux normes</p>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-[#f9b233] rounded-lg p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-800 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                <p className="text-white text-5xl font-bold mb-4 relative z-10">24%</p>
                <p className="text-white font-medium relative z-10">sera le taux de participation des ménages d'ici 2034 selon la perspective FPS</p>
              </div>
              
              {/* Stat 4 */}
              <div className="bg-[#00a19a] rounded-lg p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-teal-900 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                <p className="text-white text-5xl font-bold mb-4 relative z-10">168 850</p>
                <p className="text-white font-medium relative z-10">USD versés au CNTS pour la première phase de collecte de sang</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supprimer les sections répétées "CSU et croissance" et "Témoignages" ci-dessous */}
        {/* Section Perspectives FPS 2034 */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8 border-t-[3px] border-[#00b7ff]">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-8">
              <h2 className="text-4xl font-bold text-[#035fa9]">Perspectives FPS 2034</h2>
              <a href="#" className="text-[#00b7ff] font-medium">Voir le plan détaillé</a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              {/* Graphique perspective côté gauche */}
              <div>
                <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Répartition du financement de la santé en 2034</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  {/* Simulation d'un graphique en camembert */}
                  <div className="w-64 h-64 mx-auto bg-gray-300 rounded-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-600">Vision 2034</p>
                        <p className="text-sm text-gray-500">Financement CSU</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-600 mr-3"></div>
                        <span className="text-sm">État</span>
                      </div>
                      <span className="text-sm font-bold">34%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-orange-500 mr-3"></div>
                        <span className="text-sm">Partenaires PTF</span>
                      </div>
                      <span className="text-sm font-bold">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 mr-3"></div>
                        <span className="text-sm">Ménages</span>
                      </div>
                      <span className="text-sm font-bold">24%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-500 mr-3"></div>
                        <span className="text-sm">CSU & TPS</span>
                      </div>
                      <span className="text-sm font-bold">12%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Objectifs stratégiques côté droit */}
              <div>
                <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Objectifs stratégiques</h3>
                <div className="space-y-6">
                  <div className="bg-[#e6f1f8] p-6 rounded-lg border-l-[6px] border-[#035fa9]">
                    <h4 className="font-bold text-[#035fa9] mb-2">Élever la participation de l'État à 34%</h4>
                    <p className="text-gray-700 text-sm">
                      Augmentation significative de l'engagement public dans le financement de la santé
                    </p>
                  </div>
                  
                  <div className="bg-[#fff5e5] p-6 rounded-lg border-l-[6px] border-[#f9b233]">
                    <h4 className="font-bold text-[#f9b233] mb-2">Réduire la charge des ménages à 24%</h4>
                    <p className="text-gray-700 text-sm">
                      Contre 43,1% actuellement grâce au système d'assurance CSU et aux paiements directs aux ESS
                    </p>
                  </div>
                  
                  <div className="bg-[#f9e5ea] p-6 rounded-lg border-l-[6px] border-[#e5004c]">
                    <h4 className="font-bold text-[#e5004c] mb-2">Mobiliser 42% via les partenaires</h4>
                    <p className="text-gray-700 text-sm">
                      Renforcement de la coopération internationale et appui des PTF
                    </p>
                  </div>
                  
                  <div className="bg-[#e5f7f7] p-6 rounded-lg border-l-[6px] border-[#00a19a]">
                    <h4 className="font-bold text-[#00a19a] mb-2">Déployer la CSU et TPS à 12%</h4>
                    <p className="text-gray-700 text-sm">
                      Activation complète des mécanismes de financement innovants et des formations sanitaires
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelle section avec 3 colonnes - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-200">
          {/* Colonne 1 - Directeur général */}
          <div className="order-1">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-4 lg:mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-[#035fa9]">Directeur général</h2>
              <a href="#" className="text-[#00b7ff] font-medium text-sm lg:text-base">Voir plus</a>
            </div>
            
            {/* Grande image avec texte */}
            <div className="relative mb-6 lg:mb-0">
              <div className="h-48 sm:h-64 lg:h-80 bg-gray-300 mb-4 lg:mb-6"></div>
              <div className="relative border-l-[4px] lg:border-l-[6px] border-[#e5004c]">
                <div className="bg-[#035fa9] p-3 lg:p-4 text-white">
                  <p className="font-bold text-sm lg:text-base">
                    MIKA NYEMBO Marius - "Renforcer le Système de Santé National à travers l'amélioration de l'offre des soins"
                  </p>
                </div>
              </div>
              
              {/* Liste d'articles - Mobile */}
              <div className="mt-4 lg:mt-8 space-y-3 lg:space-y-4">
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Présentation du bilan à mi-parcours du FPS
                    </h4>
                    <p className="text-xs text-gray-600">29 août 2024</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Vision 2034 : Vers une CSU effective en RDC
                    </h4>
                    <p className="text-xs text-gray-600">15 juin 2024</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Contact : dg@fps.cd
                    </h4>
                    <p className="text-xs text-gray-600">Direction Générale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Colonne 2 - Réalisations concrètes */}
          <div className="order-2">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-4 lg:mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-[#035fa9]">Réalisations</h2>
              <a href="#" className="text-[#00b7ff] font-medium text-sm lg:text-base">Voir plus</a>
            </div>
            
            {/* Grande image avec texte */}
            <div className="relative mb-6 lg:mb-0">
              <div className="h-48 sm:h-64 lg:h-80 bg-gray-300 mb-4 lg:mb-6"></div>
              <div className="relative border-l-[4px] lg:border-l-[6px] border-[#00B7FF]">
                <div className="bg-[#F9D008] p-3 lg:p-4 text-white">
                  <p className="font-bold text-sm lg:text-base">
                    333 ESS • 7,2M USD • 1 491 transferts • 16 ambulances • 139 cadres formés
                  </p>
                </div>
              </div>
              
              {/* Liste d'articles */}
              <div className="mt-4 lg:mt-8 space-y-3 lg:space-y-4">
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Financement estimé pour ambulances : 4,476,900 USD
                    </h4>
                    <p className="text-xs text-gray-600">En cours</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Banque de sang : 168 850 USD versés au CNTS
                    </h4>
                    <p className="text-xs text-gray-600">Réalisé</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-20 sm:w-24 h-14 sm:h-16 bg-gray-300 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#035fa9] font-bold mb-1 text-sm lg:text-base line-clamp-2">
                      Six contrats signés pour médicaments de 333 ESS
                    </h4>
                    <p className="text-xs text-gray-600">En livraison</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Colonne 3 - Newsletter et fonds */}
          <div className="order-3 space-y-6 lg:space-y-8">
            {/* Newsletter Section */}
            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-[#035fa9] border-b pb-2 border-gray-200 mb-4 lg:mb-6">Newsletter</h2>
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035fa9] focus:border-transparent text-sm lg:text-base"
                    placeholder="Votre adresse email"
                  />
                </div>
                <button className="bg-[#e5004c] hover:bg-[#c0003a] text-white font-bold py-2 lg:py-3 px-6 lg:px-8 rounded transition-colors w-full lg:w-auto text-sm lg:text-base">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Fonds FPS Section */}
            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-[#035fa9] border-b pb-2 border-gray-200 mb-4 lg:mb-6">Fonds FPS</h2>
              <div className="space-y-2 lg:space-y-3">
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Déposer une requête Fonds d'aide</span>
                </div>
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Fonds pour la promotion de la santé, de la recherche et de la prévention</span>
                </div>
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Déposer une requête Fonds pour la promotion de la santé</span>
                </div>
              </div>
            </div>

            {/* Prix FPS Section */}
            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-[#035fa9] border-b pb-2 border-gray-200 mb-4 lg:mb-6">Prix FPS</h2>
              <div className="space-y-2 lg:space-y-3">
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Les lauréats 2022</span>
                </div>
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Formulaire d'inscription en ligne</span>
                </div>
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Formulaire d'inscription (PDF)</span>
                </div>
                <div className="bg-[#8A9BAD] text-white p-3 lg:p-4 rounded border-l-4 border-[#e5004c]">
                  <span className="font-medium text-sm lg:text-base">Flyer Prix FPS (PDF)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#003B7C] text-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Colonne 1 - Logo et présentation */}
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center mb-6">
                <Image 
                  src="/fps-logo.jpg" 
                  alt="Logo FPS" 
                  width={80} 
                  height={80}
                  className="object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.02em]">
                    Fonds de promotion<br />
                    pour la Santé
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-6">
                Le Fonds de Promotion de la Santé est un établissement public à caractère administratif et technique, 
                bras financier et maçon de la Couverture Santé Universelle en République Démocratique du Congo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#00b7ff] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#00b7ff] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#00b7ff] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#00b7ff] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#00b7ff] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonne 2 - Liens */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-[#00b7ff] pb-2">Liens utiles</h3>
              <ul className="space-y-3">
                <li><Link href="/notre-raison-detre" className="text-gray-300 hover:text-white transition-colors">Notre raison d'être</Link></li>
                <li><Link href="/agir-pour-la-sante" className="text-gray-300 hover:text-white transition-colors">Agir pour la santé</Link></li>
                <li><Link href="/impact-realisations" className="text-gray-300 hover:text-white transition-colors">Impact & Réalisations</Link></li>
                <li><Link href="/financement-sante" className="text-gray-300 hover:text-white transition-colors">Financement de la santé</Link></li>
                <li><Link href="/recherche-rapports" className="text-gray-300 hover:text-white transition-colors">Recherche & Rapports</Link></li>
                <li><Link href="/actualites" className="text-gray-300 hover:text-white transition-colors">Actualités</Link></li>
              </ul>
            </div>

            {/* Colonne 3 - Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-[#00b7ff] pb-2">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00b7ff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">
                    Immeuble FPI, 4ème niveau<br />
                    Boulevard du 30 juin<br />
                    Kinshasa-Gombe, RDC
                  </span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00b7ff] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@fps.cd" className="text-gray-300 hover:text-white transition-colors">info@fps.cd</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00b7ff] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+243 81 555 0000</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00b7ff] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Lun - Ven: 8h00 - 16h00</span>
                </li>
              </ul>
            </div>

            {/* Colonne 4 - Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-[#00b7ff] pb-2">Newsletter</h3>
              <p className="text-gray-300 mb-4">Abonnez-vous à notre newsletter pour recevoir les dernières actualités du FPS</p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full px-4 py-2 bg-[#035fa9] border border-[#00b7ff] rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                  />
                </div>
                <button className="bg-[#e5004c] hover:bg-[#c0003a] text-white font-bold py-3 px-8 rounded transition-colors w-full">
                  S'abonner
                </button>
              </form>
            </div>
          </div>

          {/* Barre du bas avec copyright */}
          <div className="mt-12 pt-8 border-t border-[#035fa9]">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Fonds de Promotion de la Santé. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Mentions légales</Link>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Politique de confidentialité</Link>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Plan du site</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
