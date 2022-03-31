import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: "", component: MainComponent,},
  {path: "create", component: CreateTeamsComponent,},
  {path: "players", component: AllPlayersComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
