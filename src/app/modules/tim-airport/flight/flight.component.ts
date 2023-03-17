import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDTO } from 'src/app/shared/models/flight';
import { MyServiceService } from 'src/app/shared/services/my-service/my-service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit{

  flights! : FlightDTO[];

  constructor(private myService: MyServiceService,private httpClient : HttpClient, private _activatedRoute : ActivatedRoute) {
    this.flights = this._activatedRoute.snapshot.data['flights']
   }

  ngOnInit(): void {
    this.myService.getFlight().subscribe(objects => {
      this.flights = objects
    });
  }


}
