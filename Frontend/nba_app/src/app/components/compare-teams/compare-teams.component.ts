import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-compare-teams',
  templateUrl: './compare-teams.component.html',
  styleUrls: ['./compare-teams.component.css'],
})
export class CompareTeamsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ids: string[] = [];
  team1: any;
  team2: any;
  id1: string;
  id2: string;
  win1: number = 0;
  win2: number = 0;
  resultString: string;
  totalWin: number = 0;
  constructor(
    private data: TeamServiceService,
    private _api: TeamServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this._api.sharedList.subscribe(
      (list) => (this.ids = list)
    );
    if (this.ids == null) {
      this.router.navigate(['/teams']);
    }
    this.id1 = this.ids[0];
    this.id2 = this.ids[1];

    this.data.generateWinPercentage(this.id1).subscribe(async (res) => {
      this.team1 = await res;
      this.win1 = Math.round(this.team1.winRateP * 100) / 100;
      if (this.win1 > 80) {
        this.win1 = this.win1 / 2;
      }
    });
    this.data.generateWinPercentage(this.id2).subscribe(async (res) => {
      this.team2 = await res;
      this.win2 = Math.round(this.team2.winRateP * 100) / 100;
      if (this.win2 > 80) {
        this.win2 = this.win2 / 2;
      }
    });
    this.showResult();
  }
  showResult() {
    setTimeout(() => {
      this.totalWin = this.win1 + this.win2;

      if (this.win1 > this.win2) {
        this.resultString =
          this.team1.team.teamName +
          ' has a ' +
          Number((this.win1 / this.totalWin) * 100).toLocaleString() +
          ' % greater win chance than ' +
          this.team2.team.teamName;
      } else if (this.win1 < this.win2) {
        this.resultString =
          this.team2.team.teamName +
          ' has a ' +
          Number((this.win2 / this.totalWin) * 100).toLocaleString() +
          ' % greater win chance than ' +
          this.team1.team.teamName;
      } else {
        this.resultString =
          this.team1.team.teamName +
          ' and ' +
          this.team2.team.teamName +
          ' have the same win chance';
      }
    }, 10000);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
