import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonData() {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
  }
}


// GET
// POST
// PUT
// DELETE
// PATCH
// JSONP
// OPTIONS
