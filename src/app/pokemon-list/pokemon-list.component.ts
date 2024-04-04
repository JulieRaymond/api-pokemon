import {Component} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe({
      next: (data: any) => {
        this.pokemons = data.data;
        console.log(this.pokemons);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
