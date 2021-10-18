import { PersonalityTrait } from "./trait-subobjects/PersonalityTrait";
import { Bond } from "./trait-subobjects/Bond";
import { Ideal } from "./trait-subobjects/Ideal";
import { Flaw } from "./trait-subobjects/Flaw";

export class Traits{
  constructor(public _personalityTraits:PersonalityTrait[], public _bonds:Bond[], public _ideals:Ideal[], public _flaws:Flaw[]) {}

  get personalityTraits(): PersonalityTrait[] {
    return this._personalityTraits;
  }

  set personalityTraits(value: PersonalityTrait[]) {
    this._personalityTraits = value;
  }

  get bonds(): Bond[] {
    return this._bonds;
  }

  set bonds(value: Bond[]) {
    this._bonds = value;
  }

  get ideals(): Ideal[] {
    return this._ideals;
  }

  set ideals(value: Ideal[]) {
    this._ideals = value;
  }

  get flaws(): Flaw[] {
    return this._flaws;
  }

  set flaws(value: Flaw[]) {
    this._flaws = value;
  }
}
