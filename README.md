# 🚀 Portfolio | Hedi Basly

Portfolio personnel développé avec **Angular 22** et **Tailwind CSS v4**. Il présente mon parcours, mes compétences et mes projets en développement Front-End et Full-Stack, avec une architecture moderne : Signals, nouveau Control Flow, rendu côté serveur (SSR) et pré-rendu statique.

<div align="center">

[![Angular](https://img.shields.io/badge/Angular_22-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/Déployé_sur-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://balha147.github.io/portfolio)

</div>

---

## 📑 Sommaire

- [Démo live](#-démo-live)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Prise en main](#-prise-en-main)
- [Scripts disponibles](#-scripts-disponibles)
- [Tester le build de production en local](#-tester-le-build-de-production-en-local)
- [Déploiement](#-déploiement)
- [Structure du projet](#-structure-du-projet)
- [Contact](#-contact)

---

## 🌐 Démo live

👉 **[balha147.github.io/portfolio](https://balha147.github.io/portfolio)**

---

## ✨ Fonctionnalités

- **Signals Angular** : gestion d'état réactive et fine, sans surcharge inutile.
- **Nouveau Control Flow** : syntaxe `@if`, `@for` et `@switch` à la place des directives structurelles.
- **SSR et pré-rendu** : pages générées à la compilation pour un premier affichage rapide et un meilleur référencement.
- **Tailwind CSS v4** : stylisation utilitaire avec le moteur CSS le plus récent.
- **Mode sombre / clair** : thème dynamique géré par un service dédié, avec préférence conservée localement.
- **SEO et accessibilité** : structure HTML sémantique et attributs ARIA.

---

## 🧰 Stack technique

| Domaine | Technologies |
| --- | --- |
| Framework | Angular 22 (Signals, Control Flow, SSR) |
| Langage | TypeScript |
| Styles | Tailwind CSS v4 (via PostCSS), SCSS |
| Serveur SSR | `@angular/ssr`, Express 5 |
| Déploiement | GitHub Pages (`gh-pages`) |

---

## 🛠️ Prise en main

### Prérequis

- [Node.js](https://nodejs.org) (version LTS récente, compatible avec Angular 22)
- npm (fourni avec Node.js)

### Installation

```bash
git clone https://github.com/Balha147/portfolio.git
cd portfolio
npm install
```

### Lancer le serveur de développement

```bash
npm start
```

L'application est disponible sur [http://localhost:4200](http://localhost:4200) et se recharge automatiquement à chaque modification.

---

## 📜 Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm start` | Lance le serveur de développement (`ng serve`). |
| `npm run build` | Compile pour la production avec `--base-href /portfolio/`. |
| `npm run watch` | Compile en continu en mode développement. |
| `npm run deploy` | Compile puis publie sur la branche `gh-pages`. |

---

## 🔍 Tester le build de production en local

Le script `build` fixe `--base-href /portfolio/` pour GitHub Pages. Servi tel quel à la racine d'un serveur local, le site chargerait ses fichiers depuis un mauvais chemin. Pour prévisualiser le build en local, compile avec une base à la racine :

```bash
npx ng build --base-href /
```

---

## 🚢 Déploiement

Le site est publié sur **GitHub Pages** depuis la branche `gh-pages` :

```bash
npm run deploy
```

Ce script :

1. compile le projet avec `--base-href /portfolio/` ;
2. ajoute un fichier `.nojekyll` pour que GitHub Pages serve les fichiers tels quels ;
3. publie le dossier `dist/portfolio/browser` sur la branche `gh-pages`.

---

## 📁 Structure du projet

```text
portfolio/
├── public/              # Ressources statiques (favicon, images…)
├── src/
│   ├── app/             # Composants, services et routes de l'application
│   ├── main.ts          # Point d'entrée navigateur
│   ├── main.server.ts   # Point d'entrée serveur (SSR)
│   ├── server.ts        # Serveur Express
│   └── styles.scss      # Styles globaux et import de Tailwind
├── angular.json         # Configuration Angular CLI
├── .postcssrc.json      # Configuration PostCSS (Tailwind v4)
└── package.json
```

---

## 📬 Contact

- GitHub : [@Balha147](https://github.com/Balha147)
- LinkedIn : [linkedin](https://www.linkedin.com/in/mohamed-hedi-basly/)
- Email : [EMAIL_ADDRESS](baslymohamedhedi@gmail.com)

---

<p align="center">Fait avec ❤️ et Angular par Hedi Basly</p>