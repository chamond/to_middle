export default class WorkerPerson {
  public name: string;
  public surname: string;
  public post: string;

  constructor(name: string, surname: string, post: string) {
    this.name = name;
    this.surname = surname;
    this.post = post;
  }

  public clone(): WorkerPerson {
    return new WorkerPerson(this.name, this.surname, this.post);
  }
}
