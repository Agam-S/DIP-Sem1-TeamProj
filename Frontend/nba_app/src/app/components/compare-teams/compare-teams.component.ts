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
  win1: number;
  win2: number;

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
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
