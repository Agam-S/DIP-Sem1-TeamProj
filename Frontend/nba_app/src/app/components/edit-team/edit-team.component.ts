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
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Player } from 'src/app/models/Player';
import { Subscription } from 'rxjs';
import { ViewServiceService } from 'src/app/services/view-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];
  playerList: Player[];
  headElements = ['RK', 'PLAYER_NAME', 'PER'];

  searchText;

  id: string;
  subscription: Subscription;
  Team: any;

  constructor(
    private _api: TeamServiceService,
    private cdRef: ChangeDetectorRef, private data: ViewServiceService,  private router: Router,
  ) {}

  ngOnInit() {

      this._api
      .getAllPlayers()
      .subscribe((unpackedPlayers) => (this.playerList = unpackedPlayers));

        this.subscription = this.data.currentMessage.subscribe(
          (id) => (this.id = id)
          
        );
    
        if (this.id == 'default message') {
          this.router.navigate(['/teams']);
        }

        this.data.viewTeam(this.id).subscribe((res) => {
          this.Team = res;
        });
    

    const result = this.playerList ? this.playerList.length : 520;

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
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(6);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  goBack() {
    this.router.navigate(['/teams']);
  }
  get result() {
    return this.playerList.filter((item) => item.CHECKED);
    
  }
  
}

