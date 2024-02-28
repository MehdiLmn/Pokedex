import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../Interface/pokemon';
import { PokemonService } from '../Services/pokemon.service';
import { ApiType } from '../Interface/api-type';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private service: PokemonService){}

  pokemons: IPokemon[] = [];
  pokemonParent: IPokemon | undefined;
  types: ApiType[] = [];

  ngOnInit(){
    this.getPokemon();
  }

  getPokemon(){
    this.service.fetchAll().subscribe(data => {
      this.pokemons = data;
      return this.pokemons;
    })
  }

  getType(){
    this.service.fetchAll().subscribe(data => {
      this.types = data;
      return this.types;
    })
  }

  selectPokemon(pokemon:IPokemon){
    this.pokemonParent = pokemon;
  }

  recevoirMessage(message:string){
    console.log("message reçu du component enfant",message);
  }

}
