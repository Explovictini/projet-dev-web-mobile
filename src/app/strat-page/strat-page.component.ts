import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetDataService} from "../get-data.service";
import {Router} from "@angular/router";
import {Pokemon} from "../pokemon.model";

@Component({
  selector: 'app-strat-page',
  templateUrl: './strat-page.component.html',
  styleUrls: ['./strat-page.component.css']
})
export class StratPageComponent implements OnInit {

  // searchWord: utilisé pour la barre de recherche dans la partie "Stratégie"
  searchword: string = "";
  @Input()
  pokemonArray: Pokemon[] = this.getDataService.pokemonArray;
  pokemonArrayCopy = this.pokemonArray.slice();

  constructor(private getDataService: GetDataService) {}


  ngOnInit(): void {
    // Récupère le tableau de Pokémon reçu par requête HTTP dans le service get-data.service.ts
    this.getDataService.importData().subscribe({
      next: pokemonArray =>{
        this.pokemonArray = pokemonArray
      }
    })
  }

  searchThis() {
    this.pokemonArrayCopy = this.pokemonArray.filter(word => word.name.toLowerCase().includes(this.searchword.toLowerCase()))
  }
}
