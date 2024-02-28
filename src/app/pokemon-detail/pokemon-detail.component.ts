import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../Interface/pokemon';
import { PokemonService } from '../Services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute){}

  pokemon: IPokemon | undefined;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.pokemonService.fetchOne(params['id']).subscribe(data => {
        this.pokemon = data;
    })
  })
}
}
