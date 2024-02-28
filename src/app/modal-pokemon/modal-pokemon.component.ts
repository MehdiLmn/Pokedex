import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../Interface/pokemon';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css']
})
export class ModalPokemonComponent {

  @Input() pokemon: IPokemon | undefined;
  @Output() messageEnvoye = new EventEmitter<string>();

  envoyerMessage(){
    this.messageEnvoye.emit('Boujour les parents');
  }

}
