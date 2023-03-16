import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-read-poke',
  templateUrl: './read-poke.component.html',
  styleUrls: ['./read-poke.component.scss']
})
export class ReadPokeComponent {


  monPokemon : pokemon = this._activatedRoute.snapshot.data['poke']

  constructor(private _activatedRoute : ActivatedRoute){}

}
