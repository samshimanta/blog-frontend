import { Component, effect, signal } from '@angular/core';
import { getPokemonFn } from './get-pokemon';
import { CommonModule } from '@angular/common';
import { DisplayPokemon } from './pokemon.interface';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})
export class Pokemon {

  // Signal + AsyncPipe + HttpClient

   pokemonId = signal(25);
  getPokemon = getPokemonFn();

  pokemon$ = this.getPokemon(this.pokemonId())

    // Signal + AsyncPipe + HttpClient

    // Signal + make HTTP call in effect



    // Signal + make HTTP call in effect


     pokemonId2 = signal(21);
  // getPokemon2 = getPokemonFn();
  pokemon2 = signal<DisplayPokemon | null>(null);

  constructor() {
    effect((cleanUp) => {
      const subscription = this.getPokemon(this.pokemonId2())
        .subscribe((p) =>{
          console.log(p);
          
           this.pokemon2.set(p)
        })

      cleanUp(() => subscription.unsubscribe());
    });
  }

}
