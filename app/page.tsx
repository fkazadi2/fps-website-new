import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Contenu principal - en attente d'instructions */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bienvenue sur le site du Fonds de Promotion pour la Santé
            </h2>
            <p className="text-lg text-gray-600">
              En attente des instructions pour le contenu principal et le schéma narratif...
            </p>
          </div>
          
          {/* Zone de contenu étendue sur toute la largeur */}
          <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
              <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                <p className="text-gray-500 text-center">Zone de contenu 1<br/>Prêt pour vos instructions</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                <p className="text-gray-500 text-center">Zone de contenu 2<br/>Prêt pour vos instructions</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                <p className="text-gray-500 text-center">Zone de contenu 3<br/>Prêt pour vos instructions</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
