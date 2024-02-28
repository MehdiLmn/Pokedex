import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon } from '../Interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<IPokemon[]>(this.url)
  }
  fetchOne(id:any){
    return this.http.get<IPokemon>(this.url+"/"+id)
  }
}
