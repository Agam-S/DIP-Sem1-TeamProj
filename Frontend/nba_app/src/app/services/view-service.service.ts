import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  readonly baseUrl: string = 'https://nbaapi.azurewebsites.net/team/'
  constructor(private _http: HttpClient) { }

  viewTeam(_id: string): Observable<Team> {
    const url = this.baseUrl + "view/" + _id;
    return this._http.get<Team>(url);
  }
  changeMessage(id: string) {
    this.messageSource.next(id);
  }
}

