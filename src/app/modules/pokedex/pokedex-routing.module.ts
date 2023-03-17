import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverResolver } from 'src/app/shared/resolver/search/search.resolver';
import { ReadPokeComponent } from './read-poke/read-poke.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StatPokeComponent } from './stat-poke/stat-poke.component';
import { TypesPokeComponent } from './types-poke/types-poke.component';

const routes: Routes = [
  {path: 'read/:id', resolve: {poke : ResolverResolver} ,component : ReadPokeComponent},
  {path: 'search', component: SearchBarComponent},
  {path: 'stat', component: StatPokeComponent},
  {path: 'type', component: TypesPokeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
