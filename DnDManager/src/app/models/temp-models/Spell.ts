export class Spell {
  constructor(public _name:string, public _level:number, public _castingTime:string, public _range:string,
              public _components:string, public _duration:string, public _school:string, public _save:string,
              public _damage:string, public _description:string) { }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get castingTime(): string {
    return this._castingTime;
  }

  set castingTime(value: string) {
    this._castingTime = value;
  }

  get range(): string {
    return this._range;
  }

  set range(value: string) {
    this._range = value;
  }

  get components(): string {
    return this._components;
  }

  set components(value: string) {
    this._components = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get school(): string {
    return this._school;
  }

  set school(value: string) {
    this._school = value;
  }

  get save(): string {
    return this._save;
  }

  set save(value: string) {
    this._save = value;
  }

  get damage(): string {
    return this._damage;
  }

  set damage(value: string) {
    this._damage = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
