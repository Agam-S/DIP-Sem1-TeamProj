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
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit{
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER', 'teamName'];
  id: string;
  subscription: Subscription;
  Team: any;

  searchText;

  constructor(
    private data: ViewServiceService, private _api: TeamServiceService,  private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

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
}

