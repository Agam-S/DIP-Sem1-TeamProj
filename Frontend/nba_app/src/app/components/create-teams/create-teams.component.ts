import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ITeam } from 'src/app/models/Team';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent implements OnInit {
  @ViewChild("teamName")teamNameInp: ElementRef;
  newTeam: ITeam

  constructor(private _api: TeamServiceService) { }

  ngOnInit(): void {
  }



  postNewTeam() {
    let teamName = this.teamNameInp.nativeElement.value;

    this.newTeam = {
      teamName : teamName
    }

    this._api.postTeam(this.newTeam).subscribe(
      
    )
    
    console.log(this.newTeam);
  }

}
