import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FlightDTO } from '../../models/flight';
import { MyServiceService } from '../../services/my-service/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<boolean> {

  constructor(private _service : MyServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FlightDTO | any> {



    return this._service.getFlight();
  }
}
