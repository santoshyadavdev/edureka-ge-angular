import { Component, OnInit } from '@angular/core';
import { Pokemon } from './services/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'ge-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonData: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonData().subscribe(res => this.pokemonData = res);
  }

}
