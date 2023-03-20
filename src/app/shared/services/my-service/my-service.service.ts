import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDTO, FlightInsertForm } from '../../models/flight';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl = 'http://localhost:8080/flight'

  constructor(private http: HttpClient) { }

  getFlight(): Observable<FlightDTO[]> {
    return this.http.get<FlightDTO[]>((`${this.baseUrl}/all`));
  }


  createFlight(flight: FlightInsertForm): Observable<any> {
    return this.http.post('${this.baseUrl}/add', flight);
  }


  deleteFlight(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}' + id + '/delete');
  }

  updateDepartureTime(id: number, time: string): Observable<any> {
    return this.http.patch('${this.baseUrl}' + id + '/update?departureTime=' + time, null);
  }

  updateArrivalTime(id: number, time: string): Observable<any> {
    return this.http.patch('${this.baseUrl}' + id + '/update?arrivalTime=' + time, null);
  }

  getFlightById(id: number): Observable<FlightDTO> {
    return this.http.get<FlightDTO>('${this.baseUrl}' + id);
  }


}
