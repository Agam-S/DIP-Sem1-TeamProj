import {
  MdbTablePaginationComponent,
  MdbTableDirective,
} from 'angular-bootstrap-md';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Player } from 'src/app/models/Player';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Team } from 'src/app/models/Team';
import { ViewServiceService } from 'src/app/services/view-service.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit, AfterViewInit{
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER', 'teamName'];
  id: string;

  Team: Team;

  searchText;

  constructor(
    private _api: ViewServiceService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._api
      .viewTeam(this.id)
      .subscribe((unpackedPlayers) => (this.playerList = unpackedPlayers));

    const result = this.playerList ? this.playerList.length : 10;

    for (let i = 1; i <= result; i++) {
      this.elements.push({
        RK: 'RK',
        PLAYER_NAME: 'PLAYER_NAME',
        PER: 'PER',
      });
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(15);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}

