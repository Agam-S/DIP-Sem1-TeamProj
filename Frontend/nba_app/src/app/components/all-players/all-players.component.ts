import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  constructor(private _api: TeamServiceService) { }
  playerList: Player[];

  ngOnInit(): void {
    this._api.getAllPlayers().subscribe(
      unpackedPlayers => this.playerList = unpackedPlayers

    )
  }

}
