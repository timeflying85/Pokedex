import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { FlightDTO, FlightInsertForm } from '../../models/flight';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl = 'http://localhost:8080/flight/'

  constructor(private http: HttpClient) { }

  getFlight(): Observable<FlightDTO[]> {
    return this.http.get<FlightDTO[]>((`${this.baseUrl}all`));
  }


  createFlight(flight: FlightInsertForm): Observable<any> {
    return this.http.post('${this.baseUrl}add', flight);
  }


  deleteFlight(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id + '/delete');
  }

  getFlightById(id: number): Observable<FlightDTO> {
    return this.http.get<FlightDTO>(this.baseUrl + id);
  }

  updateFlight(id: number, flight: FlightInsertForm): Observable<FlightDTO> {
    return this.http.put<FlightDTO>(this.baseUrl + id, flight)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // handle error and return an observable with error message
          return throwError('Something went wrong while updating the flight.');
        })
      );
  }



}
