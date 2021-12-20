# Learn vanilla JS 🚀

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

Ce repository est un template d'application NodeJS avec l'auto reload implémenté (utilisation de Nodemon).
L'objectif de ce repository est d'être fork par l'ensemble des personnes qui vont exécuter l'exercice sur leurs espaces Github.

## Pré-requis

- NodeJS
- NPM

## Installation

Dans un premier temps faire un fork de ce projet, ensuite clonez votre projet, une fois ceci fait installez les dépendances du projet.

```bash
$ npm i
```

## Lancer le serveur

```bash
$ npm run start
```

Le serveur tourne par défaut sur le port [3000](http://localhost:3000)

# Objectif de l'exercice

L'objectif est d'apprendre les bases du développement web avec HTML / CSS / JS. Dans cet exercice, il vous sera demandé d'utiliser les trois langages.

Une fois le serveur lancé, vous n'avez plus qu'à modifier les fichiers suivants :

- `views/index.html`
- `public/js/index.js`
- `public/styles/index.css`

Vous n'avez pas besoin de modifier d'autres fichiers, sauf dans le cas où vous en créer d'autres, à vous de voir ce qui est le mieux ! 💁‍♂️

<p style="color: red; font-weight: bold">⚠️ IL EST STRICTEMENT INTERDIT D'UTILISER UN FRAMEWORK CSS EXTERNE AU PROJET (EX: Bootstrap, JQuery, etc...) ⚠️</p>

## 1 - Préparation de la page HTML

### 1.1 - Header

Dans le header il vous est demandé d'afficher une `navbar` horizontal avec un logo à gauche (Le clique doit redirectionner vers cette page), une navigation avec comme titre **Accueil** et **À propos** centrer par rapport à l'écran.

### 1.2 - Body

Un tableau de 5 colonnes vide :

| Avatar | Nom | Prénom | Email | Actions |
| :----: | :-: | ------ | ----- | ------- |

### 1.3 - Footer

Un footer avec un lien au centre qui au clique ouvre un nouvel onglet vers votre page Github.

## 2 - Utilisation du JS

### 2.1 - Ajout de données dans le tableau

Dans le fichier `public/js/index.js` vous retrouverez une méthode `getRandomUsers()` qui est asynchrone. Elle vous retourne une liste de 100 fake user.

L'objectif ici vous l'aurez compris, c'est de remplir le tableau avec les données récolté par la méthode `getRandomUsers()`.

Pour le moment la colonne **Actions** est vide pour chaque ligne.

### 2.2 - Supprimer un utilisateur

Dans la colonne **Actions**, ajouter pour chaque ligne du tableau un bouton `Supprimer`.

Ce bouton permet la suppression d'un utilisateur dynamiquement.

### 2.3 - Rechargement des données

Au dessus du tableau (à l'endroit où vous le souhaitez), ajoutez un bouton avec une icone comme celle-ci : 🔄 .
L'évènement clique sur ce bouton permet de rafraichir le tableau dans son intégralité.
