import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  constructor(private getDataService: GetDataService, private router: Router) {}

  // AJOUTER UN OUTPUT DU POKEMON ARRAY QUI VA L'ENVOYER VERS APP COMPONENT QUI LUI MÊME LE RENVOIE ICI
  @Input()
  pokemonArray: Pokemon[] = this.getDataService.pokemonArray;

  ngOnInit(): void {
    //this.getDataService.storeData();
  }

  setArray(array: Pokemon[]): void {
    this.pokemonArray = array;
  }
}
