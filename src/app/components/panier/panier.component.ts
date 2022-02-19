import { Component, OnInit } from '@angular/core';
import { BoxesService } from 'src/app/service/boxes/boxes.service';
import { LigneCommande } from 'src/app/classes/ligne-commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  Boxes: any = [];

  
 
  commande: Array<LigneCommande> = [];
  // totalCommande: number = 0.0;

  constructor(public boxesService: BoxesService) { 
    this.commande = [];
  }

  ngOnInit(): void {
   
  }
  


}
