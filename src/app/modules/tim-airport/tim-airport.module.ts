import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimAirportRoutingModule } from './tim-airport-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaneComponent } from './plane/plane.component';
import { PilotComponent } from './pilot/pilot.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './CrudFlight/create/create.component';
import { UpdateComponent } from './CrudFlight/update/update.component';
import { FlightAllComponent } from './CrudFlight/flight-all/flight-all.component';
import { FlightOneComponent } from './CrudFlight/flight-one/flight-one.component';


@NgModule({
  declarations: [
    PlaneComponent,
    PilotComponent,
    HttpClientComponent,
    MenuComponent,
    CreateComponent,
    UpdateComponent,
    FlightAllComponent,
    FlightOneComponent

  ],
  imports: [
    CommonModule,
    TimAirportRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TimAirportModule { }
