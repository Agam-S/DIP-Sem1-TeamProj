import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamsList: Team[];

  constructor(private _api: TeamServiceService) {}

  ngOnInit(): void {
    this._api
      .getAllTeams()
      .subscribe((unpackedTeams) => (this.teamsList = unpackedTeams));
  }
}
