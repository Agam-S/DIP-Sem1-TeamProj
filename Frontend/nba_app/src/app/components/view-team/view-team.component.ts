import {
  MdbTablePaginationComponent,
  MdbTableDirective,
} from 'angular-bootstrap-md';
import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { Player } from 'src/app/models/Player';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css'],
})
export class ViewTeamComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  tContent: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER', 'teamName'];
  id: string;
  idString: string;
  subscription: Subscription;
  Team: any;
  WinPercentage: any;
  searchText;

  constructor(
    private data: TeamServiceService,
    private _api: TeamServiceService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (id) => (this.id = id)
    );

    if (this.id == 'default message') {
      this.router.navigate(['/teams']);
    }

    this.data.viewTeam(this.id).subscribe((res) => {
      this.Team = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editTeam(_id: string) {
    this.idString = _id;
    this.data.changeMessage(this.idString);
    this.router.navigate(['/team/edit']);
  }

  generateWinPercentage = async (_id: string) => {
    try {
      if (this.Team.players.length < 5 || this.Team.players.length > 15) {
        alert("Team should contain at least 5-15 players")
      } else {
        await this._api.generateWinPercentage(_id).subscribe((res) => {
          this.WinPercentage = res;
          this.WinPercentage = Math.round(this.WinPercentage * 100) / 100;
          console.log(this.WinPercentage);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
