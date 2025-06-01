import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export default function NosPartenaires() {
  const breadcrumbItems = [
    { label: 'Nos Partenaires' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00a19a] to-[#26d0ce] py-20">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Nos Partenaires</h1>
            <p className="text-2xl max-w-4xl mx-auto">
              Un écosystème solide de collaborations stratégiques pour transformer le système de santé congolais
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble des partenariats */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Écosystème de Partenariats</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le succès du FPS repose sur un réseau diversifié de partenaires engagés dans la 
              transformation durable du système de santé en République Démocratique du Congo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-[#e6f1f8] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#035fa9] mb-4">45+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Partenaires Actifs</div>
              <div className="text-sm text-gray-600">Organisations collaboratrices</div>
            </div>
            
            <div className="text-center bg-[#e5f7f7] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#00a19a] mb-4">24,1M</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">USD Cofinancement</div>
              <div className="text-sm text-gray-600">Contributions partenaires</div>
            </div>
            
            <div className="text-center bg-[#fff5e5] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#f9b233] mb-4">18</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Pays Partenaires</div>
              <div className="text-sm text-gray-600">Coopération internationale</div>
            </div>
            
            <div className="text-center bg-[#f9e5ea] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#e5004c] mb-4">87</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Projets Conjoints</div>
              <div className="text-sm text-gray-600">Initiatives collaboratives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenaires Internationaux */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenaires Internationaux</h2>
            <p className="text-xl text-gray-700">
              Organisations mondiales qui soutiennent la mission du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OMS */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#1f8fb4]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#1f8fb4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">OMS</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Organisation Mondiale de la Santé</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e8f4f8] p-3 rounded">
                    <h5 className="font-bold text-[#1f8fb4] text-sm mb-1">Contribution</h5>
                    <p className="text-xs text-gray-700">3,2M USD • Expertise technique</p>
                  </div>
                  
                  <div className="bg-[#e8f4f8] p-3 rounded">
                    <h5 className="font-bold text-[#1f8fb4] text-sm mb-1">Domaines</h5>
                    <p className="text-xs text-gray-700">Politique sanitaire, normes qualité</p>
                  </div>
                  
                  <div className="bg-[#e8f4f8] p-3 rounded">
                    <h5 className="font-bold text-[#1f8fb4] text-sm mb-1">Durée</h5>
                    <p className="text-xs text-gray-700">Partenariat depuis 2018</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banque Mondiale */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0076a8]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#0076a8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BM</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Banque Mondiale</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e6f3f8] p-3 rounded">
                    <h5 className="font-bold text-[#0076a8] text-sm mb-1">Financement</h5>
                    <p className="text-xs text-gray-700">6,7M USD • Prêts concessionnels</p>
                  </div>
                  
                  <div className="bg-[#e6f3f8] p-3 rounded">
                    <h5 className="font-bold text-[#0076a8] text-sm mb-1">Focus</h5>
                    <p className="text-xs text-gray-700">Infrastructure, systèmes de santé</p>
                  </div>
                  
                  <div className="bg-[#e6f3f8] p-3 rounded">
                    <h5 className="font-bold text-[#0076a8] text-sm mb-1">Projet</h5>
                    <p className="text-xs text-gray-700">PDSS - Projet Développement Système Santé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UNICEF */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#00aeef]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#00aeef] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UNICEF</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">UNICEF RDC</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e5f7ff] p-3 rounded">
                    <h5 className="font-bold text-[#00aeef] text-sm mb-1">Appui</h5>
                    <p className="text-xs text-gray-700">2,8M USD • Santé mère-enfant</p>
                  </div>
                  
                  <div className="bg-[#e5f7ff] p-3 rounded">
                    <h5 className="font-bold text-[#00aeef] text-sm mb-1">Spécialité</h5>
                    <p className="text-xs text-gray-700">Vaccination, nutrition infantile</p>
                  </div>
                  
                  <div className="bg-[#e5f7ff] p-3 rounded">
                    <h5 className="font-bold text-[#00aeef] text-sm mb-1">Impact</h5>
                    <p className="text-xs text-gray-700">450 000 enfants vaccinés</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Union Africaine */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#006633]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#006633] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UA</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Union Africaine</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e8f5ec] p-3 rounded">
                    <h5 className="font-bold text-[#006633] text-sm mb-1">Collaboration</h5>
                    <p className="text-xs text-gray-700">Partage d'expertise, modèle FPS</p>
                  </div>
                  
                  <div className="bg-[#e8f5ec] p-3 rounded">
                    <h5 className="font-bold text-[#006633] text-sm mb-1">Initiative</h5>
                    <p className="text-xs text-gray-700">Agenda 2063, santé pour tous</p>
                  </div>
                  
                  <div className="bg-[#e8f5ec] p-3 rounded">
                    <h5 className="font-bold text-[#006633] text-sm mb-1">Statut</h5>
                    <p className="text-xs text-gray-700">Centre d'excellence reconnu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Union Européenne */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#003399]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#003399] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UE</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Union Européenne</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e6ecff] p-3 rounded">
                    <h5 className="font-bold text-[#003399] text-sm mb-1">Fonds</h5>
                    <p className="text-xs text-gray-700">4,5M EUR • Coopération au développement</p>
                  </div>
                  
                  <div className="bg-[#e6ecff] p-3 rounded">
                    <h5 className="font-bold text-[#003399] text-sm mb-1">Programme</h5>
                    <p className="text-xs text-gray-700">Renforcement capacités, gouvernance</p>
                  </div>
                  
                  <div className="bg-[#e6ecff] p-3 rounded">
                    <h5 className="font-bold text-[#003399] text-sm mb-1">Période</h5>
                    <p className="text-xs text-gray-700">2020-2025 • Programme pluriannuel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* USAID */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#1f4e79]">
              <div className="p-6">
                <div className="w-20 h-20 bg-[#1f4e79] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">USAID</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">USAID RDC</h3>
                
                <div className="space-y-3">
                  <div className="bg-[#e8eef5] p-3 rounded">
                    <h5 className="font-bold text-[#1f4e79] text-sm mb-1">Investissement</h5>
                    <p className="text-xs text-gray-700">5,1M USD • Santé communautaire</p>
                  </div>
                  
                  <div className="bg-[#e8eef5] p-3 rounded">
                    <h5 className="font-bold text-[#1f4e79] text-sm mb-1">Zones</h5>
                    <p className="text-xs text-gray-700">Provinces orientales, zones rurales</p>
                  </div>
                  
                  <div className="bg-[#e8eef5] p-3 rounded">
                    <h5 className="font-bold text-[#1f4e79] text-sm mb-1">Innovation</h5>
                    <p className="text-xs text-gray-700">Technologies santé, e-health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partenaires Nationaux */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenaires Nationaux</h2>
            <p className="text-xl text-gray-700">
              Institutions et organisations congolaises partenaires du FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#035fa9] to-[#0066cc] text-white p-6 rounded-lg text-center">
              <h4 className="font-bold mb-2">Ministère de la Santé</h4>
              <p className="text-sm opacity-90">Tutelle administrative</p>
              <div className="mt-3 text-xs">Coordination politique</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f9b233] to-[#ffc107] text-white p-6 rounded-lg text-center">
              <h4 className="font-bold mb-2">Ministère des Finances</h4>
              <p className="text-sm opacity-90">Gestion fiscale</p>
              <div className="mt-3 text-xs">Recouvrement taxes</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#00a19a] to-[#26d0ce] text-white p-6 rounded-lg text-center">
              <h4 className="font-bold mb-2">CNTS</h4>
              <p className="text-sm opacity-90">Centre National Transfusion</p>
              <div className="mt-3 text-xs">Collecte de sang</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#6f42c1] to-[#8969d3] text-white p-6 rounded-lg text-center">
              <h4 className="font-bold mb-2">Universités</h4>
              <p className="text-sm opacity-90">UNIKIN, UNILU, UNIKIS</p>
              <div className="mt-3 text-xs">Recherche et formation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secteur Privé */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Partenaires du Secteur Privé</h2>
            <p className="text-xl text-gray-700">
              Entreprises et organisations privées qui contribuent au financement de la santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#035fa9] mb-6">Secteur Minier</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#e6f1f8] rounded">
                  <span className="font-semibold">Glencore Katanga</span>
                  <span className="text-[#035fa9] font-bold">2,3M USD/an</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#e6f1f8] rounded">
                  <span className="font-semibold">Kamoa Copper</span>
                  <span className="text-[#035fa9] font-bold">1,8M USD/an</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#e6f1f8] rounded">
                  <span className="font-semibold">Barrick Gold</span>
                  <span className="text-[#035fa9] font-bold">1,2M USD/an</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  Redevances minières consacrées au financement de la santé
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#f9b233] mb-6">Télécommunications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#fff5e5] rounded">
                  <span className="font-semibold">Vodacom RDC</span>
                  <span className="text-[#f9b233] font-bold">850K USD/an</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#fff5e5] rounded">
                  <span className="font-semibold">Airtel RDC</span>
                  <span className="text-[#f9b233] font-bold">720K USD/an</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#fff5e5] rounded">
                  <span className="font-semibold">Orange RDC</span>
                  <span className="text-[#f9b233] font-bold">630K USD/an</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  Taxes sur services de télécommunications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Société Civile */}
      <div className="bg-white py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Société Civile et ONG</h2>
            <p className="text-xl text-gray-700">
              Organisations de la société civile qui participent à la gouvernance et mise en œuvre
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="w-16 h-16 bg-[#e5004c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">SANRU</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">SANRU</h4>
              <p className="text-sm text-gray-600 mb-3">Santé Rurale RDC</p>
              <div className="text-xs text-gray-500">Zones rurales • 127 centres partenaires</div>
            </div>
            
            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="w-16 h-16 bg-[#00a19a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">CORDAID</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">CORDAID</h4>
              <p className="text-sm text-gray-600 mb-3">ONG Néerlandaise</p>
              <div className="text-xs text-gray-500">Santé communautaire • 89 projets</div>
            </div>
            
            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="w-16 h-16 bg-[#6f42c1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">ASRAMES</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ASRAMES</h4>
              <p className="text-sm text-gray-600 mb-3">Association Santé Mère-Enfant</p>
              <div className="text-xs text-gray-500">Maternités • 156 sages-femmes formées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages Partenaires */}
      <div className="bg-[#035fa9] py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">Témoignages de Nos Partenaires</h2>
            <p className="text-xl">
              Ce que disent nos partenaires de leur collaboration avec le FPS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Dr. Sarah JOHNSON</h4>
                  <p className="text-white/80 text-sm">Représentante OMS RDC</p>
                </div>
              </div>
              <blockquote className="text-white/90 italic">
                "Le FPS représente un modèle innovant de financement de la santé que l'OMS recommande 
                à d'autres pays africains. L'approche intégrée et les résultats tangibles démontrent 
                l'efficacité de cette stratégie."
              </blockquote>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Jean-Marie KABONGO</h4>
                  <p className="text-white/80 text-sm">Directeur Exécutif SANRU</p>
                </div>
              </div>
              <blockquote className="text-white/90 italic">
                "Notre partenariat avec le FPS a transformé notre capacité d'intervention dans les zones 
                rurales. L'appui technique et financier nous permet d'atteindre des populations 
                précédemment exclues du système de santé."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Devenir Partenaire */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035fa9] mb-6">Devenir Partenaire du FPS</h2>
            <p className="text-xl text-gray-700">
              Rejoignez notre mission pour une couverture sanitaire universelle en RDC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-[#035fa9] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#035fa9] mb-4">Partenariat Stratégique</h3>
              <p className="text-gray-700 mb-6">
                Collaboration à long terme sur des programmes structurants du système de santé
              </p>
              <Link href="/contact" className="bg-[#035fa9] text-white px-6 py-3 rounded font-semibold hover:bg-[#024a87] transition-colors">
                Nous contacter
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-[#f9b233] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-[#f9b233] mb-4">Cofinancement</h3>
              <p className="text-gray-700 mb-6">
                Participation au financement de projets spécifiques avec impact mesurable
              </p>
              <Link href="/contact" className="bg-[#f9b233] text-white px-6 py-3 rounded font-semibold hover:bg-[#e09a1f] transition-colors">
                Proposer un projet
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-[#00a19a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#00a19a] mb-4">Expertise Technique</h3>
              <p className="text-gray-700 mb-6">
                Apport d'expertise spécialisée et accompagnement technique des programmes
              </p>
              <Link href="/contact" className="bg-[#00a19a] text-white px-6 py-3 rounded font-semibold hover:bg-[#008a83] transition-colors">
                Offrir votre expertise
              </Link>
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