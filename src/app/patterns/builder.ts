const idGenerator = () => {
  let id = 0;
  return () => ++id;
};

class Property {
  public id: number;
  public status: string | null;
  public number: string | null;
  public specifications: string[];

  constructor(id: number) {
    this.id = id;
    this.status = null;
    this.number = null;
    this.specifications = [];
  }
}

class PropertyBuilder {
  private property: Property;
  private idGenerator: () => number = idGenerator();

  constructor() {
    this.property = new Property(this.idGenerator());
  }

  public setStatus(status: string): PropertyBuilder {
    this.property.status = status;
    return this;
  }

  public setNumber(number: string): PropertyBuilder {
    this.property.number = number;
    return this;
  }

  public setSpecifications(specifications: string[]): PropertyBuilder {
    this.property.specifications = specifications;
    return this;
  }

  public build(): Property {
    return this.property;
  }
}

export const builderExample = () => {
  const property1 = new PropertyBuilder()
    .setNumber('1a')
    .build();
  const property2 = new PropertyBuilder()
    .setNumber('2a')
    .setStatus('available')
    .setSpecifications(['window'])
    .build();
  console.log(property1, property2);
};
