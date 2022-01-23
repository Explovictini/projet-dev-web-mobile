import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  @Input() dexNumber!: string;
  @Input() name!: string;
  @Input() name_english!: string;
  @Input() name_deutsch!: string;
  @Input() name_japan!: string;
  @Input() nb_type!: number;
  @Input() type1!: string;
  @Input() type2!: string;
  @Input() height!: number;
  @Input() weight!: number;
  @Input() hp!: number;
  @Input() force!: number;
  @Input() defense!: number;
  @Input() special!: number;
  @Input() speed!: number;
  @Input() weaknesses_resistances!: string[];

  sprite!: string;


  constructor() { }

  ngOnInit(): void {
    this.actualiserSprite();
  }

  // Cette méthode est essentielle car sans elle, chaque sprint serait défini par Sprite_undefined_J
  // On doit le réactualiser dès que le dexNumber a été reçu
  actualiserSprite(): void {
    this.sprite="/assets/sprites/Sprite_"+ this.dexNumber + "_J.png";
  }

}
