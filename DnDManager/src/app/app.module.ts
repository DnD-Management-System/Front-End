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
import { CsStatsComponent } from './components/character-sheet/cs-stats/cs-stats.component';
import { CsVitalsComponent } from './components/character-sheet/cs-vitals/cs-vitals.component';
import { CsTraitsComponent } from './components/character-sheet/cs-traits/cs-traits.component';
import { CsActionsComponent } from './components/character-sheet/cs-actions/cs-actions.component';
import { CsProficienciesComponent } from './components/character-sheet/cs-proficiencies/cs-proficiencies.component';
import { CsFeaturesComponent } from './components/character-sheet/cs-features/cs-features.component';
import { CsInventoryComponent } from './components/character-sheet/cs-inventory/cs-inventory.component';

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
    CsInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
