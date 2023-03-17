import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimAirportRoutingModule } from './tim-airport-routing.module';
import { FlightComponent } from './flight/flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaneComponent } from './plane/plane.component';
import { PilotComponent } from './pilot/pilot.component';
import { HttpClientComponent } from './http-client/http-client.component';


@NgModule({
  declarations: [
    FlightComponent,
    PlaneComponent,
    PilotComponent,
    HttpClientComponent

  ],
  imports: [
    CommonModule,
    TimAirportRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TimAirportModule { }
