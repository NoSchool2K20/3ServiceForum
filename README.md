# Projet Forum Front



**Le project est fonctionnel**

Ce projet s'inscrit dans la démarche du projet NoSchool qui a pour objectif de créer une plateforme de formation qualifiante en informatique à distance.
Cette partie traite de la partie Front du service Forum. 

Le wiki est dispobile à l'adresse suivante : 
https://github.com/NoSchool2K20/3ServiceForum/wiki/Service-Forum---FRONT

L'application répond aux user-story listées ci-dessous:

 
## User Stories

* <u>Story 1 :</u> En tant qu’ « utilisateur », je peux poster un message sur un channel.

* <u>Story 2 :</u> En tant qu’ « utilisateur », je consulter un channel.

* <u>Story 3 :</u> En tant qu’ « utilisateur », je vois les nouveaux messages s’afficher sans avoir à rafraîchir l’affichage.

* <u>Story 4 :</u> En tant qu’ « utilisateur », je peux supprimer mes propres messages.

* <u>Story 5 :</u> En tant qu’ « utilisateur », je peux « approuver » un message d’un autre utilisateur, à l’image d’un like FB, Twitter ou Reddit.

* <u>Story 6 :</u> En tant qu’ « utilisateur », je peux annuler un de mes « approuver » sur un message d’un autre utilisateur, à l’image d’un like FB, Twitter ou Reddit. A noter qu’il s’agit de supprimer un de mes « approuver » et non de « désapprouver ».

## Intégration du projet en forme de composant

`<Forum titleCours={channel} user={token}/>`


## Exécution du projet en localhost

Ce projet, bien qu'il soit intégré comme composant, peut aussi être testé en localhost:

Rendez-vous dans le dossier FRONT, puis ouvrez un terminal. 

Installer les dépendances du projet dans un dossier node_modules local. 

`npm install`
 
Exécuter la construction du projet à partir du package.json.

`npm run build `

Exécuter le lanceur du projet défini dans le package.json sur le port 8000

`npm run dev`

Pour lancer les tests Cypress, ouvrez un second terminal et saisissez :

`npm run cypress:open`

## WIKI

Vous trouverez un wiki ici: https://github.com/NoSchool2K20/3ServiceForum/wiki/Service-Forum---FRONT



