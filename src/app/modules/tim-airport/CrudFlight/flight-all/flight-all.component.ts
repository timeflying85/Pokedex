import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/shared/models/flight';
import { MyServiceService } from 'src/app/shared/services/my-service/my-service.service';

@Component({
  selector: 'app-flight-all',
  templateUrl: './flight-all.component.html',
  styleUrls: ['./flight-all.component.scss']
})
export class FlightAllComponent {

  flights! : FlightDTO[];

  constructor(private router : Router, private myService: MyServiceService,private httpClient : HttpClient, private _activatedRoute : ActivatedRoute) {
    this.flights = this._activatedRoute.snapshot.data['flights']
   }

  ngOnInit(): void {
    this.getFlights()
  }

  getFlights(){
    this.myService.getFlight().subscribe(objects => {
      this.flights = objects
    });
  }

  deleteFlight(id:number) {
    this.myService.deleteFlight(id).subscribe(
      {
      next : () => {
        console.log("YOUPI")
        this.getFlights()
    },

      error : (err) => {console.log(err)}
    })



      }

  }




