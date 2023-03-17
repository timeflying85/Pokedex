import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pokedex', loadChildren : () => import('./modules/pokedex/pokedex.module').then(m => m.PokedexModule)},
  {path: 'timAirport', loadChildren : () => import('./modules/tim-airport/tim-airport.module').then(m => m.TimAirportModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
