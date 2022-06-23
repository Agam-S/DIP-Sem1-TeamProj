import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit, OnDestroy {
  teamsList: Team[];
  idString: any;
  id: string;
  subscription: Subscription;
  statusString: string;
  deleteTeam: boolean;
  compareIds: string[] = [];
  searchText: string;

  constructor(
    private _api: TeamServiceService,
    private data: TeamServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teamsList = [];
    this._api.getAllTeams().subscribe((listPlayers) => {
      for (let i = 0; i < listPlayers.length; i++) {
        this.teamsList.push(listPlayers[i]);
      }
    });

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

  getIDs(_id: string) {
    if (this.compareIds.includes(_id)) {
      this.compareIds.splice(this.compareIds.indexOf(_id), 1);
    } else {
      this.compareIds.push(_id);
    }
  }
  compareTeam() {
    if (this.compareIds.length < 2 || this.compareIds.length > 2) {
      alert('You can only compare TWO teams at a time');
    } else if (this.compareIds.length === 0) {
      alert('Please select a team to compare');
    } else {
      this.data.changeList(this.compareIds);
      this.router.navigate(['/team/compare']);
    }
  }
  removeTeam(_id: string) {
    if (confirm('Are you sure you want to delete this Team?')) {
      this._api.removeTeam(_id).subscribe((res: any) => {
        alert('Team Deleted!');
        let cUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([cUrl]);
          });
      });
    }
  }
}
