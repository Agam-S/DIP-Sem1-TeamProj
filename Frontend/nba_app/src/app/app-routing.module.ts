import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeamComponent } from './components/team/Team.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { CompareTeamsComponent } from './components/compare-teams/compare-teams.component';

const routes: Routes = [
  { path: '', component: AllPlayersComponent },
  { path: 'create', component: CreateTeamsComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'team/edit', component: EditTeamComponent },
  { path: 'team/view', component: ViewTeamComponent },
  { path: 'team/compare', component: CompareTeamsComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
