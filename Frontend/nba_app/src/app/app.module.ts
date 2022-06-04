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
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CompareTeamsComponent } from './components/compare-teams/compare-teams.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


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
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-5dgpjcl0.us.auth0.com',
      clientId: '85mBti30xF779kzCVVEJ7LyQBpRKbHTm',
    
      // Request this audience at user authentication time
      audience: 'https://nbaapi.azurewebsites.net',
    
      // Request this scope at user authentication time
      scope: 'read:current_user',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-5dgpjcl0.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'http://localhost:8080/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://nbaapi.azurewebsites.net',
    
              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
