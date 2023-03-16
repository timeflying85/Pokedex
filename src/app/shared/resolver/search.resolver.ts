import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { pokemon } from '../models/pokemon';
import { PokeService } from '../services/poke/poke.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<boolean> {



  constructor(private _pokeService : PokeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<pokemon | any>{

    let id : string = route.params['id']

    return this._pokeService.getPokemonById(id).pipe(catchError(err => {return of({error : err})}))
  }

}
