# 🌟 Portfolio Kevin Maldonado - Développeur Full Stack

<div align="center">

![Portfolio Banner](https://via.placeholder.com/800x200/667eea/ffffff?text=Kevin+Maldonado+-+Full+Stack+Developer)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-kevinmaldonado.dev-blue?style=for-the-badge)](https://kevinmaldonado.dev)
[![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Nx](https://img.shields.io/badge/Nx-21.3-143055?style=for-the-badge&logo=nx)](https://nx.dev/)

</div>

## 📖 À propos du projet

Ce portfolio moderne et responsive présente mon parcours, mes compétences et mes réalisations en tant que **développeur full stack**. Conçu avec les dernières technologies web, il démontre ma maîtrise des frameworks modernes et mon attention aux détails.

### 🎯 **Objectifs du portfolio**
- Présenter mon expertise technique de manière interactive
- Démontrer mes compétences en développement frontend et backend
- Offrir une expérience utilisateur exceptionnelle
- Faciliter la prise de contact avec les recruteurs et clients

## 🚀 **Démonstration en ligne**

**🌐 [kevinmaldonado.dev](https://kevinmaldonado.dev)**

*Explorez mon portfolio complet avec des animations fluides, un design responsive et une architecture moderne.*

## 🛠️ **Stack Technique**

### **Frontend**
- **Angular 20** - Framework principal avec signals et standalone components
- **TypeScript 5.6** - Développement typé et robuste
- **Tailwind CSS 3.4** - Design system moderne et responsive
- **SCSS** - Styles avancés et animations personnalisées
- **RxJS** - Programmation réactive et gestion d'état

### **Architecture & Outillage**
- **Nx 21.3** - Monorepo et outils de développement
- **ESLint** - Qualité du code et standards

### **Fonctionnalités avancées**
- **EmailJS** - Système de contact fonctionnel
- **reCAPTCHA v2** - Protection anti-spam
- **Animations CSS** - Transitions fluides et micro-interactions
- **Dark/Light Mode** - Thème adaptatif
- **PWA Ready** - Optimisé pour les performances

### **Déploiement & DevOps**
- **Netlify** - Hébergement et déploiement continu
- **DNS Custom** - Domaine personnalisé kevinmaldonado.dev
- **SSL/HTTPS** - Sécurité et performance optimisées

## 📱 **Fonctionnalités**

### 🎨 **Design & UX/UI**
- ✅ **Design responsive** - Optimisé mobile-first
- ✅ **Mode sombre/clair** - Préférence utilisateur sauvegardée
- ✅ **Animations fluides** - Micro-interactions et transitions
- ✅ **Glassmorphism** - Effets visuels modernes
- ✅ **Typographie soignée** - Hiérarchie visuelle claire

### 🚀 **Performance & SEO**
- ✅ **Lazy Loading** - Chargement optimisé des composants
- ✅ **Meta Tags** - SEO et réseaux sociaux optimisés
- ✅ **Lighthouse Score 95+** - Performance web excellente
- ✅ **Bundle optimisé** - Code splitting et tree-shaking

### 📧 **Contact Fonctionnel**
- ✅ **EmailJS intégré** - Envoi direct vers kevin.maldonado0909@gmail.com
- ✅ **reCAPTCHA protection** - Anti-spam et sécurité
- ✅ **Validation en temps réel** - UX optimisée
- ✅ **Templates d'email** - Communication professionnelle

### 📊 **Sections Portfolio**
- ✅ **Hero Section** - Présentation et CTA
- ✅ **À propos** - Parcours et vision
- ✅ **Expériences** - Timeline interactive
- ✅ **Compétences** - Technologies maîtrisées
- ✅ **Projets** - Réalisations avec détails
- ✅ **Formation** - Parcours académique
- ✅ **Contact** - Formulaire fonctionnel

## 🏗️ **Architecture du projet**

```
portfolio-angular/
├── apps/
│   └── portfolio-angular/          # Application principale
│       ├── src/
│       │   ├── app/
│       │   │   ├── features/        # Sections du portfolio
│       │   │   │   ├── hero/        # Section d'accueil
│       │   │   │   ├── about/       # À propos
│       │   │   │   ├── experience/  # Expériences
│       │   │   │   ├── skills/      # Compétences
│       │   │   │   ├── projects/    # Projets
│       │   │   │   └── contact/     # Contact
│       │   │   └── shared/          # Composants partagés
│       │   │       ├── components/  # Navigation, Footer
│       │   │       └── services/    # EmailJS, reCAPTCHA
│       │   ├── environments/        # Configuration
│       │   └── styles/              # Styles globaux
│       └── public/                  # Assets statiques
├── docs/                           # Documentation
└── deployment/                     # Configuration Netlify
```

## 🚦 **Guide de développement**

### **Prérequis**
- Node.js 18+ et npm 9+
- Angular CLI 20+
- Git pour le versioning

### **Installation**

```bash
# Cloner le repository
git clone https://github.com/KevinMaldonado-KM/portfolio-angular.git
cd portfolio-angular

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run start
```

### **Scripts disponibles**

```bash
# Développement
npm run start          # Serveur de dev (http://localhost:4200)
npm run build          # Build de production
npm run test           # Tests unitaires avec Jest
npm run lint           # Analyse statique du code

# Nx commandes
npx nx serve portfolio-angular    # Serveur de développement
npx nx build portfolio-angular    # Build de production
npx nx test portfolio-angular     # Tests unitaires
npx nx graph                      # Visualisation des dépendances
```

## 🌐 **Déploiement**

### **Production (Netlify)**
```bash
# Build de production
npm run build

# Déploiement automatique via Netlify
# Connected à main branch pour CD/CI
```

### **Configuration Netlify**
- **Build command**: `npm run build`
- **Publish directory**: `dist/apps/portfolio-angular/browser`
- **Domain**: kevinmaldonado.dev
- **SSL**: Automatique avec Let's Encrypt

## 👨‍💻 **À propos de l'auteur**

### **Kevin Maldonado**
*Développeur Full Stack passionné par les technologies modernes*

- 🌍 **Localisation**: France
- 💼 **Statut**: Ouvert aux opportunités
- 📧 **Contact**: kevin.maldonado0909@gmail.com
- 🌐 **Portfolio**: [kevinmaldonado.dev](https://kevinmaldonado.dev)
- 💼 **LinkedIn**: [linkedin.com/in/kevin-maldonado](https://linkedin.com/in/kevin-maldonado-km)
- 🐙 **GitHub**: [github.com/KevinMaldonado-KM](https://github.com/KevinMaldonado-KM)

### **Expertise technique**
- **Frontend**: Angular, React, Vue.js, TypeScript, JavaScript
- **Backend**: Node.js, Express, NestJS, Python, PHP
- **Base de données**: MySQL, PostgreSQL, MongoDB
- **DevOps**: Docker, AWS, Netlify, Vercel
- **Mobile**: Ionic, React Native

## 📄 **Licence**

Ce projet est sous licence MIT. Voir [LICENSE](./LICENSE) pour plus de détails.

---

<div align="center">

**💼 Intéressé par mon profil ?**

[![Contact](https://img.shields.io/badge/📧_Me_Contacter-kevin.maldonado0909@gmail.com-blue?style=for-the-badge)](mailto:kevin.maldonado0909@gmail.com)
[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-kevinmaldonado.dev-purple?style=for-the-badge)](https://kevinmaldonado.dev)

*Développeur Full Stack*

</div>
