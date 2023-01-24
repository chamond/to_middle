class Base {
  protected price: number;

  public getPrice(): number {
    return this.price;
  }

  public setPrice(value: number): void {
    this.price = value;
  }
}

export class Processor extends Base {
  constructor() {
    super();
    this.setPrice(27000);
  }
}

export class Battery extends Base {
  constructor() {
    super();
    this.setPrice(2000);
  }
}

export class IPhone extends Base {
  private components: Base[];

  constructor() {
    super();
    this.components = [
      new Processor(),
      new Battery()
    ];
  }

  public override getPrice(): number {
    return this.components.reduce((acc, c) => c.getPrice() + acc, 0);
  }
}

