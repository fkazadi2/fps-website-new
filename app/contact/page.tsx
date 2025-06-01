'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous implémenteriez l'envoi réel du formulaire à un backend
    // Pour cette démo, nous simulons juste un succès
    setFormSubmitted(true);
    
    // Réinitialiser le formulaire après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Section Hero avec Titre et Breadcrumb */}
      <div className="bg-[#003B7C] text-white py-12">
        <div className="max-w-[1800px] mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <Breadcrumb 
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Contact', href: '/contact' },
            ]} 
          />
        </div>
      </div>

      {/* Contenu principal */}
      <main className="py-16">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Colonne de gauche: Formulaire de contact */}
            <div>
              <div className="bg-white p-8 shadow-md rounded-lg border-t-4 border-[#e5004c]">
                <h2 className="text-2xl font-bold text-[#003B7C] mb-6">Nous contacter</h2>
                <p className="text-gray-600 mb-8">
                  Vous avez des questions sur nos services ou vous souhaitez nous faire part de vos suggestions ? 
                  Utilisez ce formulaire pour nous contacter. Notre équipe vous répondra dans les meilleurs délais.
                </p>

                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p className="font-medium">Merci pour votre message !</p>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">Nom complet*</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                        placeholder="Votre nom et prénom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                        placeholder="exemple@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                      placeholder="+243 ..."
                    />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-gray-700 font-medium mb-2">Sujet*</label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Demande d'information">Demande d'information</option>
                      <option value="Partenariat">Partenariat</option>
                      <option value="Financements">Financements</option>
                      <option value="Urgences médicales">Urgences médicales</option>
                      <option value="Service ambulance">Service ambulance</option>
                      <option value="Collecte de sang">Collecte de sang</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b7ff]"
                      placeholder="Votre message ici..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mr-2 h-5 w-5 text-[#e5004c]"
                    />
                    <label htmlFor="privacy" className="text-gray-700">
                      J'accepte que mes données soient traitées conformément à la <Link href="#" className="text-[#00b7ff] hover:underline">politique de confidentialité</Link>*
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#e5004c] hover:bg-[#c0003a] text-white font-bold py-3 px-8 rounded transition-colors"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Colonne de droite: Coordonnées et carte */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-white p-8 shadow-md rounded-lg border-t-4 border-[#00b7ff]">
                <h2 className="text-2xl font-bold text-[#003B7C] mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#e6f1f8] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#00b7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Immeuble FPI, 4ème niveau<br />
                        Boulevard du 30 juin<br />
                        Kinshasa-Gombe, RDC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#e6f1f8] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#00b7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@fps.cd" className="text-[#00b7ff] hover:underline">info@fps.cd</a><br />
                        <a href="mailto:direction@fps.cd" className="text-[#00b7ff] hover:underline">direction@fps.cd</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#e6f1f8] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#00b7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        +243 81 555 0000<br />
                        +243 99 555 0000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#e6f1f8] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#00b7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 16h00<br />
                        Samedi - Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#e6f1f8] p-3 rounded-full text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#e6f1f8] p-3 rounded-full text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#e6f1f8] p-3 rounded-full text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-[#e6f1f8] p-3 rounded-full text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Carte de localisation (placeholder) */}
              <div className="bg-white p-8 shadow-md rounded-lg border-t-4 border-[#f9b233]">
                <h2 className="text-2xl font-bold text-[#003B7C] mb-6">Notre localisation</h2>
                <div className="h-[400px] bg-gray-200 rounded-lg relative overflow-hidden">
                  {/* Ici, vous intégreriez une vraie carte Google Maps ou OpenStreetMap */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-center p-4">
                      Carte interactive - FPS<br />
                      Immeuble FPI, Boulevard du 30 juin, Kinshasa-Gombe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#003B7C] mb-10 text-center">Questions fréquentes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-[#00b7ff]">
                <h3 className="text-xl font-bold text-[#003B7C] mb-3">Comment puis-je obtenir un financement du FPS ?</h3>
                <p className="text-gray-600">
                  Le FPS finance divers projets liés à la santé selon des critères spécifiques. 
                  Pour soumettre une demande, consultez notre section "Financements" ou contactez-nous directement 
                  par email à financements@fps.cd avec les détails de votre projet.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-[#e5004c]">
                <h3 className="text-xl font-bold text-[#003B7C] mb-3">Comment accéder au service d'ambulance ?</h3>
                <p className="text-gray-600">
                  Notre service d'ambulance est disponible 24/7 pour les urgences médicales. 
                  Appelez notre numéro d'urgence au +243 81 555 1111. Nos équipes sont formées pour 
                  intervenir rapidement et assurer un transport sécurisé vers les centres de santé.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-[#f9b233]">
                <h3 className="text-xl font-bold text-[#003B7C] mb-3">Comment organiser une collecte de sang ?</h3>
                <p className="text-gray-600">
                  Pour organiser une collecte de sang dans votre établissement ou communauté, 
                  contactez notre service de collecte au +243 99 555 2222 ou par email à sang@fps.cd. 
                  Nous vous aiderons à planifier et réaliser cette action vitale.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-[#00a19a]">
                <h3 className="text-xl font-bold text-[#003B7C] mb-3">Comment devenir partenaire du FPS ?</h3>
                <p className="text-gray-600">
                  Le FPS collabore avec diverses organisations pour améliorer l'accès aux soins de santé en RDC. 
                  Pour discuter d'un partenariat potentiel, envoyez-nous votre proposition détaillée 
                  à partenariats@fps.cd ou utilisez notre formulaire de contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 