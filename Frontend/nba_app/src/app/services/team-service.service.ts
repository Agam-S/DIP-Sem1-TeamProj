import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeam, Team } from '../models/Team';
import { Player } from '../models/Player';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamServiceService {
  private messageSource = new BehaviorSubject('default message');
  private listSource = new BehaviorSubject(null);

  currentMessage = this.messageSource.asObservable();
  sharedList = this.listSource.asObservable();

  readonly baseUrl: string = 'https://nbaapi.azurewebsites.net/';
  readonly baseUrl1: string = 'http://localhost:8080/';
  readonly herokuUrl: string = 'https://peaceful-shelf-37577.herokuapp.com/';
  constructor(private _http: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    const url = this.baseUrl + 'team/all';

    return this._http.get<Team[]>(url);
  }

  postTeam(team: ITeam): Observable<ITeam> {
    return this._http.post<ITeam>(this.baseUrl + 'team/create', team);
  }

  getAllPlayers(): Observable<Player[]> {
    const url = this.baseUrl + 'players';
    return this._http.get<Player[]>(url);
  }

  updateTeam(newTeam: ITeam, _id: string): Observable<ITeam> {
    const url = this.baseUrl + 'team/edit/' + _id;
    return this._http.put<ITeam>(url, newTeam);
  }

  removeTeam(_id: string): Observable<ITeam> {
    const url = this.baseUrl + 'team/' + _id;
    return this._http.delete<ITeam>(url);
  }
  generateWinPercentage(_id: string): Observable<Team> {
    const url = this.herokuUrl + 'alg/' + _id;
    return this._http.post<Team>(url, _id);
  }

  viewTeam(_id: string): Observable<Team> {
    const url = this.baseUrl + 'team/view/' + _id;
    return this._http.get<Team>(url);
  }
  changeMessage(id: string) {
    this.messageSource.next(id);
  }
  changeList(ids: any[]) {
    this.listSource.next(ids);
  }
}
