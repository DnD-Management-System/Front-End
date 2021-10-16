export class Traits{
  constructor(public _personalityTraits:string[], public _bonds:string[], public _ideals:string[], public _flaws:string[]) {}

  get personalityTraits(): string[] {
    return this._personalityTraits;
  }

  set personalityTraits(value: string[]) {
    this._personalityTraits = value;
  }

  get bonds(): string[] {
    return this._bonds;
  }

  set bonds(value: string[]) {
    this._bonds = value;
  }

  get ideals(): string[] {
    return this._ideals;
  }

  set ideals(value: string[]) {
    this._ideals = value;
  }

  get flaws(): string[] {
    return this._flaws;
  }

  set flaws(value: string[]) {
    this._flaws = value;
  }
}
