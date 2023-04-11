import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/shared/models/flight';
import { MyServiceService } from 'src/app/shared/services/my-service/my-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  newFlight! : FlightDTO[];

  flightForm! : FormGroup;

  constructor(private _myService: MyServiceService, private _router: Router, private _formBuilder: FormBuilder){

    this.flightForm = this._formBuilder.group({
      departureAirportId: ['', [Validators.required]],
      arrivalAirportId: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      arrivalTime: ['', [Validators.required]],
      captain: ['', [Validators.required]],
      firstOfficer: ['', [Validators.required]],
      plane: ['', [Validators.required]],
      company: ['', [Validators.required]]
    })


  }

  createFlight() : void {
    this._myService.createFlight(this.flightForm.value).subscribe({
      next : (data) => {
        console.log(data);

      },
      error : (err) => {
        console.log(err);

      }
    });
    //this._router.navigate()
  }


}
