import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightDTO } from 'src/app/shared/models/flight';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent {

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get<FlightDTO[]>('http://localhost:6969/flight/all');
  }



}
