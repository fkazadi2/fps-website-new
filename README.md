# 🏥 Site Web FPS - Fonds de Promotion de la Santé

Site web officiel du **Fonds de Promotion de la Santé (FPS)** de la République Démocratique du Congo. Le FPS est le bras financier du Ministère de la Santé Publique, Hygiène et Prévention Sociale et le maçon de la Couverture Santé Universelle (CSU) en RDC.

## 🌍 Demo Live

🔗 **[Voir le site en ligne](https://fps-website-new.vercel.app/)**

## ✨ Fonctionnalités

### 📱 **Design Responsive**
- **Mobile First** : Optimisé pour smartphones (< 768px)
- **Tablette** : Layout adaptatif pour tablettes (768px - 1024px)
- **Desktop** : Interface complète pour écrans larges (> 1024px)

### 🗺️ **Carte Interactive Mapbox**
- Visualisation géographique des interventions FPS en RDC
- **333 points d'intervention** avec marqueurs colorés par type d'activité :
  - 🔵 **Médicaments** : Approvisionnement en médicaments essentiels
  - 🔴 **Équipements** : Équipements médicaux (1,8M USD)
  - 🟡 **Ambulances** : Service d'ambulance (16 à Kinshasa)
  - 🟢 **Collecte de sang** : Formation et collecte sanguine (139 formés)
- **Popups informatifs** avec détails par ville
- **Navigation interactive** avec zoom et panoramique

### 📊 **Graphiques Interactifs**
- **Graphique en camembert** (Chart.js) pour la répartition du financement 2034
- **Statistiques animées** avec effet hover
- **Données en temps réel** des réalisations FPS

### 🎨 **Charte Graphique FPS**
- **Couleurs officielles** :
  - 🔵 Bleu principal : `#035fa9`
  - 🔴 Rouge accent : `#e5004c` 
  - 🟡 Orange : `#f9b233`
  - 🟢 Vert : `#00a19a`
  - 🔷 Bleu clair : `#00b7ff`
- **Typographie optimisée** pour l'accessibilité
- **Contrastes élevés** pour une meilleure lisibilité

### 📖 **Sections Principales**
- **🏠 Accueil** : Hero sections colorées, statistiques d'impact
- **📰 Actualités & Événements** : Système d'onglets dynamiques
- **🎯 Notre Mission** : Vision CSU 2034
- **📈 Impact & Réalisations** : Carte interactive et chiffres clés
- **🔬 Domaines d'Activités** : 6 missions principales du FPS
- **📞 Contact** : Informations et newsletter

## 🛠️ Technologies Utilisées

### **Framework & Language**
- **Next.js 15.3.2** - Framework React avec App Router
- **TypeScript** - Type safety et meilleure DX
- **React 18** - Bibliothèque UI avec hooks modernes

### **Styling & UI**
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Transformations CSS
- **CSS Grid & Flexbox** - Layouts responsives

### **Cartes & Visualisations**
- **Mapbox GL JS** - Cartes interactives
- **react-map-gl** - Wrapper React pour Mapbox
- **Chart.js** - Graphiques interactifs
- **react-chartjs-2** - Intégration Chart.js pour React

### **Optimisations**
- **Next.js Image** - Optimisation automatique des images
- **Font optimization** - Chargement optimisé des polices
- **Static Generation** - Pages pré-générées pour la performance

## 🚀 Installation & Démarrage

### **Prérequis**
- Node.js 18+ 
- npm ou yarn
- Compte Mapbox (pour la clé API)

### **1. Cloner le projet**
```bash
git clone https://github.com/votre-username/fps-website-new.git
cd fps-website-new
```

### **2. Installer les dépendances**
```bash
npm install
# ou
yarn install
```

### **3. Configuration Mapbox**
Créer un fichier `.env.local` à la racine :
```bash
NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_mapbox_ici
```

**Obtenir un token Mapbox :**
1. Créer un compte sur [mapbox.com](https://mapbox.com)
2. Aller dans **Account > Access tokens**
3. Créer un nouveau token public
4. Copier le token dans `.env.local`

### **4. Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### **5. Build de production**
```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
fps-website-new/
├── app/                          # App Router Next.js
│   ├── page.tsx                 # Page d'accueil principale
│   ├── contact/                 # Page contact
│   ├── actualites/             # Pages actualités
│   └── [autres-pages]/         # Pages spécialisées
├── components/                  # Composants React réutilisables
│   ├── Header.tsx              # Navigation principale
│   ├── MapDRC.tsx              # Carte Mapbox RDC
│   └── PieChart2034.tsx        # Graphique financement 2034
├── public/                     # Assets statiques
│   ├── hero/                   # Images hero sections
│   └── fps-logo.jpg           # Logo officiel FPS
├── .env.local                  # Variables d'environnement
└── tailwind.config.js         # Configuration Tailwind
```

## 🎯 Points d'Intervention Mappés

La carte interactive affiche **10 villes principales** avec leurs interventions :

| Ville | Coordonnées | Type d'Intervention | Nombre |
|-------|------------|-------------------|--------|
| **Kinshasa** | [15.2, -4.4] | 🟡 Ambulances | 16 |
| **Lubumbashi** | [27.5, -11.7] | 🔵 Médicaments | 45 |
| **Mbuji-Mayi** | [23.6, -6.1] | 🔴 Équipements | 23 |
| **Kisangani** | [25.2, 0.5] | 🔵 Médicaments | 31 |
| **Bukavu** | [28.9, -2.5] | 🟢 Collecte sang | 12 |
| **Goma** | [29.2, -1.7] | 🔴 Équipements | 18 |
| **Tshikapa** | [20.8, -6.4] | 🔵 Médicaments | 27 |
| **Kolwezi** | [25.5, -10.7] | 🟡 Ambulances | 8 |
| **Likasi** | [26.7, -10.9] | 🔴 Équipements | 15 |
| **Matadi** | [13.5, -5.8] | 🔵 Médicaments | 19 |

## 📈 Données Clés Affichées

### **Impact Actuel (2024)**
- **333 ESS** soutenus à travers le pays
- **7,2M USD** investis en médicaments essentiels
- **1 491 patients** transportés en ambulance
- **139 cadres** formés en collecte de sang
- **1,8M USD** d'équipements médicaux livrés

### **Vision 2034 - Financement CSU**
- **État** : 34% (vs 15,5% actuellement)
- **Partenaires PTF** : 42% (vs 37,9% actuellement)
- **Ménages** : 24% (vs 43,1% actuellement) ⚡
- **CSU & TPS** : 12% (nouveau mécanisme)

## 🚀 Déploiement

### **Vercel (Recommandé)**
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### **Variables d'environnement Vercel**
Dans le dashboard Vercel, ajouter :
- `NEXT_PUBLIC_MAPBOX_TOKEN` = votre_token_mapbox

### **Autres Plateformes**
Le projet est compatible avec :
- **Netlify**
- **AWS Amplify** 
- **DigitalOcean App Platform**
- **Tout hébergeur supportant Node.js**

## 🤝 Contribution

### **Rapporter un Bug**
1. Créer une [issue](https://github.com/votre-username/fps-website-new/issues)
2. Décrire le problème avec screenshots
3. Préciser navigateur/device

### **Proposer une Fonctionnalité**
1. Vérifier qu'elle n'existe pas déjà
2. Créer une issue avec le label `enhancement`
3. Décrire l'use case et la valeur ajoutée

### **Développement**
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact & Support

**Fonds de Promotion de la Santé (FPS)**
- 🌐 **Site** : [fps.cd](https://fps.cd)
- 📧 **Email** : info@fps.cd
- 📱 **Téléphone** : +243 81 555 0000
- 📍 **Adresse** : Immeuble FPI, 4ème niveau, Boulevard du 30 juin, Kinshasa-Gombe, RDC

---

**🏥 "Un pays, un cap, une santé pour tous"** - *Engagement du Président Félix Antoine Tshisekedi Tshilombo*
