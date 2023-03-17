import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { PilotComponent } from './pilot/pilot.component';
import { PlaneComponent } from './plane/plane.component';

const routes: Routes = [
  {path: 'flight', component: FlightComponent},
  {path: 'plane', component: PlaneComponent},
  {path: 'pilot', component: PilotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimAirportRoutingModule { }
