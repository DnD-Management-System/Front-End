import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { CharacterSheetComponent } from "./components/character-sheet/character-sheet.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "character",
    component: CharacterSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
