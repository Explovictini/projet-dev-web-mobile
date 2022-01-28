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

  @Input()
  pokemonArray: Pokemon[] = this.getDataService.pokemonArray;

  ngOnInit(): void {

    // Ligne pouvant être décommentée pour envoyer les données du pokemonArray dans get-data.service.ts vers la Firebase
    //this.getDataService.storeData();

    // Récupère le tableau de Pokémon reçu par requête HTTP dans le service get-data.service.ts
    this.getDataService.importData().subscribe({
      next: pokemonArray =>{
        this.pokemonArray = pokemonArray
      }
    })
  }

}
