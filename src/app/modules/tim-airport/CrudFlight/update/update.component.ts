import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightDTO } from 'src/app/shared/models/flight';
import { MyServiceService } from 'src/app/shared/services/my-service/my-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
/*
    flightToUpdate!: FlightDTO;
    flightForm!: FormGroup;

    constructor(
      private _myService: MyServiceService,
      private _router: Router,
      private _activatedRoute: ActivatedRoute,
      private _formBuilder: FormBuilder
    ) {}

    ngOnInit() {
      this._activatedRoute.params.subscribe((params) => {
        const flightId = +params['id'];
        this._myService.getFlightById(flightId).subscribe((flight) => {
          this.flightToUpdate = flight;
          this.flightForm.patchValue(flight);
        });
      });

      this.flightForm = this._formBuilder.group({
        departure: [''],
        destination: [''],
        departureTime: [''],
        arrivalTime: [''],
        captain: [''],
        copilot: [''],
        plane: [''],
      });
    }

    updateFlight() {
      this._myService.updateFlight(this.flightToUpdate.id, this.flightForm.value);
      //this._router.navigate()
    }
  }
*/

flightToUpdate!: FlightDTO;
flightForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private myService: MyServiceService
  ) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.myService.getFlightById(id).subscribe((flight: FlightDTO) => {
      this.flightToUpdate = flight;

      // Initialiser les valeurs des champs du formulaire avec les données existantes
      this.flightForm.setValue({
        departureAirportName: flight.departure.name,
        departureAirportLocation: flight.departure.location,
        destinationAirportName: flight.destination.name,
        destinationAirportLocation: flight.destination.location,
        captain: flight.captain.name,
        copilot: flight.firstOfficer.name,
        plane: flight.plane.callSign,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime
      });
    });

    this.flightForm = this.formBuilder.group({
      departureAirportName: ['', Validators.required],
      departureAirportLocation: ['', Validators.required],
      destinationAirportName: ['', Validators.required],
      destinationAirportLocation: ['', Validators.required],
      captain: ['', Validators.required],
      copilot: ['', Validators.required],
      plane: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required]
    });
  }

  updateFlight(): void {
    this.flightToUpdate.departure.name = this.flightForm.value.departureAirportName;
    this.flightToUpdate.departure.location = this.flightForm.value.departureAirportLocation;
    this.flightToUpdate.destination.name = this.flightForm.value.destinationAirportName;
    this.flightToUpdate.destination.location = this.flightForm.value.destinationAirportLocation;
    this.flightToUpdate.captain.name = this.flightForm.value.captain.split(' ')[0];
    this.flightToUpdate.captain.name = this.flightForm.value.captain.split(' ')[1];
    this.flightToUpdate.firstOfficer.name = this.flightForm.value.copilot.split(' ')[0];
    this.flightToUpdate.firstOfficer.name = this.flightForm.value.copilot.split(' ')[1];
    this.flightToUpdate.plane.callSign = this.flightForm.value.plane;
    this.flightToUpdate.departureTime = this.flightForm.value.departureTime;
    this.flightToUpdate.arrivalTime = this.flightForm.value.arrivalTime;

    console.log(this.flightToUpdate);


    this.myService.updateFlight(this.flightToUpdate.id, this.flightForm.value).subscribe(() => {
      //this.router.navigate(['/']);
    });
  }
}

