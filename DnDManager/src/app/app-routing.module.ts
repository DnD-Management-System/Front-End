import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from "./components/character-sheet/character-sheet.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "character",
    component: CharacterSheetComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
