import { Component, signal } from '@angular/core';
import { getPokemonFn } from './get-pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})
export class Pokemon {
   pokemonId = signal(25);
  getPokemon = getPokemonFn();

  pokemon$ = this.getPokemon(this.pokemonId())
}
