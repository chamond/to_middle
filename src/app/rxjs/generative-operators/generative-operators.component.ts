import { Component, OnInit } from '@angular/core';
import { debounce, every, forkJoin, from, fromEvent, interval, of, Subject, timer } from "rxjs";

@Component({
  selector: 'app-generative-operators',
  templateUrl: './generative-operators.component.html',
  styleUrls: ['./generative-operators.component.sass']
})
export class GenerativeOperatorsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // const array = of([1, 2, 3]);
    // array.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('complete')
    // });

    // const observable = forkJoin([
    //   of(1, 2, 3, 4),
    //   Promise.resolve(8),
    //   timer(4000),
    // ]);
    // observable.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('This is how it ends!'),
    // });

    // const event = fromEvent(document, 'click');
    // event.pipe(
    //   debounce(() => interval(1000))
    // ).subscribe(value => {
    //   console.log(value);
    // });

    // const bool = from([1, 2, 3, 4]);
    // bool.pipe(
    //   every(value => value < 5)
    // ).subscribe(value => {
    //   console.log('is less than 4:', value);
    // })

    // const subject = new Subject();
    // subject.subscribe(value => {
    //   console.log(value);
    // });
    // subject.subscribe(value => {
    //   console.log(value);
    // });
    //
    // const obs = from([1, 2, 3]);
    // obs.subscribe(subject);
  }

}
