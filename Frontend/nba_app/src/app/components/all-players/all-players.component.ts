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

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
})
export class AllPlayersComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  tContent: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER'];

  searchText;

  constructor(
    private _api: TeamServiceService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.playerList = [];
    this._api
      .getAllPlayers()
      .subscribe((listPlayers) => {
        for (let i = 0; i < listPlayers.length; i++) {
          this.playerList.push(listPlayers[i]);
        
        }

        for (let i = 1; i <= this.playerList.length; i++) {
          this.tContent.push({
            RK: 'RK',
            PLAYER_NAME: 'PLAYER_NAME',
            PER: 'PER',
          });
          this.mdbTable.setDataSource(this.tContent);
        }
      });
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(15);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
