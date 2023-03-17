import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDTO } from '../../models/flight';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getFlight(): Observable<FlightDTO[]> {
    return this.http.get<FlightDTO[]>('http://localhost:8080/flight/all');
  }

}
