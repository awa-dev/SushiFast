import { Component, OnInit } from '@angular/core';
import { BoxesService } from 'src/app/service/boxes/boxes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Boxes: any = [];
 

  constructor(public boxesService: BoxesService) { }

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
 

}

