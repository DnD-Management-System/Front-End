import { Vitals } from "./player-subobjects/Vitals";
import { Spell } from "./Spell";
import { Action } from "./player-subobjects/Action";
import { Feature } from "./player-subobjects/Feature";
import { Money } from "./player-subobjects/Money";
import { Ability } from "./player-subobjects/Ability";
import { Skill } from "./player-subobjects/Skill";
import { Traits } from "./player-subobjects/Traits";
import { Item } from "./Item";
import { Proficiency } from "./player-subobjects/Proficiency";

export class Character {
    constructor(public _name:string, public _vitals:Vitals,
              public _actions:Action[], public _features:Feature[],
              public _moneyPouch:Money[], public _abilities:Ability[],
              public _skills:Skill[], public _traits:Traits,
              public _spells:Spell[], public _inventory:Item[],
              public _proficiencies:Proficiency[], public _campaign:string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get vitals(): Vitals {
    return this._vitals;
  }

  set vitals(value: Vitals) {
    this._vitals = value;
  }

  get actions(): Action[] {
    return this._actions;
  }

  set actions(value: Action[]) {
    this._actions = value;
  }

  get features(): Feature[] {
    return this._features;
  }

  set features(value: Feature[]) {
    this._features = value;
  }

  get moneyPouch(): Money[] {
    return this._moneyPouch;
  }

  set moneyPouch(value: Money[]) {
    this._moneyPouch = value;
  }

  get abilities(): Ability[] {
    return this._abilities;
  }

  set abilities(value: Ability[]) {
    this._abilities = value;
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set skills(value: Skill[]) {
    this._skills = value;
  }

  get traits(): Traits {
    return this._traits;
  }

  set traits(value: Traits) {
    this._traits = value;
  }

  get spells(): Spell[] {
    return this._spells;
  }

  set spells(value: Spell[]) {
    this._spells = value;
  }

  get inventory(): Item[] {
    return this._inventory;
  }

  set inventory(value: Item[]) {
    this._inventory = value;
  }

  get campaign(): string {
    return this._campaign;
  }

  set campaign(value: string) {
    this._campaign = value;
  }
  get proficiencies(): Proficiency[] {
    return this._proficiencies;
  }

  set proficiencies(value: Proficiency[]) {
    this._proficiencies = value;
  }
}
