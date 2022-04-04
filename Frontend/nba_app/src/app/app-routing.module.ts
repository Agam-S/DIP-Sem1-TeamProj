import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { TeamComponent } from './components/team/Team.component';

const routes: Routes = [
  { path: '', component: AllPlayersComponent },
  { path: 'create', component: CreateTeamsComponent },
  { path: 'teams', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
