import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from '../../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }

  getPokemonById(id:string | null) : Observable<pokemon>{
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/" + id)
  }
}
