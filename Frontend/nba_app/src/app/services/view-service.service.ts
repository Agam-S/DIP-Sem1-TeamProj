import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  readonly baseUrl: string = 'https://nbaapi.azurewebsites.net/'
  constructor(private _http: HttpClient) { }

  viewTeam(_id: number): Observable<Team> {
    const url = this.baseUrl + "view/" + _id
    
    return this._http.get<Team>(url);
  }
}
