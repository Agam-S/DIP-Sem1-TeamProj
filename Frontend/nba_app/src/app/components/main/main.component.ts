import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  teamsList: Team[];

  constructor(private _api: TeamServiceService) { }

  ngOnInit(): void {
    this._api.getAllTeams().subscribe(
      unpackedTeams => this.teamsList = unpackedTeams

    )

  }
  
}
