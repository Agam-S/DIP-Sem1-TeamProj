import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { TeamComponent } from './components/team/Team.component';
import { NavComponent } from './components/nav/nav.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTeamsComponent,
    TeamComponent,
    NavComponent,
    AllPlayersComponent,
    EditTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
