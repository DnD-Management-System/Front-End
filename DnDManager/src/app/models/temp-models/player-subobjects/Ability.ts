export class Ability {
  constructor(public _name:string, public _score:number, public _modifier:string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get modifier(): string {
    return this._modifier;
  }

  set modifier(value: string) {
    this._modifier = value;
  }
}
