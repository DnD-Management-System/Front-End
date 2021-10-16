export class Action {
  constructor(public _name:string, public _attackBonus:string, public _damage:string, public _type:string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get attackBonus(): string {
    return this._attackBonus;
  }

  set attackBonus(value: string) {
    this._attackBonus = value;
  }

  get damage(): string {
    return this._damage;
  }

  set damage(value: string) {
    this._damage = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
