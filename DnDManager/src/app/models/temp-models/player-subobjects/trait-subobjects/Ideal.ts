export class Ideal {
  constructor(public _value:string) {}

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
