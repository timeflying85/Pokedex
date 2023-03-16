import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReadPokeComponent } from './read-poke/read-poke.component';
import { StatPokeComponent } from './stat-poke/stat-poke.component';
import { TypesPokeComponent } from './types-poke/types-poke.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientComponent } from './http-client/http-client.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    ReadPokeComponent,
    StatPokeComponent,
    TypesPokeComponent,
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PokedexModule { }
