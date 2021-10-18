export class Vitals {
  constructor(public _vitalsId:number, public _clazz:string, public _level:number, public _player:string, public _race:string, public _alignment:string,
              public _armorClass:number, public _initiative:string, public _currentHitDice:number, public _hitDice:number,
              public _currentHp:number, public _totalHp:number, public _healthPercent:number, public _speed:string,
              public _deathSaveSuccess:number, public _deathSaveFailure:number) { }

  get vitalsId(): number {
    return this._vitalsId;
  }

  set vitalsId(value: number) {
    this._vitalsId = value;
  }

  get clazz(): string {
    return this._clazz;
  }

  set clazz(value: string) {
    this._clazz = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get player(): string {
    return this._player;
  }

  set player(value: string) {
    this._player = value;
  }

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  get alignment(): string {
    return this._alignment;
  }

  set alignment(value: string) {
    this._alignment = value;
  }

  get armorClass(): number {
    return this._armorClass;
  }

  set armorClass(value: number) {
    this._armorClass = value;
  }

  get initiative(): string {
    return this._initiative;
  }

  set initiative(value: string) {
    this._initiative = value;
  }

  get currentHitDice(): number {
    return this._currentHitDice;
  }

  set currentHitDice(value: number) {
    this._currentHitDice = value;
  }

  get hitDice(): number {
    return this._hitDice;
  }

  set hitDice(value: number) {
    this._hitDice = value;
  }

  get currentHp(): number {
    return this._currentHp;
  }

  set currentHp(value: number) {
    this._currentHp = value;
  }

  get totalHp(): number {
    return this._totalHp;
  }

  set totalHp(value: number) {
    this._totalHp = value;
  }

  get healthPercent(): number {
    return this._healthPercent;
  }

  set healthPercent(value: number) {
    this._healthPercent = value;
  }

  get speed(): string {
    return this._speed;
  }

  set speed(value: string) {
    this._speed = value;
  }

  get deathSaveSuccess(): number {
    return this._deathSaveSuccess;
  }

  set deathSaveSuccess(value: number) {
    this._deathSaveSuccess = value;
  }

  get deathSaveFailure(): number {
    return this._deathSaveFailure;
  }

  set deathSaveFailure(value: number) {
    this._deathSaveFailure = value;
  }
}
