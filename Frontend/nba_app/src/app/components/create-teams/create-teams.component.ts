import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';
import {
  MdbTablePaginationComponent,
  MdbTableDirective,
} from 'angular-bootstrap-md';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css'],
})
export class CreateTeamsComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  statusString: string;
  @ViewChild('teamName') teamNameInp: ElementRef;

  tContent: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER'];

  SelectedPlayers = [];
  searchText;
  newTeam: ITeam;

  constructor(
    private _api: TeamServiceService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._api
      .getAllPlayers()
      .subscribe((unpackedPlayers) => (this.playerList = unpackedPlayers));

    const result = this.playerList ? this.playerList.length : 520;

    for (let i = 1; i <= result; i++) {
      this.tContent.push({
        RK: 'RK',
        PLAYER_NAME: 'PLAYER_NAME',
        PER: 'PER',
      });
    }

    this.mdbTable.setDataSource(this.tContent);
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  postNewTeam() {
    let teamName = this.teamNameInp.nativeElement.value;

    this.newTeam = {
      teamName: teamName,
      players: this.result as any,
    };
    if (this.result.length < 5 || this.result.length > 15) {
      this.statusString = 'Please select 5-15 players';
    } else {
      this._api.postTeam(this.newTeam).subscribe((res: any) => {
        this.statusString = 'Team Successfully Added!';

        if (teamName == '') {
          {
            this.statusString = 'Team Cannot Be Empty!';
          }
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/teams']);
  }

  // called like a c# property
  get result() {
    return this.playerList.filter((item) => item.CHECKED);
  }
}
