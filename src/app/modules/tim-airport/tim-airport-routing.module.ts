import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightResolver } from 'src/app/shared/resolver/flight/flight.resolver';
import { CreateComponent } from './CrudFlight/create/create.component';
import { FlightAllComponent } from './CrudFlight/flight-all/flight-all.component';
import { FlightOneComponent } from './CrudFlight/flight-one/flight-one.component';
import { UpdateComponent } from './CrudFlight/update/update.component';
import { PilotComponent } from './pilot/pilot.component';
import { PlaneComponent } from './plane/plane.component';

const routes: Routes = [
  {path: 'crudFlight', children : [
  {path: 'all', resolve : {flights : FlightResolver}, component: FlightAllComponent},
  {path: ':id', component: FlightOneComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'create', component: CreateComponent}
]},
  {path: 'plane', component: PlaneComponent},
  {path: 'pilot', component: PilotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimAirportRoutingModule { }
