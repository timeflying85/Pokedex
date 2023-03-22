import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDTO } from 'src/app/shared/models/flight';
import { MyServiceService } from 'src/app/shared/services/my-service/my-service.service';

@Component({
  selector: 'app-flight-one',
  templateUrl: './flight-one.component.html',
  styleUrls: ['./flight-one.component.scss']
})
export class FlightOneComponent implements OnInit {

  selectedFlight! : FlightDTO;
  id : number = this._activatedRoute.snapshot.params['id']

  constructor(private _activatedRoute : ActivatedRoute, private _myService : MyServiceService) {
  }


  ngOnInit(): void {
    this._myService.getFlightById(this.id).subscribe({
      next : (data) => {
        this.selectedFlight = data
      }
    })
  }

}
