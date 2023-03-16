import { Component, Input } from '@angular/core';
import { Type } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-types-poke',
  templateUrl: './types-poke.component.html',
  styleUrls: ['./types-poke.component.scss']
})
export class TypesPokeComponent {

  @Input() types! : Type[];

}
