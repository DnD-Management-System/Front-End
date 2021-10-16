export class Proficiency {
  constructor(public _name:string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
