import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-stat-poke',
  templateUrl: './stat-poke.component.html',
  styleUrls: ['./stat-poke.component.scss']
})
export class StatPokeComponent {

  @Input() stats! : Stat[]

}
