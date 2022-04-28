import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Router } from '@angular/router';
import { findIndex, Subscription } from 'rxjs';
import { ViewServiceService } from 'src/app/services/view-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit, OnDestroy {
  teamsList: any;
  idString: string;
  id: string;
  subscription: Subscription;
  statusString: string;
  deleteTeam: boolean;

  constructor(private _api: TeamServiceService, private data: ViewServiceService, private router: Router,) {}

  ngOnInit() {
    this._api
      .getAllTeams()
      .subscribe((unpackedTeams) => (this.teamsList = unpackedTeams));

      this.subscription = this.data.currentMessage.subscribe(
        (message) => (this.id = message)
      );
    }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
  
  viewTeam(_id: string) {
    this.idString = _id;
    this.data.changeMessage(this.idString);
    this.router.navigate(['/team/view']);
  }
  editTeam(_id: string) {
    this.idString = _id;
    this.data.changeMessage(this.idString);
    this.router.navigate(['/team/edit']);
  }

  removeTeam(_id: string) {
    if (confirm("Are you sure you want to delete this Team?")) {
        this._api.removeTeam(_id).subscribe((res: any) => {
          alert("Team Deleted!");
          let cUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([cUrl]);
        });

      });
    }
  }
}