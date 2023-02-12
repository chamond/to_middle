export default class Calculator {
  private currentResult: number = 0;
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  public plus(num: number): number {
    this.currentResult += num;
    return this.currentResult;
  }

  public minus(num: number): number {
    this.currentResult -= num;
    return this.currentResult;
  }

  public multi(num: number): number {
    this.currentResult *= num;
    return this.currentResult;
  }

  public divide(num: number): number {
    this.currentResult /= num;
    return this.currentResult;
  }

  // метод реализует клонирование свойств, недоступное извне из-за приватного доступа, сейчас это просто число, но может быть сложный объект со сложной логикой копирования, например, удаление цикличных зависимостей.
  public clone(): Calculator {
    const cloned = new Calculator(this.model);
    cloned.currentResult = this.currentResult;
    return cloned;
  }
}
