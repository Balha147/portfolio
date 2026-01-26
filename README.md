# 🚀 Portfolio Personnel | Hedi Basly

Bienvenue sur le dépôt de mon portfolio, une application web de pointe construite avec **Angular 20** et **Tailwind CSS v4**. Ce projet met en avant mes compétences en développement Front-End et Full-Stack avec une architecture moderne et performante.

<div align="center">
  <img src="https://img.shields.io/badge/Angular_20-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

---

## 🌐 Démo Live
Accédez au site en ligne : [https://balha147.github.io/portfolio/fr-FR](https://balha147.github.io/portfolio/fr-FR)

---

## ✨ Caractéristiques Techniques

* **Internationalisation (i18n)** : Support natif pour le Français (`fr-FR`) et l'Anglais (`en-US`).
* **Architecture Angular 20** : Utilisation intensive des **Signals** pour une gestion d'état ultra-réactive et du nouveau **Control Flow**.
* **Tailwind CSS v4** : Stylisation moderne profitant des dernières optimisations de performance du moteur CSS.
* **Mode Sombre/Clair** : Thème dynamique géré via un service dédié et persistance locale.
* **SEO & Accessibilité** : Structure sémantique respectée et balisage ARIA pour une meilleure accessibilité.

---

## 🛠️ Installation et Développement

### 1. Clonage et dépendances
```bash
git clone [https://github.com/Balha147/portfolio.git](https://github.com/Balha147/portfolio.git)
cd portfolio
npm install
```

## 🌍 Test Local de l'Internationalisation (i18n):
Comme le projet utilise le système i18n natif, le switch de langue nécessite de tester le build de production. Ta configuration utilise un base-href spécifique (/portfolio/).
Utilise la commande configurée dans package.json
"build": "ng build --base-href /portfolio/ --localize"
```bash
npm run build
```
# Lancer le serveur (nécessite npm install -g http-server)
http-server dist/portfolio/browser -p 8080 -o
