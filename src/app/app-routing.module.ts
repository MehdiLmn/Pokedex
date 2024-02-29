import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';

const routes: Routes = [
  {path: "", component: PokemonComponent},
  {path: "pokemons", component: PokemonComponent},
  {path: "pokemons/:id", component: PokemonDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
