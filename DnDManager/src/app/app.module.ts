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
import { SpellLevelComponent } from './components/spell-sheet/spell-level/spell-level.component';
import { SpellCardComponent } from './components/spell-sheet/spell-level/spell-card/spell-card.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { SpellLevelContentComponent } from './components/spell-sheet/spell-level/spell-level-content/spell-level-content.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { CsFeatureDetailsComponent } from './components/character-sheet/cs-body/cs-features/cs-feature-details/cs-feature-details.component';
import { CsPersonalityComponent } from './components/character-sheet/cs-body/cs-traits/cs-personality/cs-personality.component';
import { CsIdealsComponent } from './components/character-sheet/cs-body/cs-traits/cs-ideals/cs-ideals.component';
import { CsBondsComponent } from './components/character-sheet/cs-body/cs-traits/cs-bonds/cs-bonds.component';
import { CsFlawsComponent } from './components/character-sheet/cs-body/cs-traits/cs-flaws/cs-flaws.component';
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { EditCharacterComponent } from './components/character-sheet/edit-character/edit-character.component';
import { CreateCharacterComponent } from './components/character-sheet/edit-character/create-character/create-character.component';
import { ModifyCharacterComponent } from './components/character-sheet/edit-character/modify-character/modify-character.component';
import { MatStepperModule } from "@angular/material/stepper";
import { EditVitalsComponent } from './components/character-sheet/edit-character/edit-vitals/edit-vitals.component';
import { EditAbilitiesComponent } from './components/character-sheet/edit-character/edit-abilities/edit-abilities.component';
import { EditMoneyComponent } from './components/character-sheet/edit-character/edit-money/edit-money.component';
import { EditActionsComponent } from './components/character-sheet/edit-character/edit-actions/edit-actions.component';
import { EditProficienciesComponent } from './components/character-sheet/edit-character/edit-proficiencies/edit-proficiencies.component';
import { EditFeaturesComponent } from './components/character-sheet/edit-character/edit-features/edit-features.component';
import { HttpClientModule } from "@angular/common/http";
import { AddSpellComponent } from './components/spell-sheet/add-spell/add-spell.component';
import { AddItemComponent } from './components/inventory/add-item/add-item.component';
import { EditTraitsComponent } from './components/character-sheet/edit-character/edit-traits/edit-traits.component';

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
    CsAbilityCardComponent,
    SpellLevelComponent,
    SpellCardComponent,
    SpellLevelContentComponent,
    CsFeatureDetailsComponent,
    CsPersonalityComponent,
    CsIdealsComponent,
    CsBondsComponent,
    CsFlawsComponent,
    EditCharacterComponent,
    CreateCharacterComponent,
    ModifyCharacterComponent,
    EditVitalsComponent,
    EditAbilitiesComponent,
    EditMoneyComponent,
    EditActionsComponent,
    EditProficienciesComponent,
    EditFeaturesComponent,
    AddSpellComponent,
    AddItemComponent,
    EditTraitsComponent
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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    FormsModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
