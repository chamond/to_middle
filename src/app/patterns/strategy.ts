abstract class ReadStrategy {
  public run(file: string): void {}
}

class PDFReadStrategy extends ReadStrategy {
  public override run(file: string): void {
    console.log('reading pdf...');
    setTimeout(() => {
      console.log(file);
    }, 1000);
  }
}

class XMLReadStrategy extends ReadStrategy {
  public override run(file: string): void {
    console.log('reading xml...');
    setTimeout(() => {
      console.log(file);
    }, 1000);
  }
}

class TXTReadStrategy extends ReadStrategy {
  public override run(file: string): void {
    console.log('reading txt...');
    setTimeout(() => {
      console.log(file);
    }, 1000);
  }
}

class Reader {
  private strategy: ReadStrategy;

  public setStrategy(readStrategy: ReadStrategy): void {
    this.strategy = readStrategy;
  }

  public read(file: string): void {
    this.strategy.run(file);
  }
}

export const strategyExample = () => {
  const reader = new Reader();
  const stream = 'encodedBase64stream';
  reader.setStrategy(new TXTReadStrategy());
  reader.read(stream);
  reader.setStrategy(new PDFReadStrategy());
  reader.read(stream);
  reader.setStrategy(new XMLReadStrategy());
  reader.read(stream);
};
