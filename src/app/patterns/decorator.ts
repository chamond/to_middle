class Car {
  public brand: string;
  public model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  public wroom(): void {
    console.log('car did wroom');
  }
}

export class SuperCar extends Car {
  public superWroom(): void {
    console.log('car did super wroom');
  }
}
