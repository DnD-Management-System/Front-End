import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Vitals } from "../../../../models/temp-models/player-subobjects/Vitals";
import { Skill } from "../../../../models/temp-models/player-subobjects/Skill";
import { Ability } from "../../../../models/temp-models/player-subobjects/Ability";
import { Action } from "../../../../models/temp-models/player-subobjects/Action";
import { MatTableDataSource } from "@angular/material/table";
import { PersonalityTrait } from "../../../../models/temp-models/player-subobjects/trait-subobjects/PersonalityTrait";
import { Bond } from "../../../../models/temp-models/player-subobjects/trait-subobjects/Bond";
import { Ideal } from "../../../../models/temp-models/player-subobjects/trait-subobjects/Ideal";
import { Flaw } from "../../../../models/temp-models/player-subobjects/trait-subobjects/Flaw";
import { Traits } from "../../../../models/temp-models/player-subobjects/Traits";
import { Proficiency } from "../../../../models/temp-models/player-subobjects/Proficiency";
import { Feature } from "../../../../models/temp-models/player-subobjects/Feature";
import { Character } from "../../../../models/temp-models/Character";
import { MOCKPLAYERS } from "../../../../models/temp-models/mock-players";
import { Money } from "../../../../models/temp-models/player-subobjects/Money";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  basicInfo!: FormGroup;
  gameplayVitals!: FormGroup;
  abilities!: FormGroup;
  actionsGroup!: FormGroup;
  traits!: FormGroup;
  proficienciesGroup!: FormGroup;
  featuresGroup!: FormGroup;

  actionColumns: string[] = ['name', 'bonus', 'damage', 'type'];
  actionDataSource = new MatTableDataSource<Action>();

  traitColumns: string[] = ['value'];
  personalityDataSource = new MatTableDataSource<PersonalityTrait>();
  bondDataSource = new MatTableDataSource<Bond>();
  idealDataSource = new MatTableDataSource<Ideal>();
  flawDataSource = new MatTableDataSource<Flaw>();

  proficiencyDataSource = new MatTableDataSource<Proficiency>();

  featureColumns: string[] = ['name', 'description'];
  featureDataSource = new MatTableDataSource<Feature>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfo = this._formBuilder.group({
      characterName: ['', Validators.required],
      playerName: ['', Validators.required],
      race: ['', Validators.required],
      class: ['', Validators.required],
      level: ['', Validators.required],
      alignment: ['', Validators.required]
    });
    this.gameplayVitals = this._formBuilder.group({
      hp: ['', Validators.required],
      ac: ['', Validators.required],
      speed: ['', Validators.required],
      hitDice: ['', Validators.required],
      proficiencyBonus: ['', Validators.required]
    });
    this.abilities = this._formBuilder.group({
      strength: ['', Validators.required],
      athletics: [],
      dexterity: ['', Validators.required],
      acrobatics: [],
      sleight: [],
      stealth: [],
      constitution: ['', Validators.required],
      intelligence: ['', Validators.required],
      arcana: [],
      history: [],
      investigation: [],
      nature: [],
      religion: [],
      wisdom: ['', Validators.required],
      animal: [],
      insight: [],
      medicine: [],
      perception: [],
      survival: [],
      charisma: ['', Validators.required],
      deception: [],
      intimidation: [],
      performance: [],
      persuasion: []
    });
    this.actionsGroup = this._formBuilder.group({
      actionName: [],
      actionBonus: [],
      actionDamage: [],
      actionType: []
  });
    this.traits = this._formBuilder.group({
      personality: [],
      bond: [],
      ideal: [],
      flaw: []
    });
    this.proficienciesGroup = this._formBuilder.group({
      proficiency: []
    });
    this.featuresGroup = this._formBuilder.group({
      featureName: [],
      featureDescription: []
    })

    this.actionDataSource.data = this.actions;
    this.personalityDataSource.data = this.personalityTraits;
    this.bondDataSource.data = this.bonds;
    this.idealDataSource.data = this.ideals;
    this.flawDataSource.data = this.flaws;
  }

  actions:Action[] = [];
  actionName!:string;
  actionBonus!:string;
  actionDamage!:string;
  actionType!:string;

  personalityTraits:PersonalityTrait[] = [];
  bonds:Bond[] = [];
  ideals:Ideal[] = [];
  flaws:Flaw[] = [];
  personality!:string;
  bond!:string;
  ideal!:string;
  flaw!:string;

  proficiencies:Proficiency[] = [];
  proficiency!:string;

  features:Feature[] = [];
  featureName!:string;
  featureDescription!:string;

  createCharacter() {

    MOCKPLAYERS.push(new Character(this.basicInfo.get('characterName')?.value, this.createVitals(), this.actions, this.features,
      this.createMoney(), this.createAbilities(), this.createSkills(), this.createTraits(), [], [], this.proficiencies, 'Campaign'));

    console.log(this.createVitals());
    console.log(this.createAbilities());
    console.log(this.createSkills());
    console.log(this.actions);
    console.log(this.createTraits());
  }

  createVitals(): Vitals {
    return new Vitals(0, this.basicInfo.get('class')?.value, this.basicInfo.get('level')?.value,
      this.basicInfo.get('playerName')?.value, this.basicInfo.get('race')?.value,
      this.basicInfo.get('alignment')?.value, this.gameplayVitals.get('ac')?.value, String((this.abilities.get('dexterity')?.value - 10) / 2),
      this.gameplayVitals.get('hitDice')?.value, this.gameplayVitals.get('hitDice')?.value, this.gameplayVitals.get('hp')?.value,
      this.gameplayVitals.get('hp')?.value, 100, this.gameplayVitals.get('speed')?.value, 0, 0);
  }

  createAbilities(): Ability[] {
    return [
      new Ability("Strength", this.abilities.get('strength')?.value, String(Math.floor((this.abilities.get('strength')?.value - 10) / 2))),
      new Ability("Dexterity", this.abilities.get('dexterity')?.value, String(Math.floor((this.abilities.get('dexterity')?.value - 10) / 2))),
      new Ability("Constitution", this.abilities.get('constitution')?.value, String(Math.floor((this.abilities.get('constitution')?.value - 10) / 2))),
      new Ability("Intelligence", this.abilities.get('intelligence')?.value, String(Math.floor((this.abilities.get('intelligence')?.value - 10) / 2))),
      new Ability("Wisdom", this.abilities.get('wisdom')?.value, String(Math.floor((this.abilities.get('wisdom')?.value - 10) / 2))),
      new Ability("Charisma", this.abilities.get('charisma')?.value, String(Math.floor((this.abilities.get('charisma')?.value - 10) / 2))),

    ]
  }

  createSkills(): Skill[] {
    return [
      new Skill("Athletics", String((Math.floor((this.abilities.get('strength')?.value - 10) / 2) + (this.abilities.get('athletics')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('athletics')?.value, "strength"),
      new Skill("Acrobatics", String((Math.floor((this.abilities.get('dexterity')?.value - 10) / 2) + (this.abilities.get('acrobatics')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('acrobatics')?.value, "dexterity"),
      new Skill("Sleight of Hand", String((Math.floor((this.abilities.get('dexterity')?.value - 10) / 2) + (this.abilities.get('sleight')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('sleight')?.value, "dexterity"),
      new Skill("Stealth", String((Math.floor((this.abilities.get('dexterity')?.value - 10) / 2) + (this.abilities.get('stealth')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('stealth')?.value, "dexterity"),
      new Skill("Arcana", String((Math.floor((this.abilities.get('intelligence')?.value - 10) / 2) + (this.abilities.get('arcana')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('arcana')?.value, "intelligence"),
      new Skill("History", String((Math.floor((this.abilities.get('intelligence')?.value - 10) / 2) + (this.abilities.get('history')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('history')?.value, "intelligence"),
      new Skill("Investigation", String((Math.floor((this.abilities.get('intelligence')?.value - 10) / 2) + (this.abilities.get('investigation')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('investigation')?.value, "intelligence"),
      new Skill("Nature", String((Math.floor((this.abilities.get('intelligence')?.value - 10) / 2) + (this.abilities.get('nature')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('nature')?.value, "intelligence"),
      new Skill("Religion", String((Math.floor((this.abilities.get('intelligence')?.value - 10) / 2) + (this.abilities.get('religion')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('religion')?.value, "intelligence"),
      new Skill("Animal Handling", String((Math.floor((this.abilities.get('wisdom')?.value - 10) / 2) + (this.abilities.get('animal')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('animal')?.value, "wisdom"),
      new Skill("Insight", String((Math.floor((this.abilities.get('wisdom')?.value - 10) / 2) + (this.abilities.get('insight')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('insight')?.value, "wisdom"),
      new Skill("Medicine", String((Math.floor((this.abilities.get('wisdom')?.value - 10) / 2) + (this.abilities.get('medicine')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('medicine')?.value, "wisdom"),
      new Skill("Perception", String((Math.floor((this.abilities.get('wisdom')?.value - 10) / 2) + (this.abilities.get('perception')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('perception')?.value, "wisdom"),
      new Skill("Survival", String((Math.floor((this.abilities.get('wisdom')?.value - 10) / 2) + (this.abilities.get('survival')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('survival')?.value, "wisdom"),
      new Skill("Deception", String((Math.floor((this.abilities.get('charisma')?.value - 10) / 2) + (this.abilities.get('deception')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('deception')?.value, "charisma"),
      new Skill("Intimidation", String((Math.floor((this.abilities.get('charisma')?.value - 10) / 2) + (this.abilities.get('intimidation')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('intimidation')?.value, "charisma"),
      new Skill("Performance", String((Math.floor((this.abilities.get('charisma')?.value - 10) / 2) + (this.abilities.get('performance')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('performance')?.value, "charisma"),
      new Skill("Persuasion", String((Math.floor((this.abilities.get('charisma')?.value - 10) / 2) + (this.abilities.get('persuasion')?.value ? this.gameplayVitals.get('proficiencyBonus')?.value : 0))), this.abilities.get('persuasion')?.value, "charisma"),
      ]
  }

  createTraits() : Traits {
    return new Traits(this.personalityTraits, this.bonds, this.ideals, this.flaws);
  }

  createMoney() : Money[] {
    return [
      new Money('cp', 0),
      new Money('sp', 0),
      new Money('ep', 0),
      new Money('gp', 0),
      new Money('pp', 0)
    ]
  }

  addAction() {
    this.actions.push(new Action(this.actionName, this.actionBonus, this.actionDamage, this.actionType));
    this.actionDataSource.data = this.actions;
    this.actionName = '';
    this.actionBonus = '';
    this.actionDamage = '';
    this.actionType = '';
  }

  addPersonality() {
    this.personalityTraits.push(new PersonalityTrait(this.personality));
    this.personalityDataSource.data = this.personalityTraits;
    this.personality = '';
  }
  addBond() {
    this.bonds.push(new Bond(this.bond));
    this.bondDataSource.data = this.bonds;
    this.bond = '';
  }
  addIdeal() {
    this.ideals.push(new Ideal(this.ideal));
    this.idealDataSource.data = this.ideals;
    this.ideal = '';
  }
  addFlaw() {
    this.flaws.push(new Flaw(this.flaw));
    this.flawDataSource.data = this.flaws;
    this.flaw = '';
  }

  addProficiency() {
    this.proficiencies.push(new Proficiency(this.proficiency));
    this.proficiencyDataSource.data = this.proficiencies;
    this.proficiency = '';
  }

  addFeature() {
    this.features.push(new Feature(this.featureName, this.featureDescription));
    this.featureDataSource.data = this.features;
    this.featureName = '';
    this.featureDescription = '';
  }

}
