import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { TeamComponent } from './components/team/team.component';
import { NavComponent } from './components/nav/nav.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CompareTeamsComponent } from './components/compare-teams/compare-teams.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CreateTeamsComponent,
    TeamComponent,
    NavComponent,
    AllPlayersComponent,
    EditTeamComponent,
    ViewTeamComponent,
    NotFoundComponent,
    CompareTeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AlertModule,
    AuthModule.forRoot({
      "domain": "dev-kj254gry.us.auth0.com",
      "clientId": "LnaHHKTSTcSuWTlWapG1waNm1pK5ZUDa",
    }),    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
