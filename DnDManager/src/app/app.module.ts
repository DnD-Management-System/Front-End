import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { SpellSheetComponent } from './components/spell-sheet/spell-sheet.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DmDashboardComponent } from './components/dashboard/dm-dashboard/dm-dashboard.component';
import { PlayerDashboardComponent } from './components/dashboard/player-dashboard/player-dashboard.component';
import { CsHeaderComponent } from './components/character-sheet/cs-header/cs-header.component';
import { CsStatsComponent } from './components/character-sheet/cs-body/cs-stats/cs-stats.component';
import { CsVitalsComponent } from './components/character-sheet/cs-body/cs-vitals/cs-vitals.component';
import { CsTraitsComponent } from './components/character-sheet/cs-body/cs-traits/cs-traits.component';
import { CsActionsComponent } from './components/character-sheet/cs-body/cs-actions/cs-actions.component';
import { CsProficienciesComponent } from './components/character-sheet/cs-body/cs-proficiencies/cs-proficiencies.component';
import { CsFeaturesComponent } from './components/character-sheet/cs-body/cs-features/cs-features.component';
import { CsInventoryComponent } from './components/character-sheet/cs-body/cs-inventory/cs-inventory.component';
import { PlayerTableComponent } from './components/dashboard/player-dashboard/player-table/player-table.component';
import { GamesTableComponent } from './components/dashboard/dm-dashboard/games-table/games-table.component';
import { GameManagementComponent } from './components/game-management/game-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { CsDetailsComponent } from './components/character-sheet/cs-header/cs-details/cs-details.component';
import { MatTabsModule } from "@angular/material/tabs";
import { CsBodyComponent } from './components/character-sheet/cs-body/cs-body.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { CsAbilityCardComponent } from './components/character-sheet/cs-body/cs-stats/cs-ability-card/cs-ability-card.component';
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CharacterSheetComponent,
    SpellSheetComponent,
    InventoryComponent,
    DmDashboardComponent,
    PlayerDashboardComponent,
    CsHeaderComponent,
    CsStatsComponent,
    CsVitalsComponent,
    CsTraitsComponent,
    CsActionsComponent,
    CsProficienciesComponent,
    CsFeaturesComponent,
    CsInventoryComponent,
    PlayerTableComponent,
    GamesTableComponent,
    GameManagementComponent,
    CsDetailsComponent,
    CsBodyComponent,
    CsAbilityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
