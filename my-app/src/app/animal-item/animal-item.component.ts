import { Component, Input, input } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})
export class AnimalItemComponent {

  /**
   *
   */
  constructor() {
   // this.animal = new Animal();
   //  this.animal.nome = "Mingau";
    // this.animal.especie = "Fenilo";
    // this.animal.idade = 18;
   //  this.animal.sexo = "macho";

  }
//animal: Animal;

@Input() animal: Animal = new Animal ("","",0,"");

}
