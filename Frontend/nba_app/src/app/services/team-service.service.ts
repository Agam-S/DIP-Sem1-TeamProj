import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeam, Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  readonly baseUrl: string = 'https://nbaapi.azurewebsites.net/'
  constructor(private _http: HttpClient) { }

  getAllTeams(): Observable<Team[]> {
    const url = this.baseUrl + "team/all"

    return this._http.get<Team[]>(url);
  }

  postTeam(team: ITeam): Observable<ITeam> {
    return this._http.post<ITeam>(this.baseUrl + "team/create", team);
  }
}
