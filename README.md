# SushiFast
## Information
Nom/Prénom: SOW Awa

Date projet: 15/12/2021

Technologie: NodeJS, MongoDB, Angular

lien github: https://github.com/awa-dev/SushiFast
## Le but du Projet
Ce projet à pour but de développer une appliaction pour une prise de commande au niveau d'un point de vente. Il aura pour résultat essentiel le calcul d'une commande de plateaux de Sushi.
La commande peut être prise via téléphone ou sur place.

## Objectifs
J'utiliserai une application Back-end dans le cadre d'une API qui présentera les produits de la vente


# Première partie:

Tout d’abord j’ai créé mon application que j'ai nommé "ShushiFast".
Puis j’ai installé le framwork bulma et dans angular.json j'ai mis le style.
```php
 "styles": [



              "node_modules/bulma/css/bulma.min.css",
              "src/styles.css"
            ],
```

Dans mon application j’ai inséré un back-end JSon Server qui me servira comme une source de donné pour mon application afin d’interrogé le server, j'ai utiliser cette commande pour le faire: npm install –g json-server

# Diagrammes:
Ensuite j'ai fait une analyse du projet en faisant un diagrammes des cas d'utilisation et les requêtes illustrées sur l’API concernant l’ensemble des plateaux.

## Diagramme des cas d'utilisation
Ce diagramme me permet de savoir les rêquetes que l'opérateur fait. 
L’opérateur a la possibilité de consulter les plateaux et en même temps de voir la composition d'un plateaux, il a aussi la possibilité de créer un panier et il peut modifier, visualiser un panier et aussi voir les commandes enregistré dans le LocalStorage.

![DIA](./Diagramme.PNG)

## Les requêtes illustrées sur l’API (client/serveur)
Ce diagramme permet à l'opératuer d'émettre un requête vers le serveur, et dès que le serveur reçoit la demande il le repond et l'envoi en retour une réponse

![TIER](./tierParticipant.PNG)

# RGPD
Puis dans le footer, j'ai définit un lien hypertexte pour le RGPD afin d'identifier le responsable du site et l'endroit ou mon site est hébergé. Dès qu'on clique sur "mention légale" vous serer redirigé sur une page dans laquelle il y a la mention légale.
```php
 <footer>
    <div class="content has-text-centered" >
      <a [routerLink]="['/rgpd']" > 
        Mention Légal 
      </a> 
    </div>
  </footer>
```
![DIA](./mentionlegale.PNG)
![DIA](./rgpd.PNG)
![DIA](./rgpd1.PNG)


# Format de structure JSON des commandes enregistées dans le localStorage

A la fermeture du navigateur les plateaux mis dans le panier les données seront perdu car il n'est pas sauvegarder car tout se trouve dans le DOM. Pour tous enregistré je vais utilisé la technique du LocalStorage.
Dans "boxes.service.ts" j'ai mis une méthode qui va permettre de reception des données à partir du LocalStorage.

```php
getAllBoxes() {
    this.boxe = JSON.parse(localStorage.getItem('Boxes') || '[]');
    return this.boxe;
    
  }
```
Ensuite j'ai mis une méthode qui prend en compte du stockage au niveau de la méthode pour l'ajout des plateaux. (L'envoi des données dans le LocalStorage).

```php
  addBoxe(boxe: Boxes) {
    this.boxe.push(boxe);

    let tabItems = JSON.stringify(this.boxe);
    localStorage.setItem('Boxes', tabItems);
  }
```
### Structure JSon
Elle prend le nom du client, elle contient un tableau Boxe et le prix total de la commande.

![DIA](./local.PNG)

