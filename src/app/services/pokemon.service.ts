import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<any> {
   const url = `https://api.pokemontcg.io/v2/cards/?api_key=${environment.apiKey}`;
   return this.http.get<any>(url);
  }
}
