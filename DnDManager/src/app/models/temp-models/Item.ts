export class Item{
  constructor(public _itemId:number, public _name:string, public _weight:string, public _value:string, public _description:string, public _inventorySheet:number) {}

  get itemId(): number {
    return this._itemId;
  }

  set itemId(value: number) {
    this._itemId = value;
  }

  get inventorySheet(): number {
    return this._inventorySheet;
  }

  set inventorySheet(value: number) {
    this._inventorySheet = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get weight(): string {
    return this._weight;
  }

  set weight(value: string) {
    this._weight = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
