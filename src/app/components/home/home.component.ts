import { Component, OnInit } from '@angular/core';
import { BoxesService } from 'src/app/service/boxes/boxes.service';
// je prende toute la classe 
import { LigneCommande } from 'src/app/classes/ligne-commande';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Boxes: any = [];

  boxe: any = {
    id: 0,
    nom: '',
    pieces: 0,
    composition: [],
    saveurs: [],
    prix: 0.0,
    image: ''
  };
 
  commande: Array<LigneCommande> = [];
  // totalCommande: number = 0.0;

  showModal: boolean = false;
  
  constructor(public boxesService: BoxesService) { 
    this.commande = [];
  }

  ngOnInit(): void {
    this.fetchBoxes()
  }

  fetchBoxes() {
       return this.boxesService.getBoxes().subscribe((data: {}) => {
    this.Boxes = data;
    }) 
    }

    fetchBoxe() {
      return this.boxesService.getBoxes().subscribe((nom: {}) => {
   this.Boxes = nom;
   }) 
   }


   plus(index: number) {
    // Exemple d'affectation
    // let uneLigne = new LigneCommande(1, this.Boxes[index].nom,1, this.Boxes[index].prix);
    // this.commande.push(uneLigne);
    // console.log("Plus :" + index + this.Boxes[index].nom);
    
    //je récupere ce qui est dans le local recupere du json et le parse le transfome en ts 
    this.commande = JSON.parse(localStorage.getItem('SushiCommande') || '[]');
    let ajout = false;
    this.commande.forEach(elem=> {
      if (elem.id ==  this.Boxes[index].id) {
        elem.quantite++;
        ajout = true;
      }
    });

    if (!ajout) {
      let uneLigne = new LigneCommande(this.Boxes[index].id, this.Boxes[index].nom,1, this.Boxes[index].prix);
      this.commande.push(uneLigne);
      console.log("Plus :" + index + this.Boxes[index].nom);
    }

    let tabItems = JSON.stringify(this.commande);
    localStorage.setItem('SushiCommande', tabItems);
    
  }

  moins(index: number) {
    
    console.log("Moins :" + index);

    
  }

  // functionpour afficher les détails de chaque plateau
  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      console.log("Modal indice :" + i);    
      console.log("Modal nom plateau :" + this.Boxes[i].nom);
      this.boxe = this.Boxes[i];
      this.showModal = true;
    }
  }
 
  // function pour calculer la total des commandes
  totalCommande(){
    let total=0.0;
    this.commande.forEach(elem => {
     total=total+(elem.prix*elem.quantite); 
    });
    return total
  }
 
 

 

}































