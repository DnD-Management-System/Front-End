export class Money {
  constructor(public _name:string, public _value:number) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
}
