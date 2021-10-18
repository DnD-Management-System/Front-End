export class Skill{
  get ability(): string {
    return this._ability;
  }

  set ability(value: string) {
    this._ability = value;
  }
  constructor(public _name:string,public _modifier:string, public _proficiency:boolean, public _ability:string) {}

  get proficiency(): boolean {
    return this._proficiency;
  }

  set proficiency(value: boolean) {
    this._proficiency = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get modifier(): string {
    return this._modifier;
  }

  set modifier(value: string) {
    this._modifier = value;
  }
}
